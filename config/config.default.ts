import * as path from 'path';
import { EggAppConfig } from 'egg';

export default (appInfo: EggAppConfig) => {
  const config: any = {};

  config.keys = '123456fdsfsfdsfsdfsdfds';

  config.static = {
    prefix: '/public/',
    dir: path.join(appInfo.baseDir, '/public'),
  };

  config.siteFile = {
    '/favicon.ico': path.join(
      appInfo.baseDir,
      'app/web/assets/images/favicon.ico',
    ),
  };

  config.middleware = [];

  return config;
};
