import express from 'express';
import userController from '../controller/user.controller';

const router = express.Router();

router
  .route('')
  .get(userController.list)
  .post(userController.create);

export default router;
