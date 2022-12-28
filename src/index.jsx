import 'reflect-metadata'
import * as React from 'react'
import { render } from 'react-dom'
import { Provider } from 'inversify-react'
import { CurrentPageComponent } from './Routing/CurrentPageComponent'
import { container } from './ioc'

const App = () => (
  <Provider container={container}>
    <div>
      <CurrentPageComponent />
    </div>
  </Provider>
)

render(<App />, document.getElementById('root'))
