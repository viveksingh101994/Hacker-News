import * as express from 'express';
import { ROUTE_TYPE, utils } from '../utils';
import UserController from './user.controller';

const router = express.Router();

router.get(
  utils.getRoutePrefix(ROUTE_TYPE.public, 'authorization'),
  UserController.authenticate
);

export const userRoutes = router;
