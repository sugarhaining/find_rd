import { Controller } from 'egg';

export default class RecommendController extends Controller {
    public async list() {
        const { ctx } = this;

        ctx.body = await ctx.service.recommend.list()
    }
}
