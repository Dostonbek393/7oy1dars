import { useLoaderData } from "react-router-dom";
import { axiosInstance } from "../utils";
import ProductList from "../Components/ProductList";

export const loader = async () => {
  const req = axiosInstance("/product");
  return req;
};

function Home() {
  const {
    data: { products },
  } = useLoaderData();
  console.log(products);

  return (
    <>
      <ProductList />
    </>
  );
}

export default Home;
