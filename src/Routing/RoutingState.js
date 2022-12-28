import 'reflect-metadata'
import { injectable } from 'inversify'
import { observable } from 'mobx'

@injectable()
export class RoutingState {
  @observable
  currentState = { routeId: 'login', params: null, query: null }
}
