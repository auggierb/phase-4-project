import { BrowserRouter,Routes,Route, NavLink} from "react-router-dom";
import SignUpForm from "./SignUpForm";
function NavBar({setUser}){
    function handleLogOut(){
fetch('/logout',{method: "DELETE"}).then((r)=>{
    if (r.ok){ setUser(null)
        
    }
})
    }
    return ( <div>
        <button onClick={handleLogOut}>Logout</button>
        <NavLink to='/'>
            Home
        </NavLink>
         <NavLink 
        to='/Search' exact>
        Search
        </NavLink>
         <NavLink 
        to='/Reviews' exact>
             Reviews
        </NavLink>
        <NavLink to='userinfo'>
            User Info
        </NavLink>
        
    </div>)
}
export default NavBar