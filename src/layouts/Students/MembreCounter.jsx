 const Membre = ()=>{
    return(
        <section className="member_counter mt-3 mb-5" style={{background: "linear-gradient(to left, #1E90FF 0%, #f9b700 51%, #1E90FF 100%)"}}>
        <div className="container">
            <div className="row">
                <div className="col-lg-3 col-sm-6">
                    <div className="single_member_counter">
                        <span className="counter">1023 </span>
                        <h4>Apprenants </h4>
                    </div>
                </div>
                <div className="col-lg-3 col-sm-6">
                    <div className="single_member_counter">
                        <span className="counter">60</span>
                        <h4>Cours</h4>
                    </div>
                </div>
                <div className="col-lg-3 col-sm-6">
                    <div className="single_member_counter">
                        <span className="counter">1020</span>
                        <h4>Livres</h4>
                    </div>
                </div>
                <div className="col-lg-3 col-sm-6">
                    <div className="single_member_counter">
                        <span className="counter">820</span>
                        <h4>Professeurs</h4>
                    </div>
                </div>
            </div>
        </div>
    </section>
    )
 }
 export default Membre;