export default function Card({ img, title, price }) {
  return (
    <div className="col-12 col-md-5 col-lg-3 d-flex">
      <div className="dualia-card flex-grow-1">
        <img src={img} className="dualia-card-img" alt={title} />
        <div className="dualia-card-body">
          <h5 className="dualia-card-title">{title}</h5>
          <p className="dualia-card-price">{price}</p>
        </div>
      </div>
    </div>
  );
}
