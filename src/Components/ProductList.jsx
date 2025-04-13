import { useLoaderData } from "react-router-dom";
import Product from "./Product";

function ProductList() {
  const {
    data: { products },
  } = useLoaderData();

  return (
    <div className="container mx-auto px-4 py-8 lg:px-36">
      <div className="text-3xl font-bold mb-6 text-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product) => {
            return <Product product={product} key={product.id} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default ProductList;
