import { useEffect, useState } from "react";


function InventoryForm(props)
{
    const [InventoryName,setInventoryName] = useState(props.InventoryNameValue); //useState("")
    const [Quantity,setQuantity] = useState(props.QuantityValue);
    const [Price,setPrice] = useState(props.PriceValue);
    const [Category,setCategory] = useState(props.CategoryValue);


    useEffect(()=>{
        setInventoryName(props.InventoryNameValue);
        setQuantity(props.QuantityValue);
        setPrice(props.PriceValue);
        setCategory(props.CategoryValue);


    },[props.InventoryNameValue,props.QuantityValue,props.PriceValue,props.CategoryValue]);




    const arr = [InventoryName,Quantity,Price,Category];
   
    const handleClick = () => {
        props.getState(arr);
    }


    return (
        <div style={{maxWidth:"50%",margin:"0px auto"}}>
            
            <input defaultValue={props.InventoryNameValue} onChange={(event)=>setInventoryName(event.target.value)} class="form-control my-2 " placeholder="Enter the Inventory name" required/>
          
                    
            <input defaultValue={props.QuantityValue} onChange={(event)=>setQuantity(event.target.value)} type="number" class="form-control my-2" placeholder="Enter the quantity" required/>
            
                    
            <input defaultValue={props.PriceValue} onChange={(event)=>setPrice(event.target.value)} type="number" class="form-control my-2" placeholder="Enter the price" required/>
            
                   
            <input defaultValue={props.CategoryValue} onChange={(event)=>setCategory(event.target.value)} class="form-control my-2" placeholder="Enter the category"required />
            
                    
            <button onClick={handleClick} class="btn btn-warning text-light my-2 d-block mx-auto" type="submit">{props.children}</button>
        </div>
    )
}
export default InventoryForm;
