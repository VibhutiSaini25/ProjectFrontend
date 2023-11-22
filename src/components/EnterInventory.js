import { useState } from "react";

import Axios from "axios";
import InventoryForm from "./InventoryForm";


function EnterInventory()
{
    const [arr,setArr] = useState([]); 
   
    const getState = (out) =>{
        setArr(out);
    }


    const handleSubmit = (event) => {
        event.preventDefault();
        const data = {InventoryName:arr[0],Quantity:arr[1],Price:arr[2],Category:arr[3]};
        Axios.post("https://projectbackend-2a0p.onrender.com/inventoryRoute/Enter-Inventory",data)
        .then((res)=>{
            if(res.status === 200)
                alert("Record added successfully");
            else
                Promise.reject();
        })
        .catch((err)=>alert(err));
        event.target.reset();
    }


    return (
        <form class="needs-validation" novalidate onSubmit={handleSubmit}>
            <InventoryForm getState={getState}
            InventoryNameValue=""
            QuantityValue=""
            PriceValue =""
            Category=""
            >Enter Inventory</InventoryForm>
        </form>
    )
}
export default EnterInventory;

