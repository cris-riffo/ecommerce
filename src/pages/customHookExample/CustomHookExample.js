import { useState } from 'react'
import { useUser } from  '../../hooks'

export const CustomHookExample = () => {
 const [toggle, setToggle] = useState(false)   
const userResponse =  useUser();

// console.log('userResponse', userResponse)

return <><div>Custom Hook Example Page</div>
<button onClick={() => setToggle(prevState => !prevState)}>Updating state {toggle.toString()}</button> 
</>
} 