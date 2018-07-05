import * as ip from 'ip';

export default () => {
  const config: any = {};

  config.static = {
    maxAge: 0,
  };

  config.logger = {
    consoleLevel: 'DEBUG',
  };

  config.development = {
    watchDirs: ['build'],
    ignoreDirs: ['app/web', 'public', 'config'],
  };

  config.reactssr = {
    injectCss: true,
  };

  const localIP = ip.address();
  const domainWhiteList: string[] = [];
  [9000, 9001, 9002].forEach((port) => {
    domainWhiteList.push(`http://localhost:${port}`);
    domainWhiteList.push(`http://127.0.0.1:${port}`);
    domainWhiteList.push(`http://${localIP}:${port}`);
  });

  config.security = { domainWhiteList };

  return config;
};
