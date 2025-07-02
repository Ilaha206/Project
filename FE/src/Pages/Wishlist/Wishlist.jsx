import React, { useContext } from 'react'
import { WishlistContext } from '../../Context/WishlistProvider'
import { Link } from 'react-router'
import { FaHeart, FaInfoCircle, FaRegHeart } from 'react-icons/fa'

function Wishlist() {
  const { wishlist, handleWishlist, checkAtWishlist } = useContext(WishlistContext)
  return (
    <>
    <title>Favorite</title>
            <div className="cards">{wishlist.map((x) =>
                <div className="card" key={x._id}>
                    <img src={x.image} alt="" />
                    <h3 className='title'>{x.title}</h3>
                      <p className='description'>{x.description}</p>
                    <p className='price'>{x.price} AZN</p>
                    <div className='card_icons'>
                      <Link to={`detail/${x._id}`}><div className='info'><FaInfoCircle /></div></Link>
                    <div className='heart' onClick={() => handleWishlist(x)}>{checkAtWishlist(x) ? <FaHeart /> : <FaRegHeart />}</div>
                    
                    </div>
                </div>)}
            </div>
    </>
  )
}

export default Wishlist