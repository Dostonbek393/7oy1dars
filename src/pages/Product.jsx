import { useLoaderData } from "react-router-dom";
import { axiosInstance } from "../utils";

export const loader = async ({ params }) => {
  const req = await axiosInstance(`/product/${params.id}`);
  return req.data;
};

function Product() {
  const data = useLoaderData();
  console.log(data);
  return <div>Product</div>;
}

export default Product;
