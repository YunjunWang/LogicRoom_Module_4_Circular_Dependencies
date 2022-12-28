import 'reflect-metadata'
import { injectable, inject, postConstruct } from 'inversify'
import { Router } from './Router'
import { RoutingState } from './RoutingState'
import { computed, observable } from 'mobx'

@injectable()
export class CurrentPagePresenter {
  @inject(Router)
  router

  @inject(RoutingState)
  routingState

  @observable
  loading

  @computed
  get currentRouteId() {
    return this.routingState.currentState.routeId
  }

  bootstrap = async () => {
    this.router.registerRoutes()
    this.loading = false
  }
}
