import File from '../models/File';

class FileController {
  async store(req, res) {
    const { originalname: name, filename: path } = req.file;
    console.log(name);
    console.log(path);
    const file = await File.create({
      name,
      path,
    });

    return res.json(file);
  }
}

export default new FileController();
