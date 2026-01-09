export default function Card() {
  return (
    <div className="col-12 col-md-5 col-lg-3 d-flex">
      <div className="dualia-card flex-grow-1">
        <img
          src="https://imgs.search.brave.com/dgHE2Y481fjY98VzhbiwfSc-oHIG35-Q0LYZSPbOPs8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pMC53/cC5jb20vd3d3LnNl/cHQtY2hha3Jhcy5j/b20vd3AtY29udGVu/dC91cGxvYWRzLzIw/MjAvMDcvMTY0MTIz/MTAxODg5MC5qcGc_/Zml0PTQ4MCw0NDkm/c3NsPTE"
          className="dualia-card-img"
          alt="..."
        />
        <div className="dualia-card-body">
          <h5 className="dualia-card-title">Simple Dualia incense for Zen</h5>
          <p className="dualia-card-price">€99,99</p>
        </div>
      </div>
    </div>
  );
}
