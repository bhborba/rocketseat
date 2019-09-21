import * as Yup from 'yup';
import User from '../models/User';

class UserController {
  async store(req, res) {
    // define o schema
    const schema = Yup.object().shape({
      name: Yup.string().required(),
      email: Yup.string()
        .email()
        .required(),
      password: Yup.string().required(),
    });

    // verfica se dados são validos
    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Invalid data' });
    }

    /*
    Procura usuário com o mesmo email passado no body
    */
    const userExists = await User.findOne({ where: { email: req.body.email } });

    /*
    Se existe, retorna erro
    */

    if (userExists) {
      return res.status(400).json({ error: 'User already exists' });
    }

    /*
    Cria o usuário passado no body
    */

    const { id, name, email } = await User.create(req.body);

    /*
    retorna o usuário criado num json
    */

    return res.json({
      id,
      name,
      email,
    });
  }

  // atualizar senha ou nome/email
  async update(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string(),
      email: Yup.string().email(),
      oldPassword: Yup.string()
        .min(6)
        .required(),
      password: Yup.string()
        .min(6)
        .when('oldPassword', (oldPassword, field) =>
          oldPassword ? field.required() : field
        ),
      confirmPassword: Yup.string().when('password', (password, field) =>
        password ? field.required().oneOf([Yup.ref('password')]) : field
      ),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Incorrect data' });
    }

    const { email, oldPassword } = req.body;

    const user = await User.findByPk(req.userId);
    if (email !== user.email) {
      const userExists = await User.findOne({ where: { email } });

      if (userExists) {
        return res.status(400).json({ error: 'User already exists' });
      }
    }
    if (oldPassword && !(await user.checkPassword(oldPassword))) {
      return res.status(401).json({ error: 'Password does not match' });
    }

    const { id, name, email: userEmail } = await user.update(req.body);

    return res.json({
      id,
      name,
      email: userEmail,
    });
  }
}

export default new UserController();
