import { Validator } from 'jsonschema';
import db from '../models/index';
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
  const userRecord = await db.User.create(request.body);
  return userRecord;
};

export default {
  create,
};
