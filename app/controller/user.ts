import { Controller } from 'egg';

export default class UserController extends Controller {
  public async index() {
    const { ctx } = this;
    const {
        nickName,
        avatarUrl
    } = ctx.request.body

    ctx.body = await ctx.service.user.login({
        nickName,
        avatarUrl
    })
  }
}
