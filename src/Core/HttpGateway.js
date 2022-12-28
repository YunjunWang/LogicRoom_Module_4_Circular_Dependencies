import { AuthenticationRepository } from '../Core/AuthenticationRepository'
import { injectable, inject } from 'inversify'
import { container } from '../ioc'
import { UserModel } from '../Core/UserModel'

@injectable()
export class HttpGateway {
  @inject(UserModel)
  userModel

  async post(userName, password) {
    if (userName === 'userName' && password === 'password') {
      return Promise.resolve({
        userName: 'pete@logicoom.co',
        token: '123'
      })
    } else {
      return Promise.resolve({
        userName: 'unset',
        token: 'unset'
      })
    }
  }

  async get() {
    if (this.userModel.token === '123') {
      return Promise.resolve({
        books: [
          {
            bookId: 61371,
            name: 'Wind in the willows',
            ownerId: 'pete@logicroom.co',
            author: 'Kenneth Graeme'
          },
          {
            bookId: 61381,
            name: 'I, Robot',
            ownerId: 'pete@logicroom.co',
            author: 'Isaac Asimov'
          },
          {
            bookId: 61391,
            name: 'The Hobbit',
            ownerId: 'pete@logicroom.co',
            author: 'Jrr Tolkein'
          }
        ]
      })
    } else {
      alert('authentication failed')
      return Promise.resolve({
        books: []
      })
    }
  }
}
