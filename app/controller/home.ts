import { Controller } from 'egg';
import * as Octokit from '@octokit/rest';

const octokit = new Octokit();

interface IPagination {
  q: string;
  page: number;
  per_page: number;
  sort: any;
  order: any;
}

const defaultPagination: IPagination = {
  q: 'topic:egg-plugin',
  order: 'asc',
  sort: 'updated',
  page: 1,
  per_page: 10,
};
export default class HomeController extends Controller {
  public async index() {
    const { ctx } = this;
    await ctx.render('home/index.js', {
      url: ctx.originalUrl,
    });
  }

  public async plugins() {
    const { ctx } = this;
    const query: IPagination = Object.assign(defaultPagination, ctx.query);
    const result = await octokit.search.repos(query);
    const { data } = result;
    await ctx.render('plugins/index.js', {
      data,
      query,
    });
  }
}
