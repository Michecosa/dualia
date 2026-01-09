export default function Card({ img, title, price }) {
  return (
    <>
      <div className="dualia-card dualia-card-50 dualia-card-33 flex-grow-1">
        <img src={img} className="dualia-card-img" alt={title} />
        <div className="dualia-card-body">
          <h5 className="dualia-card-title">{title}</h5>
          <p className="dualia-card-price">{price}</p>
        </div>
      </div>
    </>
  );
}
