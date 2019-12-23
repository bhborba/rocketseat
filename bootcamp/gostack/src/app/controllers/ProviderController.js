import User from '../models/User';
import File from '../models/File';

class ProviderController {
  index(req, res) {
    return res.json({ ops: 'deu boa' });
  }
}

export default new ProviderController();
