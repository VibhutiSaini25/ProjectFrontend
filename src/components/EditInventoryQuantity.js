import { useEffect, useState } from "react";
import InventoryForm from "./InventoryForm";
import Axios from "axios";
import { useParams } from "react-router-dom";


function EditInventoryQuantity()
{   const {id} = useParams();
    const [initialValue,setInitialValue] = useState({InventoryName:"",Quantity:"",Price:"",Category:""});
    const [newData,setNewData] = useState([]);


  
    useEffect(()=>{
        Axios.get("https://projectbackend-2a0p.onrender.com/inventoryRoute/update-inventory/" + id)
        .then((res)=>{
            if(res.status === 200){
                const {InventoryName,Quantity,Price,Category} = res.data;
                setInitialValue({InventoryName,Quantity,Price,Category});
                //window.location.origin();
            }
            else    
                Promise.reject();
        })
        .catch((err) => alert(err));
    },[id])


    const getState= (childData) => {
        setNewData(childData);
    }


    const handleSubmit = () =>{
       // event.preventDefault();
        const data = {InventoryName:newData[0],Quantity:newData[1],Price:newData[2],Category:newData[3]}
        Axios.put("https://projectbackend-2a0p.onrender.com/inventoryRoute/update-inventory/"+ id, data)
        .then((res)=>{
            if(res.status === 200){
                alert("Record updated")
               
            }
            else
                Promise.reject();
        })
        .catch((err)=>alert(err));
    }


    return (
        <form onSubmit={handleSubmit}>
            <InventoryForm getState={getState}
            InventoryNameValue={initialValue.InventoryName}
            QuantityValue={initialValue.Quantity}
            PriceValue={initialValue.Price}
            CategoryValue={initialValue.Category}>
                Update Inventory
                </InventoryForm>
        </form>
    )
}
export default EditInventoryQuantity;


