import * as bodyParser from 'body-parser';
import * as express from 'express';
import { configuration } from './configuration';
import { DB } from './database';
import { Response } from './utils/response';

export default class App {
  private app: express.Application;
  private port: string;

  constructor(routes, port: string) {
    this.app = express();
    this.port = port;
    this.initializeDatabase();
    this.initializeMiddlewares();
    this.initializeRoutes(routes);
    this.initializeErrorHandler();
    this.initializeResponseHandler();
  }

  public listen() {
    this.app.listen(this.port, () => {
      console.log(`Server is listening on port ${this.port}`);
    });
  }

  private initializeDatabase() {
    DB.init();
  }

  private initializeMiddlewares() {
    this.app.use(this.loggerMiddleWare);
    this.app.use(bodyParser.json());
    this.app.use(bodyParser.urlencoded({ extended: false }));
  }

  private initializeRoutes(routes) {
    routes.forEach(route => {
      this.app.use(route);
    });
  }

  private loggerMiddleWare(
    request: express.Request,
    response: express.Response,
    next: express.NextFunction
  ) {
    console.info(`Method--> ${request.method} | Path--> ${request.path}`);
    next();
  }

  private initializeErrorHandler() {
    this.app.use((errObj, req, res, next) => {
      let errorResp = errObj;
      if (errObj instanceof Error) {
        errorResp = Response.ServerError();
        errorResp.err = errObj;
      }
      next(errorResp);
    });
  }

  private initializeResponseHandler() {
    this.app.use((resData, req, res, next) => {
      if (resData.status === 200) {
        res.send(resData.body);
      } else if (resData.status === 302) {
        res.redirect(resData.body.url);
      } else {
        res.status(resData.status).json(resData.body);
      }
      // TODO: Code for Logger or elastic search
      if (configuration.envMode !== 'production' && resData.err) {
        console.error(resData.err);
      }
    });
  }
}
