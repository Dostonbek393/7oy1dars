import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  addToCart,
  incrementAmount,
  decrementAmount,
  deleteCart,
} from "../app/feature/cartSlice";

function Product({ product }) {
  const dispatch = useDispatch();
  const { cart } = useSelector((store) => store.cart);
  const isAdded = cart.find((i) => i.id == product.id);

  const handleBuy = (e) => {
    e.preventDefault();
    dispatch(
      addToCart({
        ...product,
        amount: 1,
      })
    );
  };

  const handleDecrement = (e) => {
    e.preventDefault();
    if (isAdded.amount === 1) {
      dispatch(deleteCart(product.id));
    } else {
      dispatch(decrementAmount(product.id));
    }
  };

  return (
    <Link to={`/product/${product.id}`}>
      <h2>{product.title}</h2>
      {isAdded ? (
        <>
          <button
            onClick={(e) => {
              e.preventDefault();
              dispatch(incrementAmount(product.id));
            }}
          >
            +
          </button>
          <span>{isAdded.amount}</span>
          <button onClick={handleDecrement}>-</button>
        </>
      ) : (
        <button onClick={handleBuy}>Buy</button>
      )}
    </Link>
  );
}

export default Product;
