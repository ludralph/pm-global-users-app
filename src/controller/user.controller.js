import userService from '../services/user.service';

const create = async (request, response, next) => {
  try {
    console.log('REQ', request.body)
    const user = await userService.create(request, response, next);
    response.status(201).json({ data: user });
  } catch (err) {
    next(err);
  }
};

const list = async (request, response, next) => {};

export default { create, list };
