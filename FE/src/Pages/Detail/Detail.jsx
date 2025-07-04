import { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import "./Detail.css"
import { FaInstagram } from 'react-icons/fa'
import { IoLogoInstagram } from 'react-icons/io5'
function Detail() {
  const { id } = useParams()
  const [products, setproducts] = useState([])
  useEffect(() => {
    fetch("http://localhost:3000/gifts/" + id)
      .then((res) => (res.json()))
      .then((data) => (setproducts(data)))
  }, [id])
  return (
    <>
      <title>Detail</title>
      <div className="cards">
        <div className="detail_card">
          <img src={products.image} alt="" />
          <h3 className='title'>{products.title}</h3>
          <p className='description'>{products.description}</p>
          <p className='price'>{products.price} AZN</p>
          <p className='phone'>Telefon: {products.contact?.phone}</p>
          {products.contact?.instagram && (
            <p className="icon_instagram"><IoLogoInstagram />: {products.contact.instagram}</p>
          )}
        </div>
      </div>
    </>
  )
}

export default Detail