import { Link } from "react-router-dom";

export default function Card({ img, title, price, path }) {
  return (
    <>
      <div className="dualia-card dualia-card-50 dualia-card-25 flex-grow-1">
        <Link
          to={path}
          className="m-0 p-0 text-decoration-none"
          style={{ color: "inherit" }}
        >
          <img src={img} className="dualia-card-img" alt={title} />
          <div className="dualia-card-body">
            <h5 className="dualia-card-title">{title}</h5>
            <p className="dualia-card-price">{price}</p>
          </div>
        </Link>
      </div>
    </>
  );
}
