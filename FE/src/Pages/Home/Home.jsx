import { useContext, useEffect, useState } from "react";
import './Home.css';
import { Link, useNavigate } from "react-router"; // <-- düzəliş BURADA
import { FaHeart, FaInfoCircle, FaRegHeart } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io5";
import { WishlistContext } from "../../Context/WishlistProvider";
import UseAuth from '../../Hooks/UseAuth';

function Home() {
  const [products, setproducts] = useState([]);
  const { handleWishlist, checkAtWishlist } = useContext(WishlistContext);
  const [loading, setLoading] = useState(true);
  const { isLoggedIn } = UseAuth(); // <-- BURADA istifadə olunur
  const navigate = useNavigate();   // <-- BURADA əlavə olundu

  // Sevimli düyməsinə klik zamanı login yoxlaması
  const handleClickWishlist = (item) => {
    if (!isLoggedIn) {
      navigate('/register'); // <-- qeydiyyat səhifəsinə yönləndir
    } else {
      handleWishlist(item);  // <-- login olubsa sevimlilərə əlavə et
    }
  };

  useEffect(() => {
    fetch("http://localhost:3000/gifts")
      .then((res) => res.json())
      .then((data) => {
        setproducts(data);
        setLoading(false);
      });
  }, []);

  return (
    <>
      <title>Home</title>

      <div className="products_cards">
        <div className="products">
          <h3>Məhsullar</h3>
        </div>

        {loading ? (
          <div className="loading">Yüklənir...</div>
        ) : (
          <div className="cards">
            {products.map((x) => (
              <div className="card" key={x._id}>
                <div><img src={x.image} alt="" /></div>
                <div className="card_footer">
                  <div className="card_text">
                    <p className="title">{x.title}</p>
                    <p className="price">{x.price} AZN</p>
                    <p className="phone">Telefon: {x.contact?.phone}</p>
                    {x.contact?.instagram && (
                      <p className="icon_instagram"><IoLogoInstagram />: {x.contact.instagram}</p>
                    )}
                  </div>
                  <div className="card_icons">
                    <Link to={`detail/${x._id}`}>
                      <div className="info"><FaInfoCircle /></div>
                    </Link>
                    {/* BURADA dəyişiklik */}
                    <div className="heart" onClick={() => handleClickWishlist(x)}>
                      {checkAtWishlist(x) ? <FaHeart /> : <FaRegHeart />}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
}

export default Home;
