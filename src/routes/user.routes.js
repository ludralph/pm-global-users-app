import express from 'express';
import userController from '../controller/user.controller';

const router = express.Router();

router
  .route('')
  // .get(userController.list)
  .post(userController.create);

router
  .route('/:id')
  .get(userController.listUserById);
  // .put(userController.updateUser)
  // .delete(userController.deleteUser);

export default router;
