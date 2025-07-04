import { useEffect, useState } from "react";
import "./Hero.css"
const images = [
  "https://images.pexels.com/photos/264787/pexels-photo-264787.jpeg",
  "https://images.pexels.com/photos/1303080/pexels-photo-1303080.jpeg"
];
function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex === 0 ? 1 : 0));
    }, 4000);

    return () => clearInterval(interval);
  }, []);
  return (
    <section>
      <div className="hero" style={{ backgroundImage: `url(${images[currentIndex]})` }}>
      </div>
    </section>
  )
}

export default Hero