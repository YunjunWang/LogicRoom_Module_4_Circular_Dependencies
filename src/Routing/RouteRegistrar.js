import 'reflect-metadata'
import { injectable, inject } from 'inversify'
import { RouteUpdater } from './RouteUpdater'

@injectable()
export class RouteRegistrar {
  @inject(RouteUpdater)
  routeUpdater

  extractRoutes = (routes) => {
    const routeConfig = {}
    routes.forEach((route) => {
      const def = this.routeUpdater.findRoute(route.routeId)
      routeConfig[def.routeDef.path] = async (params, query) => {
        this.routeUpdater.updateCurrentRoute(def.routeId, params, query, 'external')
      }
    })
    return routeConfig
  }
}
