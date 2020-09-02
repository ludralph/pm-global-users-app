import logger from 'simple-node-logger';
import config from '../config/config';
import app from './app';
import db from './models';

const simpleLogger = logger.createSimpleLogger();

db.sequelize.sync().then(() => {
  app.listen(config.PORT, () => {
    simpleLogger.log('info', `Server started on port ${config.PORT}`);
  });
});
