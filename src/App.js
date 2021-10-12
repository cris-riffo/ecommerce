import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { Contact, Home, ProductDetail } from './pages'
import { Menu } from './components/Menu'

const menuItem = [
  <Link to="/">Home</Link>,<Link to="/contact">Contact</Link>
]

function App() {
  return <Router>
    <Menu menuItems={menuItem}/>
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/detail/:id">
        <ProductDetail />
      </Route>
      <Route path="/contact">
        <Contact />
      </Route>
      <Route path="*">
        <div>404</div>
      </Route>
    </Switch>
  </Router>
}

export default App;
