import {useEffect, useState } from "react";
import Axios from "axios";
import InventoryListRow from "./InventoryListRow";


function InventoryList()
{
    const [arr,setArr] = useState([]);
    useEffect(()=>{
        Axios.get("https://projectbackend-2a0p.onrender.com/inventoryRoute/")
        .then((res)=>{
            if(res.status === 200)
                setArr(res.data);
            else
                Promise.reject();
        })
        .catch((err)=>alert(err));
    },[]);


    const ListItems = () => {
        return arr.map((val) => {  
            return <InventoryListRow obj={val} />
        })
    }
    return (
        <table style={{maxWidth:"100%",margin:"50px auto"}} class="table table-warning table-bordered table-striped">
            <thead>
                <tr style={{backgroundColor:"lightblue"}}>
                    <th className="text-center">InventoryName</th>
                    <th className="text-center">Quantity</th>
                    <th className="text-center">Price</th>
                    <th className="text-center">Category</th>
                    <th className="text-center">Updates</th>
                </tr>
            </thead>
            <tbody>
                {ListItems()}
            </tbody>
        </table>
        
    )
}
export default InventoryList;

