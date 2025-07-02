
import { Link, Outlet } from 'react-router'

function AdminLayout() {
    return (
        <>
            <nav>
                <div>
                    <ul>
                        <li><Link to='admin'>Admin</Link></li>
                        <li><Link to='adminadd'>AdminAdd</Link></li>
                    </ul>
                </div>
            </nav>
            <Outlet />
        </>
    )
}

export default AdminLayout