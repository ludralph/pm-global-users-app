import fs from 'fs';
import path from 'path';
import Sequelize from 'sequelize';
import dotenv from 'dotenv';
import * as DbConfig from '../../config/config';

dotenv.config();

const basename = path.basename(module.filename);
const env = process.env.NODE_ENV || 'development';
const config = DbConfig.default[env];

const db = {};
// Configure Sequelize
let sequelize;
if (config.use_env_variable) {
  sequelize = new Sequelize(config.use_env_variable, { logging: false });
} else {
  sequelize = new Sequelize(config.url, {
    dialect: 'postgres',
  });
}
fs.readdirSync(__dirname)
  .filter(
    (file) => file.indexOf('.') !== 0 && file !== basename && file.slice(-3) === '.js'
  )
  .forEach((file) => {
    // eslint-disable-next-line global-require
    const model = require(`${path.join(__dirname, file)}`);
    db[model.name] = model;
  });

Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
