import { Controller } from 'egg';

/**
 * 不要吐槽这里的代码 我只是想这么写 如果真要个理由 我是在为未来的拓展做准备
 *
 * @export
 * @class UserController
 * @extends {Controller}
 */
export default class UserController extends Controller {
    public async publish() {
        const { ctx } = this;
        const {
            content,
            mood,
            boardId,
            location: {
                longitude,
                latitude
            },
            tag,
            userId,
            userInfo: {
                nickName,
                avatarUrl
            }
        } = ctx.request.body

        ctx.body = await ctx.service.comment.publish({
            content,
            mood,
            boardId,
            location: {
                longitude,
                latitude,
            },
            tag,
            userId,
            userInfo: {
                nickName,
                avatarUrl
            }
        })
    }

    async list() {
        const { ctx } = this
        const {
            offset,
            pageSize,
            boardId,
        } = ctx.request.query

        const start: number = +pageSize * +offset

        ctx.body = await ctx.service.comment.list(+boardId, start, +pageSize, +offset)
    }

    async listNewest() {
        const { ctx } = this

        ctx.body = await ctx.service.comment.listNewest()
    }

    async reply() {
        const { ctx } = this
        const {
            commentId,
            content
        } = ctx.request.body

        ctx.body = await ctx.service.comment.reply(+commentId, content)
    }

    async listById() {
        const {ctx} = this

        const {
            id
        } = ctx.params
        
        ctx.body = await ctx.service.comment.listById(+id)
    }
}
