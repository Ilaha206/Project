import { Link } from "react-router"
import "./Navbar.css"


function Navbar() {



    return (
        <>
            <nav>
                <div className="navbar">
                    <div className="options">
                        <ul>
                            <li><Link to="">Home</Link></li>
                            <li><Link to="wishlist">Favorite</Link></li>
                            <li><Link to="login">Login</Link></li>
                            <li><Link to="registration">Registration</Link></li>
                        </ul>
                    </div>



                    

                </div>
            </nav>
        </>
    )
}

export default Navbar