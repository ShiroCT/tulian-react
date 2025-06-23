import { Badge } from "react-bootstrap";
import { FaCartArrowDown } from "react-icons/fa";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

const CartWidgetReactIcons = () =>{
const {cartQuantity}=useContext(CartContext)

    return(
        <div>
            <FaCartArrowDown fontSize={'2rem'} color="black"/>
            {cartQuantity() > 0 && <Badge bg="warning">{cartQuantity()}</Badge>}
        </div>
    )
}
export default CartWidgetReactIcons