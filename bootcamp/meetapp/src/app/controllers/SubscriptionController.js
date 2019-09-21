import { Op } from 'sequelize';
import { isAfter, parseISO } from 'date-fns';
import Subscription from '../models/Subscription';
import Meetup from '../models/Meetup';
import User from '../models/User';
import Queue from '../../lib/Queue';
import SubscriptionMail from '../jobs/SubscriptionMail';

class SubscriptionController {
  async index(req, res) {
    const subscriptions = await Subscription.findAll({
      where: {
        user_id: req.userId,
      },
      include: [
        {
          model: Meetup,
          where: {
            date: {
              [Op.gt]: new Date(),
            },
          },
          required: true,
        },
      ],
      order: [[Meetup, 'date']],
    });

    return res.json(subscriptions);
  }

  async store(req, res) {
    const user = await User.findByPk(req.userId);
    /**
     * Verifica se o usuário é o mesmo organizador do meetup
     */
    const meetup = await Meetup.findByPk(req.params.id, {
      include: [User],
    });
    if (meetup.user_id === req.userId) {
      return res
        .status(401)
        .json({ error: 'You cant subscribe in your own meetup' });
    }

    /**
     * Verifica se o meetup já aconteceu
     */
    if (meetup.past) {
      return res.status(400).json({
        error: 'This meetup already happen',
      });
    }

    /**
     * Verifica se o usuário já se inscreveu no meetup
     */
    const alreadySubscribe = await Subscription.findOne({
      where: {
        user_id: req.userId,
        meetup_id: req.params.id,
      },
    });
    if (alreadySubscribe) {
      return res.status(400).json({
        error: 'You already subscribe on this meetup',
      });
    }

    /**
     * Verifica se o usuário já não se inscreveu em um meetup no mesmo horário
     */

    const checkDate = await Subscription.findOne({
      where: {
        user_id: req.userId,
      },
      include: [
        {
          model: Meetup,
          required: true,
          where: {
            date: meetup.date,
          },
        },
      ],
    });

    if (checkDate) {
      return res.status(400).json({
        error: 'You already have a meetup on this time',
      });
    }

    /**
     * Cria a subscription
     */

    const subscription = await Subscription.create({
      user_id: req.userId,
      meetup_id: meetup.id,
    });

    await Queue.add(SubscriptionMail.key, {
      meetup,
      user,
    });

    return res.json(subscription);
  }
}

export default new SubscriptionController();
