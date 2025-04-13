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
    <Link
      to={`/product/${product.id}`}
      className="bg-white rounded-xl shadow-md hover:shadow-lg transition duration-200 hover:scale-105 overflow-hidden flex flex-col"
    >
      <img
        src={product.thumbnail}
        alt={product.title}
        className="w-full object-cover"
      />
      <div className="p-4 flex-1 flex flex-col items-center text-center">
        <h2 className="text-lg font-semibold mb-1 text-fuchsia-700">
          {product.title}
        </h2>
        <div className="flex items-center gap-2 mb-2">
          <span className="text-gray-400 line-through text-sm">
            ${product.price}
          </span>
          <span className="text-green-600 font-bold text-lg">
            $
            {(
              product.price -
              (product.price * product.discountPercentage) / 100
            ).toFixed(2)}
          </span>
        </div>
        <p className="text-yellow-500 text-2xl mb-3 ml-auto">
          ⭐ {product.rating}
        </p>
        {isAdded ? (
          <div className="flex items-center gap-2 mt-auto justify-center">
            <button
              className="bg-blue-500 text-white px-3 py-1 rounded-full hover:bg-blue-600 cursor-pointer"
              onClick={(e) => {
                e.preventDefault();
                dispatch(incrementAmount(product.id));
              }}
            >
              +
            </button>
            <span className="text-md">{isAdded.amount}</span>
            <button
              className="bg-red-500 text-white px-4 py-1 rounded-full hover:bg-red-600 cursor-pointer"
              onClick={handleDecrement}
            >
              -
            </button>
          </div>
        ) : (
          <button
            className="mt-auto bg-indigo-600 text-white w-full
           py-2 rounded hover:bg-indigo-700 cursor-pointer"
            onClick={handleBuy}
          >
            Buy
          </button>
        )}
      </div>
    </Link>
  );
}

export default Product;
