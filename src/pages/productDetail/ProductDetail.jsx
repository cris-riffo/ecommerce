import { useContext } from 'react';
import { UserConsumer, UserContext } from  '../../context/usercontext'

import { withUserContext } from '../../hoc/withUserContext'
export const  ProductDetail = withUserContext((props) => {

  console.log('props', props)

  const value = useContext(UserContext)

  console.log('value', value)

    // return <UserConsumer>{({currentUser : {name ,isLoggedIn }, handleLogin }) => { 
      
      return <div />
      // return <><div>Product Detail Page, and user {name} is loggedIn? {isLoggedIn.toString()}</div>
      // <button onClick={handleLogin}>{isLoggedIn ? 'Log out' :'Log In'} </button></>
      
      // }}
      
      // </UserConsumer>

});
