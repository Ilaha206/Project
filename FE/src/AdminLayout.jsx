
import { Outlet } from 'react-router'

function AdminLayout() {
  return (
    <>
    <nav>
        <div>
            <p>Admin</p>
            <p>Add</p>
        </div>
    </nav>
    <Outlet/>
    </>
  )
}

export default AdminLayout