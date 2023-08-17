import { useDispatch } from "react-redux";
import Button from "../Other Components/Button";
import "./CartItem.css";
import ActionType from "../../redux/constants/ActionType";

const CartItem = (props) => { 
  const dispatch=useDispatch() ;

  return (
    <div className="cart-item">
      <img
        src={props.image}
        alt="not found"
      />
      <div className="item-details">
        <h3>{props.title}</h3>
        <span className="product-description">
            {props.description}
        </span>
        <p>Price: {`RS ${props.price}`}</p>
        <Button className="cart-rm-butn" label="remove" handle={()=>{
               dispatch({
                type:ActionType.rmfromcart,
                payload:props.id,
               })
        }}/>
      </div>
    </div>
  );
};

export default CartItem;
