import * as React from 'react'
import { resolve } from 'inversify-react'
import { injectable, inject } from 'inversify'
import { computed, observable } from 'mobx'
import { Types } from '../Core/Types'
import { UserModel } from '../Core/UserModel'

@injectable()
export class AuthenticationRepository {
  @inject(Types.IServiceGateway)
  serviceGateway

  @inject(UserModel)
  userModel

  @observable
  books = []

  login = async (userName, password) => {
    let response = await this.serviceGateway.post(userName, password)
    this.userModel.userName = response.userName
    this.userModel.token = response.token
  }

  load = async () => {
    let response = await this.serviceGateway.get()
    this.books = response.books.map((book) => {
      return book
    })
  }
}
