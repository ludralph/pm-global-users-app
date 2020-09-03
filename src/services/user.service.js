import { Validator } from 'jsonschema';
import db from '../models';
import validateUserFields from '../validator/validate';
import userNewSchema from '../schema/userSchema.json';

const { User } = db;
const { Op } = db.Sequelize;

const v = new Validator();
const create = async (request, response, next) => {
  const validSchema = validateUserFields(
    v.validate(request.body, userNewSchema),
    'user'
  );

  if (validSchema !== 'OK') {
    return next(validSchema);
  }
  const userRecord = await User.create(request.body);
  return userRecord;
};

const getPagingData = (data, page, limit) => {
  const { count: totalItems, rows: users } = data;
  const currentPage = page ? +page : 1;
  const totalPages = Math.ceil(totalItems / limit);

  return {
    totalItems,
    users,
    totalPages,
    currentPage,
  };
};

const getPagination = (page, size) => {
  const limit = size ? +size : 25;
  const offset = page ? page * limit : 0;
  return { limit, offset };
};

const listUsers = async (request, response, next) => {
  const {
    page,
    page_size,
    filter_field,
    filter_value,
    sort_field,
    sort_order_mode,
  } = request.query;
  const { limit, offset } = getPagination(page, page_size);
  const condition = filter_field
    ? { [filter_field]: { $ilike: `%${filter_value}%` } }
    : null;
  const order =
    sort_field && sort_order_mode
      ? [[`${sort_field}`, `${sort_order_mode}`]]
      : null;
  const data = await User.findAndCountAll({
    where: condition,
    offset,
    limit,
    order,
  });
  const result = getPagingData(data, page, limit);
  return result;
};

const listUserById = async (request, response, next) => {
  const { id } = request.params;
  const user = await User.findById(id);
  return user;
};

const updateUserById = async (request, response, next) => {
  const { id } = request.params;
  const payload = request.body;
  const validSchema = validateUserFields(
    v.validate(payload, userNewSchema),
    'user'
  );

  if (validSchema !== 'OK') {
    return next(validSchema);
  }
  const user = await User.findById(id);
  if (user) {
    Object.assign(user, payload);
    user.save();
  }
  return user;
};

const deleteUserById = async (request, response, next) => {
  const { id } = request.params;
  const user = await User.findById(id);
  const deletedUser = await user.destroy();
  return deletedUser;
};

export default {
  create,
  listUsers,
  listUserById,
  updateUserById,
  deleteUserById,
};
