import pilatesTeamImg from "../assets/pilatesTeam.jpeg";

export default function PilatesTeam() {
    return (
        <div className="container py-5">
            <div className="row justify-content-center">
                <div className="col-lg-10">
                    <div className="text-center mb-5">
                        <h1 className="display-4 fw-bold mb-3">
                            🏋️‍♀️ The Pilates Team 🏋️‍♂️
                        </h1>
                        <p className="lead text-muted fst-italic">
                            "Flexibility in code, strength in spirit, balance in design"
                        </p>
                    </div>

                    <div className="card rounded-0 border-0 shadow mb-5">
                        <img
                            src={pilatesTeamImg}
                            alt="Pilates Team"
                            className="card-img-top rounded-0"
                            style={{ maxHeight: "600px", objectFit: "cover" }}
                        />
                        <div className="card-body p-5 text-center">
                            <h3 className="mb-4" style={{ color: "#e3be85" }}>
                                Meet the Developers Behind Dualia
                            </h3>
                            <p className="lead mb-4">
                                We are the Pilates Team - a group of passionate developers who believe
                                in the power of code, coffee, and core strength. 💪
                            </p>
                            <div className="row text-center mt-5">
                                <div className="col-md-4 mb-4">
                                    <div className="p-4" style={{ backgroundColor: "#f8f9fa" }}>
                                        <h1 className="display-3">💻</h1>
                                        <h5 className="fw-bold">Clean Code</h5>
                                        <p className="small">Like a perfect plank position</p>
                                    </div>
                                </div>
                                <div className="col-md-4 mb-4">
                                    <div className="p-4" style={{ backgroundColor: "#f8f9fa" }}>
                                        <h1 className="display-3">🧘</h1>
                                        <h5 className="fw-bold">Zen Development</h5>
                                        <p className="small">Debugging with inner peace</p>
                                    </div>
                                </div>
                                <div className="col-md-4 mb-4">
                                    <div className="p-4" style={{ backgroundColor: "#f8f9fa" }}>
                                        <h1 className="display-3">⚡</h1>
                                        <h5 className="fw-bold">Fast Delivery</h5>
                                        <p className="small">Speed of light, quality of steel</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="card rounded-0 border-0 shadow" style={{ backgroundColor: "black", color: "white" }}>
                        <div className="card-body p-5">
                            <h4 className="text-center mb-4" style={{ color: "#e3be85" }}>
                                🎯 Our Mission
                            </h4>
                            <p className="text-center lead mb-0">
                                To create beautiful, functional, and intuitive web experiences that illuminate
                                the digital world - one line of code at a time. ✨
                            </p>
                            <p className="text-center mt-4 fst-italic">
                                "May your bugs be few and your commits be many" - Pilates Team Motto
                            </p>
                        </div>
                    </div>

                    <div className="text-center mt-5 p-4 rounded-0" style={{ backgroundColor: "#e3be85" }}>
                        <h5 className="fw-bold mb-2">Want to work with us?</h5>
                        <p className="mb-3">
                            We're always looking for talented developers who share our passion for excellence.
                        </p>
                        <p className="fw-bold fs-5 mb-0">
                            Email: team@pilates.dev
                        </p>
                        <p className="small fst-italic mb-0">
                            (Not a real email, but the enthusiasm is genuine!)
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
