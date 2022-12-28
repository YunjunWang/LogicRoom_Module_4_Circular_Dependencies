import { injectable } from 'inversify'
import { observable, observe } from 'mobx'

@injectable()
export class UserModel {
  @observable
  username

  @observable
  token
}
