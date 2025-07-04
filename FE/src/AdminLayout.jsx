
import { Link, Outlet, useNavigate } from 'react-router';
import { IoIosLogOut } from "react-icons/io";
import "./Pages/Admin/Admin.css"
function AdminLayout() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  return (
    <>
      <nav>
        <div className='admin_navbar'>
          <ul className='admin_options'>
            <li className='admin'><Link to="/admin">Admin</Link></li>
            <li className='adminadd'><Link to="/admin/adminadd">AdminAdd</Link></li>
            <li><div className='logout' onClick={handleLogout}><IoIosLogOut /></div></li>
          </ul>
        </div>
      </nav>
      <Outlet />
    </>
  );
}

export default AdminLayout;
