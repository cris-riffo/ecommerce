import {Profiler} from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { Contact, Home, ProductDetail, CustomHookExample } from './pages'
import { Menu } from './components/Menu'

const menuItem = [{ id: 'home', component: <Link  to="/">Home</Link>}
  ,{id: 'useMemoExample', component: <Link  to="/useMemoExample">Use memo Example</Link>},{ id: 'customHook', component: <Link  to="/customHook">Custom Hook Example</Link> }
]

const text = "this is a test" 

const callBack = (props, prop2) => console.log('profiler props', prop2)

function App() {
  return <Router>
    <Menu menuItems={menuItem}/>
    <Switch>
      <Route exact path="/">
        <Home/>
      </Route>
      <Route path="/detail/:id/category/:category?">
        <ProductDetail />
      </Route>
      <Route path="/contact">
      <Profiler id="contactPage" onRender={callBack}>
        <Contact test={text}/>
        </Profiler>
      </Route>
      <Route path="/customHook">
        <CustomHookExample />
      </Route>
      <Route path="*">
        <div>404</div>
      </Route>
    </Switch>
  </Router>
}

export default App;
