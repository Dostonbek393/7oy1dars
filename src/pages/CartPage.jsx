import { useDispatch, useSelector } from "react-redux";
import { deleteCart } from "../app/feature/cartSlice";
import { FaTrash } from "react-icons/fa";

function CartPage() {
  const dispatch = useDispatch();
  const { cart } = useSelector((store) => store.cart);

  const handleRemove = (id) => {
    dispatch(deleteCart(id));
  };

  const totalPrice = cart.reduce((sum, product) => {
    const discounted =
      product.price - (product.price * product.discountPercentage) / 100;
    return sum + discounted * product.amount;
  }, 0);

  return (
    <div className="p-6 px-30">
      <div className="flex items-center justify-between mb-7">
        <h2 className="text-3xl font-semibold text-fuchsia-700 cursor-pointer hover:text-fuchsia-900">
          Your Cart
        </h2>
        <span className="text-2xl font-semibold text-green-700 cursor-pointer hover:text-green-900">
          Total: ${totalPrice.toFixed(2)}
        </span>
      </div>
      {cart.length === 0 ? (
        <p>...</p>
      ) : (
        <div>
          {cart.map((product) => (
            <div
              key={product.id}
              className="flex justify-between mb-4 bg-cyan-300 px-5 rounded-3xl cursor-pointer hover:scale-105 shadow-lg"
            >
              <div className="flex items-center gap-1">
                <img
                  src={product.thumbnail}
                  alt={product.title}
                  className="h-28"
                />
                <div>
                  <h3 className="font-semibold text-fuchsia-700">
                    {product.title}
                  </h3>
                  <p className="text-green-700 font-semibold">
                    $
                    {(
                      (product.price -
                        (product.price * product.discountPercentage) / 100) *
                      product.amount
                    ).toFixed(2)}
                  </p>
                </div>
              </div>
              <button
                onClick={() => handleRemove(product.id)}
                className="text-red-600 hover:text-red-800"
              >
                <FaTrash className="w-6 h-6 cursor-pointer" />
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default CartPage;
