import React, {Profiler, useState}  from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";
import { Contact, Home, ProductDetail, CustomHookExample, Form, LoginPage } from './pages'
import { Menu } from './components/Menu'
import { UserProvider } from './context/usercontext'

const menuItem = [{ id: 'home', component: <Link  to="/">Home</Link>}
  ,{id: 'useMemoExample', component: <Link  to="/useMemoExample">Use memo Example</Link>},{ id: 'customHook', component: <Link  to="/customHook">Custom Hook Example</Link> },
  { id: 'form', component: <Link  to="/form">Form</Link> },
  { id: 'product-detail', component: <Link  to="/detail/:id/category/">Product Detail</Link> }
]


function App() {
  const formRef =  React.useRef()


  React.useEffect(() => {
    console.log('formRef', formRef.current)
  })
  return <UserProvider><Router>
    <Menu menuItems={menuItem}/>
    <Switch>
      <Route exact path="/">
        <Home/>
      </Route>
      <Route path="/detail/:id/category/:category?">
        <ProductDetail />
      </Route>
      <Route path="/contact">
      <Profiler id="contactPage">
        <Contact />
        </Profiler>
      </Route>
      <Route path="/customHook">
        <CustomHookExample />
      </Route>
      <Route path="/form">
        <Form ref={formRef}/>
      </Route>
      <Route path="*">
        <div>404</div>
      </Route> 
    </Switch>
    </Router>
     </UserProvider>
    // {/* :  <Switch><Route path="/login"><LoginPage onLogin={handleLogin}/></Route>  <Route path="*">
    // <Redirect to="/login"></Redirect>
    //   </Route> </Switch>} */}

}

export default App;
