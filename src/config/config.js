/* eslint-disable linebreak-style */
const dotenv = require('dotenv');

dotenv.config();

const config = {
  development: {
    url: process.env.DEVELOPMENT_DATABASE_URL,
    dialect: 'postgres',
    logging: true,
  },
  test: {
    url: process.env.TEST_DATABASE_URL,
    dialect: 'postgres',
    logging: false,
  },
  production: {
    use_env_variable: process.env.PRODUCTION_DATABASE_URL,
    dialect: 'postgres',
    dialectOptions: {
      ssl: true,
    },
  },
  PORT: process.env.PORT || 5000,
};

module.exports = config;
