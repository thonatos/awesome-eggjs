import { Application } from 'egg';
export default (app: Application) => {
  app.get('/', app.controller.home.index);
  app.get('/plugins', app.controller.home.plugins);
};
