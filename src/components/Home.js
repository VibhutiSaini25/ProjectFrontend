
import "../App.css";
import { Link } from "react-router-dom";
function Home()
{
    return(
        <>
        <div className="container mt-3 p-3 my-3 d-flex  justify-content-lg-center  text-warning"  >
            <h1>
                Welcome
                <h2>YOU CAN PERFORM THE FOLLOWING FUNCTIONS WITH THIS SYSTEM: </h2>
            </h1>
            
            
        </div>
        <div class="container">    
  <div class="row">
    <div class="col-sm-4">
      <div class="panel panel ">
        <div class="panel-heading"style={{color:"yellow",textShadow:"-1px 0 black, 0 1px black, 1px 0 black, 0 -1px black"}}>Enter Inventory</div>
        <div class="panel-body">
          
          <Link to="/Enter-Inventory" class="nav-link text-light"><img src="https://uxwing.com/wp-content/themes/uxwing/download/logistics-shipping-delivery/product-package-add-icon.png" class="img-responsive" style={{maxWidth:"40%"}} alt="Image"/></Link>
          
        </div>
        
      </div>
    </div>
    <div class="col-sm-4"> 
      <div class="panel panel ">
        <div class="panel-heading"style={{color:"yellow",textShadow:"-1px 0 black, 0 1px black, 1px 0 black, 0 -1px black"}}>View/Read</div>
        <div class="panel-body ">
        <Link to="/inventory-List" class="nav-link text-light"><img src="https://cdn-icons-png.flaticon.com/512/8641/8641083.png" class="img-responsive" style={{maxWidth:"40%"}}alt="Image"/></Link>
        
        </div>
        
      </div>
    </div>
    <div class="col-sm-4"> 
      <div class="panel panel-success">
        <div class="panel-heading "style={{color:"yellow",textShadow:"-1px 0 black, 0 1px black, 1px 0 black, 0 -1px black"}}>Delete Inventory</div>
        <div class="panel-body ">
        <Link to="/inventory-List" class="nav-link text-light"><img src="https://icons.iconarchive.com/icons/custom-icon-design/flatastic-4/512/Package-delete-icon.png" class="img-responsive" style={{maxWidth:"40%"}} alt="Image"/></Link>
        
        </div>
        
      </div>
    </div>
  </div>
</div><br></br>

<div class="container " style={{marginLeft:"35%",justifyContent:"center"}}>    
  <div class="row">
    <div class="col-sm-4 ">
      <div class="panel panel">
        <div class="panel-heading "style={{color:"yellow",textShadow:"-1px 0 black, 0 1px black, 1px 0 black, 0 -1px black"}}>Update/Edit Inventory</div>
        <div class="panel-body ">
        <Link to="/inventory-List" class="nav-link text-light"><img src="https://cdn-icons-png.flaticon.com/128/2897/2897785.png" class="img-responsive" style={{maxWidth:"40%"}} alt="Image"/></Link>
        
        </div>
        
      </div>
    </div>
    </div>
    </div>
    <br></br>
        
        <footer class="container-fluid text-center bg-info"  style={{backgroundImage:"linear-gradient(to right,pink,skyblue, pink)"}}>
            <h3 style={{color:"yellow",textShadow:"-1px 0 yellow, 0 1px yellow, 1px 0 yellow, 0 -1px yellow"}}>MyCompany</h3>  
            <form class="form-inline"style={{color:"blue",textShadow:"-1px 0 blue, 0 1px blue, 1px 0 blue, 0 -1px blue"}}>Get details:
                <input type="email" class="form-control mx-auto" style={{maxWidth:"40%"}} placeholder="Email Address"/>
                <button type="button" class="btn btn-warning">Sign Up</button>
            </form>
    </footer>

        
        
        </>
        
               
        
        
        
    )
}
export default Home;