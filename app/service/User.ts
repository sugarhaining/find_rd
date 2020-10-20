import { Service } from 'egg';
import { genarateResponseBody } from '../public/utils';
import { pick } from 'lodash'

interface UserInfo {
    nickName: string
    avatarUrl: string
}

/**
 * User Service
 */
export default class User extends Service {
  public async login(userInfo: UserInfo) {
      const theLastUser = await this.ctx.model.User.find().sort({_id: -1}).limit(1)
      const theLastUserId = theLastUser.length === 0 ? 0 : theLastUser[0].id

      const loginedUser = await this.ctx.model.User.create({
          id: theLastUserId + 1,
          ...userInfo
      })

    return genarateResponseBody(200, 'login: ok', pick(loginedUser, ['id', 'nickName', 'avatarUrl']))
  }
}
