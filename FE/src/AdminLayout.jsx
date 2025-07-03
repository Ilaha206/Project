
import { Link, Outlet, useNavigate } from 'react-router';

function AdminLayout() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  return (
    <>
      <nav>
        <div>
          <ul>
            <li><Link to="/admin">Admin</Link></li>
            <li><Link to="/admin/adminadd">AdminAdd</Link></li>
            <li><button onClick={handleLogout}>Çıxış</button></li> {/* Logout düyməsi */}
          </ul>
        </div>
      </nav>
      <Outlet />
    </>
  );
}

export default AdminLayout;
