import * as express from 'express';
import { Response } from '../utils';

export default class UserController {
  public static async authenticate(
    req: express.Request,
    request: express.Response,
    next: express.NextFunction
  ) {
    const response = Response.Success();
    response.body = {
      message: 'not'
    };
    return next(new Error());
  }
}
