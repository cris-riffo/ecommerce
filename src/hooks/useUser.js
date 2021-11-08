import { useState, useEffect } from "react";
import axios from  'axios'

const initialState = {
    loading: false,
}

export const useUser = () => {
console.log('Executing Hook')
const [response, setResponse] = useState(initialState)
useEffect(() => {

    console.log('Executing use Effect')

    const etag  = axios.head('https://api.github.com/users');

    const fetchUserData = async () => {
     try{
      setResponse(prevState => ({ ...prevState, loading:  true}))
      const { data } = await  axios.get('https://api.github.com/users');
      setResponse(prevState => ({ ...prevState, data }))
     }
     catch(error){
        setResponse(prevState => ({...prevState, error }))
     }
     finally{
        setResponse(prevState => ({...prevState, loading:  false}))
     }

}
fetchUserData();
})


return response;
}