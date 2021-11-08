import React from 'react'
export const Form = React.forwardRef((props, ref) => {

const [value, setValue] = React.useState('default')
const inputRef = React.useRef()

const handleChange = event => {
    console.log('event', event.target.value)
    setValue(event.target.value)
}

const handleSubmit = (event) => {
// call api
event.preventDefault();
console.log('ref on submit', inputRef.current.value)
}


//  React.useEffect(() => {
//     console.log('ref', inputRef.current.value)

//  },[])

return <form ref={ref} onSubmit={handleSubmit} style={{
    padding: 20,
}}>
<label htmlFor="Name">Name</label>
<br/>
<input name="Name" value={value} type="text" onChange={handleChange} />
<br/><br/> 
<input type="submit" value="Send Form" />  
{/* <button>Send form</button> */}
</form>

})