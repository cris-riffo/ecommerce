import { UserConsumer } from  '../context/usercontext'

export const withUserContext = Component => () => {

    return <UserConsumer>{value =>  <Component userManager={value} /> }</UserConsumer>
} 

