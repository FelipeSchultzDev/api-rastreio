import { Request, Response, NextFunction } from 'express';
import joi from 'joi';

import Regex from 'utils/regex';

class RastreioValidation {
  async get(req: Request, res: Response, next: NextFunction): Promise<Response | void> {
    const { cod } = req.params;

    const correios = joi.validate(cod, joi.string().regex(Regex.getCorreiosRegex()));
    const ups = joi.validate(cod, joi.string().regex(Regex.getUpsRegex()));

    if (correios.error && ups.error) {
      return res.status(400).json({ success: false, error: ['codigo.de.rastreio.invalido'] });
    }

    return next();
  }
}

export default new RastreioValidation();
