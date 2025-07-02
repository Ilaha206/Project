import { useEffect, useState } from "react"
import './Home.css'
import { Link } from "react-router"
import { FaInfoCircle } from "react-icons/fa"

function Home() {
  const [products, setproducts] = useState([])

    useEffect(() => {
        fetch("http://localhost:3000/gifts")
            .then((res) => (res.json()))
            .then((data) => (setproducts(data)))
    }, [])
  return (
    <>
    <title>Home</title>

            <div className="products_cards">
                <div className="products">
                    <h3>Məhsullar</h3>
                    
                </div>
                <div className="cards">{products.map((x) =>
                    <div className="card" key={x._id} >
                        <div><img src={x.image} alt="" /></div>
                        <div className="card_footer">
                            <div className="card_text">
                                <p className="title">{x.title}</p>
                                <p className="price">{x.price} AZN</p>
                            </div>
                            <div className="card_icons">
                                <Link to={`detail/${x._id}`}><a className="info"><FaInfoCircle /></a></Link>
                                
                               
                            </div>
                        </div>
                    </div>)}
                </div>
            </div>
    </>
  )
}

export default Home