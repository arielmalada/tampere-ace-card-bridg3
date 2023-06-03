import {MaterialUIApp} from './lib/material-ui-components'
import {appBase} from './lib/routes'
import {NotFound} from './views/notfound'
import {PlaceModel} from './views/place-model/place-model'
import {Home} from './views/home/home'
import {Car} from './views/car/car'
import {Information} from './views/information/information'
import {About} from './views/about/about'
import {Rewards} from './views/rewards/rewards'
// import {Rose} from './views/rose/rose'

declare let React: any
declare let ReactDOM: any
declare let ReactRouterDOM: any

const {BrowserRouter, Route, Switch} = ReactRouterDOM

const base = appBase()

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path={`${base}/car`} component={Car} />
          <Route exact path={`${base}`} component={Home} />
          <Route exact path={`${base}/about`} component={About} />
          <Route exact path={`${base}/information`} component={Information} />
          <Route exact path={`${base}/rewards`} component={Rewards} />
          <Route component={NotFound} />
        </Switch>
      </BrowserRouter>
    )
  }
}

const render = () => {
  document.body.insertAdjacentHTML('beforeend', '<div id="root"></div>')
  ReactDOM.render(
    <MaterialUIApp>
      <App />
    </MaterialUIApp>,
    document.getElementById('root')
  )
}

export {render}
