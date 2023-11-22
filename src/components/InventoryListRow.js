import Axios from "axios";
import { Link } from "react-router-dom";


function InventoryListRow(props) {
    const { _id, InventoryName, Quantity, Price, Category } = props.obj; //Object destruction


    const handleClick = () => {
        Axios.delete("https://projectbackend-2a0p.onrender.com/inventoryRoute/delete-inventory/" + _id )
            .then((res) => {
                if (res.status === 200) {
                    alert("Record deleted successfully");
                    window.location.reload();
                }
                else
                    Promise.reject();
            })
            .catch((err) => alert(err));
    }
    return (
        <tr>
            <td>{InventoryName}</td>
            <td>{Quantity}</td>
            <td>{Price}</td>
            <td>{Category}</td>
            <td className="d-flex justify-content-center">
                <Link className="text-decoration-none text-light" to={"/edit-inventory/" + _id}>
                    <button className="btn me-3 text-dark" style={{backgroundColor:"yellow"}}>
                        Edit Inventory
                    </button>
                </Link>
                <button onClick={handleClick} className="btn btn-danger text-dark">Delete Inventory</button>
            </td>
        </tr>
    )
}
export default InventoryListRow;