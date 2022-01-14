
import './App.css';
import SignUpForm from './SignUpForm'
import Login from './Login'
import Home from './Home';



import { useState, useEffect } from 'react/cjs/react.development';


function App() {
  const[user, setUser]=useState(null)
  useEffect(() => {
    
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }, []);
if(user){
   return <><h2>welcome {user.username}</h2>
  <Home user={user}setUser={setUser}/>
   
   </>
}
else{ 
  return (<>
  
<SignUpForm setUser={setUser}/>
<Login setUser={setUser}/> 

  

   
   
    
</>
  )
}
}
export default App;
