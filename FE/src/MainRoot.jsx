import { Outlet } from "react-router";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import "./MainRoot.css"; // bunu da əlavə et, aşağıdakı CSS-ə görə

function MainRoot() {
  return (
    <div className="page-container">
      <Navbar />
      <main className="content">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default MainRoot;
