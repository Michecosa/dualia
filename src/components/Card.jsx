import { Link } from "react-router-dom";

export default function Card({
  img,
  title,
  price,
  path,
  bestSellers,
  prodRes,
  fullprice,
}) {
  return (
    <>
      <div
        className={`dualia-card dualia-card-50 dualia-card-25 ${bestSellers} ${prodRes} flex-grow-1 mb-4`}
      >
        <Link
          to={path}
          className="m-0 p-0 text-decoration-none"
          style={{ color: "inherit" }}
        >
          <img src={img} className="dualia-card-img" alt={title} />
          <div className="dualia-card-body mt-2">
            <h5 className="dualia-card-title">{title}</h5>
            <p className="dualia-card-price">
              {price < fullprice ? (
                <>
                  <strong id="scontato">{price}€</strong>
                  <s className="ms-3">€{fullprice}</s>
                </>
              ) : (
                "€" + price
              )}
            </p>
          </div>
        </Link>
      </div>
    </>
  );
}
