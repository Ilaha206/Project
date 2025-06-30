import { BrowserRouter, Routes, Route } from "react-router";
import MainRoot from './MainRoot'
import Admin from './Pages/Admin/Admin'
import AdminAdd from './Pages/AdminAdd/AdminAdd'
import Detail from './Pages/Detail/Detail'
import Home from './Pages/Home/Home'
import NoPage from './Pages/NoPage/NoPage'
import Wishlist from './Pages/Wishlist/Wishlist'
import Profil from "./Pages/Profil/Profil";
import Registration from "./Pages/Registration/Registration";
import './App.css'

function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainRoot />}>
            <Route index element={<Home />} />
            <Route path="detail/:id" element={<Detail />} />
            <Route path="wishlist" element={<Wishlist />} />
            <Route path="admin" element={<Admin />} />
            <Route path="adminadd" element={<AdminAdd />} />
            <Route path="profil" element={<Profil />} />
            <Route path="registration" element={<Registration />} />
          </Route>
          <Route path="*" element={<NoPage />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
