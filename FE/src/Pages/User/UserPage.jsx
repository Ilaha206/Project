import { useContext } from 'react'
import { WishlistContext } from '../../Context/WishlistProvider'
import { Link } from 'react-router'
import { FaHeart, FaInfoCircle, FaInstagram, FaRegHeart, FaRegSmileBeam } from 'react-icons/fa'
import { IoLogoInstagram } from 'react-icons/io5'
import "./UserPage.css"

function UserPage() {
  const { wishlist, handleWishlist, checkAtWishlist } = useContext(WishlistContext)
  return (
    <>
      <title>User</title>
      <div className='user_page'>
        {wishlist.length > 0 ? (<div className="cards">{wishlist.map((x) =>
          <div className="card" key={x._id}>
            <img src={x.image} alt="" />
            <h3 className='title'>{x.title}</h3>
            <p className='description'>{x.description}</p>
            <p className='price'>{x.price} AZN</p>
            <p className='phone'>Telefon: {x.contact?.phone}</p>
            {x.contact?.instagram && (
              <p className="icon_instagram"><IoLogoInstagram />: {x.contact.instagram}</p>
            )}
            <div className='card_icons'>
              <Link to={`detail/${x._id}`}><div className='info'><FaInfoCircle /></div></Link>
              <div className='heart' onClick={() => handleWishlist(x)}>{checkAtWishlist(x) ? <FaHeart /> : <FaRegHeart />}</div>
            </div>
          </div>)}
        </div>) : (<h3 className='icon_smile'>
          Heç bir məhsul yoxdur. Sevimli məhsullarınızı indidən seçməyə başlayın! <FaRegSmileBeam />
        </h3>)}
      </div>
    </>
  )
}

export default UserPage