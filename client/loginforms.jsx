import React from 'react'

const LoginForm = (props) => {
  return (
    <div>
<form>
<label>
  Name:
  <input type="text" name="name" />
</label>
<label>
    E-mail
<input type="text" name="e-mail" />
</label>
<label>
    Password
<input type="text" name="password" />
</label>
</form>
<input type="submit" value="submit" onClick={props.loginFunc}/>
    </div>
  )
}

export default LoginForm

