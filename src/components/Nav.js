import {Link} from "react-router-dom";
import "../App.css";


function Nav()
{
    return(
        <nav class="navbar bg-info" style={{backgroundImage:"linear-gradient(to right,pink,lightblue, pink)"}}>
            <Link to="/" class="navbar-brand mx-5 header text-light" >Inventory Management System</Link>
        
          <div class="nav mx-5">
                <Link to="/login" class="nav-link text-light">Login</Link>

                <Link to="/Home" class="nav-link text-light">Home</Link>
                <Link to="/Enter-Inventory" class="nav-link text-light">Enter Inventory</Link>
                <Link to="/inventory-List" class="nav-link text-light">Inventory List</Link>
                
            </div>
        </nav>
        
    )
}
export default Nav;

