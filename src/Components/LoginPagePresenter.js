import 'reflect-metadata'
import { injectable, inject, postConstruct } from 'inversify'
import { computed, observable } from 'mobx'
import { AuthenticationRepository } from '../Core/AuthenticationRepository'

@injectable()
export class LoginPagePresenter {
  @inject(AuthenticationRepository)
  authenticationRepository

  @computed
  get userToken() {
    return this.authenticationRepository.userModel.token
  }

  @computed
  get books() {
    return this.authenticationRepository.books
  }

  login = (userName, password) => {
    this.authenticationRepository.login(userName, password)
  }

  load = () => {
    this.authenticationRepository.load()
  }
}
