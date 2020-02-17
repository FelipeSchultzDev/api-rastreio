import { Request, Response } from 'express';

class IndexController {
  async get(req: Request, res: Response) {
    return res.status(200).json({ success: true });
  }
}

export default new IndexController();
