import { Service } from 'egg';
import { pick } from 'lodash'
import { genarateResponseBody } from '../public/utils/index';


interface Location {
    longitude: number
    latitude: number
}

interface UserInfo {
    nickName: string
    avatarUrl: string
}

interface CommentInter {
    content: string
    mood: string
    boardId: number
    location: Location
    tag: string
    userId: number
    userInfo: UserInfo
}
/**
 * Comment Service
 */
export default class Comment extends Service {
    public async publish(comment: CommentInter) {
        const theLastComment = await this.ctx.model.Comment.find().sort({ _id: -1 }).limit(1)
        const theLastCommentId = theLastComment.length === 0 ? 0 : theLastComment[0].id
        const newComment = await this.ctx.model.Comment.create({
            time: new Date(),
            id: theLastCommentId + 1,
            reply: [],
            ...comment
        })

        return genarateResponseBody(200, 'comment publish: ok', pick(newComment, [
            'content',
            'mood',
            'boardId',
            'location',
            'tag',
            'userInfo'
        ]))
    }
    async list(boardId: number, start: number, pageSize: number, offset: number) {
        const pagination = {
            offset,
            pageSize
        }

        if (isNaN(boardId)) {
            return genarateResponseBody(200, 'Unlawful boardId, except number', {
                comments: [],
                pagination
            })
        }
        const comments = await this.ctx.model.Comment.find({ boardId }).sort({ _id: -1 }).skip(start).limit(pageSize)

        const commentList = comments.map(c => pick(c, [
            'location',
            'userInfo',
            'reply',
            'time',
            'content',
            'mood',
            'boardId',
            'tag',
            'userId',
            'id',
            'pagination'
        ]))

        return genarateResponseBody(200, 'query comment: ok', {
            comments: commentList,
            pagination
        })
    }
    async listNewest() {
        const comments = await this.ctx.model.Comment.find().sort({ _id: -1 }).limit(10)
        return genarateResponseBody(200, 'get newest comment: ok', comments)
    }

    async reply(commentId: number, content: string) {
        const pushItem:any = {reply: content}
        await this.ctx.model.Comment.update({ id: commentId }, { $push: pushItem })

        return genarateResponseBody(200, 'reply comment: ok', {})
    }

    async listById(id: number) {
        const res = await this.ctx.model.Comment.findOne({id})

        return genarateResponseBody(200, 'get comment: ok', pick(res, [
            'location',
            'userInfo',
            'reply',
            'time',
            'content',
            'mood',
            'boardId',
            'tag',
            'userId',
            'id',
            'pagination'
        ]))
    }
}
