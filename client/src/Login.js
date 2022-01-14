import { useState } from "react/cjs/react.development"

function Login({setUser}){
const [username,setUsername]=useState('')
const[password,setPassword]=useState('')

        function handleSubmit(e){
            e.preventDefault()
            fetch('/login',{
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify({ username, password})

        } )
        .then((r)=>{
            if(r.ok){ 
                r.json().then((user)=>setUser(user))
            }
        })}

    return(
        <>
 <h2>Please Login or Make a New Account ^^</h2>
        <form onSubmit={handleSubmit}>
        <input type='text' placeholder="Username" value={username} onChange={(e)=>setUsername(e.target.value)}/>
        <input type='password'placeholder="Password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
        <input type='submit' value='Login!'/>
        </form>
        </>
    )
}
export default Login