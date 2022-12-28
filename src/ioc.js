import { Container } from 'inversify'
import { HttpGateway } from './Core/HttpGateway'
import { RouterGateway } from './Routing/RouterGateway'
import { RoutingState } from './Routing/RoutingState'
import { Types } from './Core/Types'
import { AuthenticationRepository } from './Core/AuthenticationRepository'
import { UserModel } from './Core/UserModel'

export const container = new Container({
  autoBindInjectable: true,
  defaultScope: 'Transient'
})

container.bind(Types.IServiceGateway).to(HttpGateway)
container.bind(Types.IRouterGateway).to(RouterGateway)
container.bind(RoutingState).to(RoutingState).inSingletonScope()
container.bind(AuthenticationRepository).to(AuthenticationRepository).inSingletonScope()
container.bind(UserModel).to(UserModel).inSingletonScope()
