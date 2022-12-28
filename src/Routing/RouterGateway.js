import { injectable } from 'inversify'
import Navigo from 'navigo'

@injectable()
export class RouterGateway {
  navigo
  registerRoutes = async (routeConfig) => {
    if (this.navigo) return new Promise((resolve) => setTimeout(resolve, 0))
    let root = null
    let useHash = true
    let hash = '#'
    this.navigo = new Navigo(root, useHash, hash)
    this.navigo
      .on(routeConfig)
      .notFound(() => {})
      .resolve()
    return new Promise((resolve) => setTimeout(resolve, 0))
  }

  unload = () => {
    this.navigo.destroy()
  }

  goToPath = async (pathname) => {
    this.navigo.navigate(pathname)
  }
}
