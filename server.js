import logger from 'simple-node-logger';
import config from './src/config/config';
import app from './src/app';
import db from './src/models';

const simpleLogger = logger.createSimpleLogger();

db.sequelize.sync({force: false}).then(() => {
  app.listen(config.PORT, () => {
    simpleLogger.log('info', `Server started on port ${config.PORT}`);
  });
});
