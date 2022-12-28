import * as React from 'react'
import { resolve } from 'inversify-react'
import { CurrentPagePresenter } from './CurrentPagePresenter'
import { Login } from '../Components/Login'
import { observer } from 'mobx-react'
import { RoutingState } from './RoutingState'

@observer
export class CurrentPageComponent extends React.Component {
  @resolve(CurrentPagePresenter)
  presenter

  @resolve(RoutingState)
  routingState

  componentDidMount() {
    this.presenter.bootstrap()
  }

  render() {
    const renderedComponents = [
      {
        id: 'login',
        component: <Login key="login" />
      }
    ]

    return (
      <div>
        {renderedComponents.map((current) => {
          return this.presenter.currentRouteId === current.id && current.component
        })}
      </div>
    )
  }
}
