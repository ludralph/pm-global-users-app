import userService from '../services/user.service';

const create = async (request, response, next) => {
  try {
    const user = await userService.create(request, response, next);
    response.status(201).json({ data: user });
  } catch (err) {
    next(err);
  }
};

const list = async (request, response, next) => {
  try {
    const user = await userService.listUsers(request, response, next);
    console.log('CONT ', user)
    response.status(200).json({ data: user });
  } catch (err) {
    next(err);
  }
};

const listUserById = async (request, response, next) => {
  try {
    const user = await userService.listUserById(request, response, next);
    response.status(200).json({ data: user });
  } catch (err) {
    next(err);
  }
};

const updateUserById = async (request, response, next) => {
  try {
    const user = await userService.updateUserById(request, response, next);
    response.status(200).json({ data: user });
  } catch (err) {
    next(err);
  }
};

const deleteUserById = async (request, response, next) => {
  try {
    const user = await userService.deleteUserById(request, response, next);
    response.status(200).json({ data: user });
  } catch (err) {
    next(err);
  }
};

export default {
  create,
  list,
  listUserById,
  updateUserById,
  deleteUserById
};
