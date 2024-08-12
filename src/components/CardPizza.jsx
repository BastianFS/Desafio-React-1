import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { PiEyesBold } from "react-icons/pi";
import { FaShoppingCart } from "react-icons/fa";
import { FaPizzaSlice } from "react-icons/fa6";

function CardPizza(props) {
    let html = "";
    props.ingredients.forEach(item => {
        html += item + ", ";
    });
    return(
        <>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={props.img}
                />
                <Card.Body>
                    <Card.Title className='p-2'>{props.name}</Card.Title>
                    <Card.Text className='text-center'>
                        <div className='border p-2'>
                            <h5 className='fw-light'>Ingredientes</h5>
                            <div className='d-flex gap-1 p-1 fw-lighter'>
                                <FaPizzaSlice/> {html}
                            </div>
                        </div>
                        <h5 className='p-2'>Precio: ${props.price}</h5>
                    </Card.Text>
                    <div className='d-flex gap-5 justify-content-center'>
                        <Button variant="light" className='p-2 border'><div className="d-flex gap-2">Ver mas <PiEyesBold /></div></Button>
                        <Button variant="dark" className='p-2 border'><div className="d-flex gap-2">Ver mas <FaShoppingCart /></div></Button>
                    </div>
                    
                </Card.Body>
             </Card>
        </>
    )
}

export default CardPizza

