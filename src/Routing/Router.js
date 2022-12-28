import 'reflect-metadata'
import { injectable, inject } from 'inversify'
import { RouteRegistrar } from './RouteRegistrar'
import { RouteUpdater } from './RouteUpdater'
import { Routes } from './Routes'
import { Types } from '../Core/Types'

@injectable()
export class Router {
  @inject(RouteRegistrar)
  routeRegistrar

  @inject(RouteUpdater)
  routeUpdater

  @inject(Routes)
  routes

  @inject(Types.IRouterGateway)
  routerGateway

  registerRoutes = () => {
    let routeConfig = this.routeRegistrar.extractRoutes(this.routes.routes)
    this.routerGateway.registerRoutes(routeConfig)
  }

  goToId = async (routeId, params, query) => {
    let routePath = this.routeUpdater.findRoute(routeId).routeDef.path

    if (query) {
      routePath = routePath + '?' + query
    }

    this.routerGateway.goToPath(routePath)
  }
}
