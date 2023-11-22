import React from "react";
import work from "./work.jpg";
import { Link } from "react-router-dom";
//import Axios from "axios";

function Login()
{
    
   /* const handleClick = (event) => {
        event.preventDefault();
        const data = {InventoryName:arr[0],Quantity:arr[1],Price:arr[2],Category:arr[3]};
        Axios.post("http://localhost:4000/inventoryRoute/Enter-Inventory",data)
        .then((res)=>{
            if(res.status === 200){}
            else
                Promise.reject();
        })
        .catch((err)=>console.log(err));
    } */
    return(
        <div className="container" style={{ height:" 90vh",margin:" 30px",display:"flex",backgrounColor:" white",boxShadow:"10px 20px 10px rgba(0, 0, 0, 0.1)"}}>
            <div className="images" >
                <img src={work} alt="" style={{maxHeight:"100%"}}/>
            </div>
            <div className="forms" style={{display:"flex",flexDirection: "column",alignItems: "center",justifyContent: "center",padding: "30px",textAlign:" left"}}>
                <form  style={{marginTop: "20px",backgrounColor:"white"}}>
                    <div>
                        <p>Username</p>
                        <input type="text" className="form-control" placeholder="Username"/>
                        </div>
                    <div>
                        <p>Password</p>
                        <input type="password" className="form-control" placeholder="Password"/>
                        </div>
                       
                        <Link to="/Enter-Inventory" style={{textDecoration:"none",color:"white"}}>
                        <button /*onClick={handleClick} */style={{ backgroundColor:" blue",color:"white",width:" 100%", margin:" 20px 5px", padding:"10px",border:" none",borderRadius: "10px",alignContent:"center"}} type="submit">

                            Login </button>
                            </Link>
                       
                </form>
            </div>
        </div>
    )
}
export default Login;