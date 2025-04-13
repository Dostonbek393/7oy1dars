import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Product from "./pages/Product";
import CartPage from "./pages/CartPage";

import { loader as HomeLoder } from "./pages/Home";
import { loader as ProductLoader } from "./pages/Product";

function App() {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        {
          index: true,
          element: <Home />,
          loader: HomeLoder,
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/contact",
          element: <Contact />,
        },
        {
          path: "/product/:id",
          element: <Product />,
          loader: ProductLoader,
        },
        {
          path: "/cart",
          element: <CartPage />,
        },
      ],
    },
  ]);
  return <RouterProvider router={routes} />;
}

export default App;
