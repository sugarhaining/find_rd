import { Service } from 'egg'

/**
 * Comment Service
 */
export default class Comment extends Service {
    public async list() {
        return 'hello recommend'
    }
}
