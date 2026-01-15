import Searchbar from "./Searchbar";

export default function SearchButton() {

    return (
        <section className="p-3 m-0 border-0 bd-example m-0 border-0">

            <p className="d-inline-flex gap-1 d-lg-none">
                <button className="btn btn-dark" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="true" aria-controls="collapseExample">
                    Search filter
                </button>
            </p>
            <div className="collapse show" id="collapseExample">
                <div className="card card-body">
                    <Searchbar />
                </div>
            </div>

        </section>
    )
}