import {useState} from 'react'

function UserInfo({setUser, user}){
    const[newUsername,setNewUsername]=useState('')
    const[newPassword,setNewPassword]=useState('')
    const[passwordConfirmation,setPasswordConfirmation]=useState('')
    function handleSubmit(e){
        e.preventDefault()
         fetch(`/userinfo/${user.id}`, {
            method: "PATCH",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              newUsername,
              newPassword,
              password_confirmation: passwordConfirmation})
            })
            .then((r)=>{
              if (r.ok){
                r.json().then((user)=>setUser(user))
              }
            })
        }

    return(
        <>
        <form onSubmit={handleSubmit}>
        <input type="text" id="username" value={newUsername} onChange={(e)=>setNewUsername(e.target.value)}placeholder='Username'/>
        <input type="password" id="password" value={newPassword} onChange={(e)=>setNewPassword(e.target.value)}placeholder='Password'/>
        <input type="password" id="passwordConfirm" value={passwordConfirmation} onChange={(e)=>setPasswordConfirmation(e.target.value)}placeholder="Confirmation"/>
        <input type='submit' id='submit'value="Submit"/>
       </form>
       </>
    )

}
export default UserInfo