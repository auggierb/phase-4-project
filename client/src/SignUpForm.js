import { useState } from "react";
function SignUpForm({setUser}) {
const[username,setUsername]=useState('')
const[password,setPassword]=useState('')
const[passwordConfirmation,setPasswordConfirmation]=useState('')
function handleSubmit(e){
e.preventDefault()
 fetch("/signup", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      username,
      password,
      password_confirmation: passwordConfirmation})
    })
    .then((r)=>{
      if (r.ok){
        r.json().then((user)=>setUser(user))
      }
    })
}
    return (
      <div >
    <form onSubmit={handleSubmit}>
        <input type="text" id="username" value={username} onChange={(e)=>setUsername(e.target.value)}placeholder='Username'/>
        <input type="password" id="password" value={password} onChange={(e)=>setPassword(e.target.value)}placeholder='Password'/>
        <input type="password" id="passwordConfirm" value={passwordConfirmation} onChange={(e)=>setPasswordConfirmation(e.target.value)}placeholder="Confirmation"/>
        <input type='submit' id='submit'value="Submit"/>
    </form>
      </div>
    );
  }
  
  export default SignUpForm;
  