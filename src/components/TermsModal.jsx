export default function TermsModal() {
    return (
        <div
            className="modal fade"
            id="termsModal"
            tabIndex="-1"
            aria-labelledby="termsModalLabel"
            aria-hidden="true"
        >
            <div className="modal-dialog modal-lg modal-dialog-scrollable">
                <div className="modal-content rounded-1">
                    <div className="modal-header">
                        <h5 className="modal-title" id="termsModalLabel">Terms and Conditions</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
                    </div>

                    <div className="modal-body" style={{ maxHeight: "400px", overflowY: "auto" }}>
                        <p>
                            TESTO LUNGHISSIMO CHE DEVO SCRIVERE<br /><br />
                            <br /><br /><br /><br /><br /><br /><br />
                            E SOPRATUTTO UN MINIMO DI STILE DA INSERIRE, TUTTO DENTRO UN BRANCH,
                            APPENA è PRONTO COPIO E INCOLLO I CAMBIAMENTI
                        </p>
                    </div>

                    <div className="modal-footer">
                        <button className="btn btn-dark" data-bs-dismiss="modal">
                            BOTTONE CHE CHIUDE
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
