import { Validator } from 'jsonschema';
import { User } from '../models/index';
import validateUserFields from '../validator/validate';
import userNewSchema from '../schema/userSchema.json';

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

const listUserById = async (request, response, next) => {
  const { id } = request.params;
  const user = await User.findById(id);
  return user;
};

export default {
  create,
  listUserById,
};
