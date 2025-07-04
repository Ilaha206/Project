import { BrowserRouter, Routes, Route } from "react-router";
import MainRoot from './MainRoot'
import Detail from './Pages/Detail/Detail'
import Home from './Pages/Home/Home'
import NoPage from './Pages/NoPage/NoPage'

import Login from "./Pages/Login/Login";
import Registration from "./Pages/Registration/Registration";
import AdminLayout from "./AdminLayout";
import Admin from "./Pages/Admin/Admin";
import AdminAdd from "./Pages/AdminAdd/AdminAdd";

import './App.css'
import AdminUpdate from "./Pages/AdminUpdate/AdminUpdate";
import UserPage from "./Pages/User/UserPage";

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainRoot />}>
            <Route index element={<Home />} />
            <Route path="detail/:id" element={<Detail />} />
            <Route path="user" element={<UserPage />} />
          </Route>
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Registration />} />
          <Route path="/admin" element={<AdminLayout />}>
            <Route index element={<Admin />} />
            <Route path="/admin/adminadd" element={<AdminAdd />} />
            <Route path="update/:id" element={<AdminUpdate />} />
          </Route>
          <Route path="*" element={<NoPage />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
