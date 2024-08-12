import { Button } from "react-bootstrap";
import { FaPizzaSlice } from "react-icons/fa6";
import { FaLock } from "react-icons/fa";
import { FaLockOpen } from "react-icons/fa";
import { FaUnlockKeyhole } from "react-icons/fa6";


function NavbarC() {
        
    const total = 25000;
    const token = false;
        
    return(
        <>
            <div className="d-flex p-3 bg-dark">
                <div className="d-flex pe-2 gap-4">
                    <h4 style={{color: "white"}}>¡Pizzeria Mamma mia!</h4>
                    <Button variant="success"><div className="d-flex gap-2 align-items-center"><FaPizzaSlice/>Home</div></Button>
                </div>
                <div className="d-flex ms-auto gap-2">
                    {token === true ? <Button variant="success"><div className="d-flex gap-2 align-items-center"><FaLockOpen/>Profile</div></Button>:<></>}
                    {token === false ? <Button variant="success"><div className="d-flex gap-2 align-items-center"><FaUnlockKeyhole/>Login</div></Button>: <></>} 
                    {token === true ? <Button variant="success"><div className="d-flex gap-2 align-items-center"><FaLock/>Logout</div></Button>: <></>}
                    {token === false ? <Button variant="success"><div className="d-flex gap-2 align-items-center"><FaUnlockKeyhole/>Register</div></Button>: <></>} 
                    <Button variant="success">Total: ${total.toLocaleString()}</Button>
                </div>
            </div>
        </>
    )
}

export default NavbarC