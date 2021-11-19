import Button from  '@material-ui/core/Button'
import Input from  '@material-ui/core/Input'
import TextField from  '@material-ui/core/TextField'

export const LoginPage = ({onLogin}) => {

 return <>
<TextField type="text" name="username" />
<TextField type="password" name="password" />
<Button onClick={onLogin}>Login</Button>
</>

}
