import { useLoaderData } from "react-router-dom";
import { axiosInstance } from "../utils";
import { useState } from "react";
import { FaStar } from "react-icons/fa";

export const loader = async ({ params }) => {
  const req = await axiosInstance(`/product/${params.id}`);
  return req.data;
};

function Product() {
  const data = useLoaderData();
  const [rating, setRating] = useState(0);
  const [hovered, setHovered] = useState(null);

  const handleRate = (value) => {
    setRating(value);
    console.log(`User rated: ${value} stars`);
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100">
      <div className="bg-indigo-50 p-6 rounded-xl shadow-lg max-w-200 w-full cursor-pointer hover:scale-105">
        <h2 className="text-3xl font-semibold mb-4 text-fuchsia-700 text-center">
          {data.title}
        </h2>
        <div className="flex items-center gap-6 mb-4">
          <img
            src={data.thumbnail}
            alt={data.title}
            className="w-64 h-64 object-cover rounded-lg"
          />
          <div className="flex flex-col">
            <p className="text-gray-500 mb-4">{data.description}</p>
            <p className="text-xl text-gray-7s00">
              Brand:{" "}
              <span className="font-medium text-green-700">{data.brand}</span>
            </p>
            <p className="text-xl mb-2">
              Category:{" "}
              <span className="font-medium text-red-500">{data.category}</span>
            </p>
            <div className="flex gap-4 mb-1">
              <span className="text-lg text-gray-400 line-through font-bold mb-2">
                ${data.price}
              </span>
              <span className="text-green-600 font-bold text-lg">
                $
                {(
                  data.price -
                  (data.price * data.discountPercentage) / 100
                ).toFixed(2)}
              </span>
            </div>
            <p
              className={`text-sm font-medium mb-3 ${
                data.stock > 0 ? "text-green-600" : "text-red-500"
              }`}
            >
              {data.stock > 0
                ? `In stock: ${data.stock} item${data.stock > 1 ? "s" : ""}`
                : "Out of stock"}
            </p>

            <div className="flex gap-1 mt-2">
              {[1, 2, 3, 4, 5].map((star) => (
                <FaStar
                  key={star}
                  className={`w-6 h-6 cursor-pointer transition
                    ${
                      star <= (hovered || rating)
                        ? "text-yellow-400"
                        : "text-gray-300"
                    }
                  `}
                  onClick={() => handleRate(star)}
                  onMouseEnter={() => setHovered(star)}
                  onMouseLeave={() => setHovered(null)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;
