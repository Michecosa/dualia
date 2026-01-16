import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { addToWishlist, removeFromWishlist, isInWishlist } from "../wishlistUtils";

export default function Card({
  img,
  title,
  price,
  path,
  bestSellers,
  prodRes,
  fullprice,
  productId,
  productData,
}) {
  const [liked, setLiked] = useState(false);

  useEffect(() => {
    setLiked(isInWishlist(productId));
  }, [productId]);

  const toggleWishlist = (e) => {
    e.preventDefault();

    if (liked) {
      removeFromWishlist(productId);
      setLiked(false);
    } else {
      addToWishlist(productData);
      setLiked(true);
    }
  };

  return (
    <div className={`dualia-card dualia-card-50 dualia-card-25 ${bestSellers} ${prodRes} flex-grow-1 mb-4 position-relative`}>

      <button
        onClick={toggleWishlist}
        className={`wishlist-btn cuore btn btn-outline-dark btn_wishlist py-0 position-absolute ${liked ? "liked" : ""}`}>
        <i className="bi bi-bookmark-heart fs-3"></i>
      </button>


      <Link to={path} className="m-0 p-0 text-decoration-none" style={{ color: "inherit" }}>
        <img src={img} className="dualia-card-img" alt={title} />
        <div className="dualia-card-body mt-2">
          <h5 className="dualia-card-title">{title}</h5>
          <p className="dualia-card-price">
            {price < fullprice ? (
              <>
                <strong id="scontato">{price}€</strong>
                <s className="ms-3">{fullprice}€</s>
              </>
            ) : (
              price + "€"
            )}
          </p>
        </div>
      </Link>
    </div >
  );
}
