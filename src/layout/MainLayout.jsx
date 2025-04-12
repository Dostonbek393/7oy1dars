import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar";

function MainLayout() {
  return (
    <>
      <Navbar />
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default MainLayout;
