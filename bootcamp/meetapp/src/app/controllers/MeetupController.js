import * as Yup from 'yup';
import {
  startOfHour,
  parseISO,
  isBefore,
  startOfDay,
  endOfDay,
} from 'date-fns';
import { Op } from 'sequelize';
import Meetup from '../models/Meetup';
import User from '../models/User';

class MeetupController {
  async index(req, res) {
    const where = {};
    const page = req.query.page || 1;

    if (req.query.date) {
      const searchDate = parseISO(req.query.date);

      where.date = {
        [Op.between]: [startOfDay(searchDate), endOfDay(searchDate)],
      };
    }

    const meetups = await Meetup.findAll({
      where,
      include: [User],
      limit: 10,
      offset: 10 * page - 10,
    });

    return res.json(meetups);
  }

  async store(req, res) {
    const schema = Yup.object().shape({
      file: Yup.number().required(),
      date: Yup.date().required(),
      title: Yup.string().required(),
      description: Yup.string().required(),
      location: Yup.string().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails' });
    }
    /**
     * Check for past dates
     */
    const hourStart = startOfHour(parseISO(req.body.date));

    if (isBefore(hourStart, new Date())) {
      return res.status(400).json({ error: 'Past dates are not permited' });
    }

    const meetup = await Meetup.create({
      ...req.body,
      user_id: req.userId,
    });

    return res.json(meetup);
  }

  async update(req, res) {
    const schema = Yup.object().shape({
      file: Yup.number().required(),
      date: Yup.date().required(),
      title: Yup.string().required(),
      description: Yup.string().required(),
      location: Yup.string().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails' });
    }

    const meetup = await Meetup.findByPk(req.params.id);
    if (meetup.user_id !== req.userId) {
      return res
        .status(401)
        .json({ error: 'Only the meetup organizers can edit them' });
    }

    const hourStart = startOfHour(parseISO(req.body.date));

    if (isBefore(hourStart, new Date())) {
      return res.status(400).json({ error: 'Past dates are not permited' });
    }

    if (meetup.past) {
      return res.status(400).json({
        error: 'You Only can edit meetups that isnt past yet',
      });
    }

    await meetup.update(req.body);
    return res.json(meetup);
  }

  async delete(req, res) {
    const meetup = await Meetup.findByPk(req.params.id);
    if (meetup.user_id !== req.userId) {
      return res
        .status(401)
        .json({ error: 'Only the meetup organizers can delete them' });
    }
    if (meetup.past) {
      return res.status(400).json({
        error: 'You Only can delete meetups that isnt past yet',
      });
    }

    await meetup.destroy();

    return res.json(meetup);
  }
}

export default new MeetupController();
