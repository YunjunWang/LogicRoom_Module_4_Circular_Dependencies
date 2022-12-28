import 'reflect-metadata'
import { injectable, inject, postConstruct } from 'inversify'

@injectable()
export class Routes {
  routes = [
    {
      routeId: 'login',
      routeDef: {
        path: '/app/login',
        permissionId: 'login'
      },
      onEnter: () => {
        // console.log('entering login')
      },
      onLeave: () => {
        // console.log('leaving login')
      }
    }
  ]
}
