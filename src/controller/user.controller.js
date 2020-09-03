import userService from '../services/user.service';

const create = async (request, response, next) => {
  try {
    const user = await userService.create(request, response, next);
    response.status(201).json({ data: user });
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

export default { create, listUserById };
