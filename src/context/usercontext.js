import React, {useState} from  'react'

let UserContext;
const {Provider, Consumer} =  UserContext = React.createContext();

UserContext.displayName = 'UserContext'

const UserProvider = ({children}) => {
    const [currentUser, setCurrentUser] = useState({
        isLoggedIn: false,
        name: 'Michael Jackson'
      });

      const handleLogin = () => setCurrentUser(prevState => ({...prevState, isLoggedIn: !prevState.isLoggedIn}))

      const userManager = {
        currentUser,
        handleLogin,
      }


    return <Provider value={userManager}>{children}</Provider>
}

export { UserProvider, Consumer as UserConsumer, UserContext }