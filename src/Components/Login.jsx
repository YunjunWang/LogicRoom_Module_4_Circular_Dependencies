import * as React from 'react'
import { resolve } from 'inversify-react'
import { observer } from 'mobx-react'
import { Router } from '../Routing/Router'
import { LoginPagePresenter } from './LoginPagePresenter'

@observer
export class Login extends React.Component {
  @resolve(Router)
  router

  @resolve(LoginPagePresenter)
  presenter

  componentDidMount() {
    this.setState({ userName: '', password: '' })
  }

  render() {
    return (
      <>
        <h1>Login</h1>
        <p>correct details : (userName = 'userName', password = 'password')</p>
        username :{' '}
        <input
          type="text"
          onChange={(el) => {
            this.setState({ ...this.state, userName: el.target.value })
          }}
        />
        <br />
        password :{' '}
        <input
          type="text"
          onChange={(el) => {
            this.setState({ ...this.state, password: el.target.value })
          }}
        />
        <br />
        <button
          onClick={() => {
            this.presenter.login(this.state.userName, this.state.password)
          }}
        >
          Login
        </button>
        <br />
        <button
          onClick={() => {
            this.presenter.load()
          }}
        >
          Load books
        </button>
        <br />
        <div>
          {this.presenter.books.map((book, i) => {
            return <div key={i}>{book.name}</div>
          })}
        </div>
      </>
    )
  }
}
