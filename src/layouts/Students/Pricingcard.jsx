import { Link } from "react-router-dom"


const Pricingcard = () => {
  return (
    <section className="pricing py-5">
  <div className="container">
    <div className="row">
      <div className="col-lg-3">
        <div className="card mb-5 mb-lg-0">
          <div className="card-body">
            <h5 className="card-title text-muted text-uppercase text-center">Free</h5>
            <h6 className="card-price text-center">25.000 F <span className="period">/an</span></h6>
            <hr />
            <ul className="fa-ul">
              <li><span className="fa-li"><i className="fas fa-check"></i></span>Accès aux <b>Cours</b></li>
              <li><span className="fa-li"><i className="fas fa-check"></i></span>Accès aux <b>Exercices</b></li>
              <li><span className="fa-li"><i className="fas fa-check"></i></span>Accès aux <b>Forum</b></li>
              <li><span className="fa-li"><i className="fas fa-check"></i></span>Accès aux <b>Livres</b></li>

              <li className="text-muted"><span className="fa-li"><i className="fas fa-times"></i></span>Accès aux <b>Questions/Réponses</b></li>
              <li className="text-muted"><span className="fa-li"><i className="fas fa-times"></i></span>Accès aux <b>Cours de répétition</b></li>

            </ul>
            <div className="d-grid">
              <Link to="/login" href="#" className="btn_2  btn-primary text-uppercase">S'abonner</Link>
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-3">
        <div className="card mb-5 mb-lg-0">
          <div className="card-body">
            <h5 className="card-title text-muted text-uppercase text-center">Plus</h5>
            <h6 className="card-price text-center">$9<span className="period">/month</span></h6>
            <hr />
            <ul className="fa-ul">
                <li><span className="fa-li"><i className="fas fa-check"></i></span>Accès aux <b>Cours</b></li>
                <li><span className="fa-li"><i className="fas fa-check"></i></span>Accès aux <b>Exercices</b></li>
                <li><span className="fa-li"><i className="fas fa-check"></i></span>Accès aux <b>Forum</b></li>
                <li><span className="fa-li"><i className="fas fa-check"></i></span>Accès aux <b>Livres</b></li>
                <li><span className="fa-li"><i className="fas fa-check"></i></span>Accès aux <b>Questions/Réponses</b></li>

                <li className="text-muted"><span className="fa-li"><i className="fas fa-times"></i></span>Accès aux <b>Cours de répétition</b></li>

            </ul>
            <div className="d-grid">
              <Link to="/login" href="#" className="btn_2 btn-primary text-uppercase">S'abonner</Link>
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-3">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title text-muted text-uppercase text-center">Pro</h5>
            <h6 className="card-price text-center">$49<span className="period">/month</span></h6>
            <hr />
            <ul className="fa-ul">
                <li><span className="fa-li"><i className="fas fa-check"></i></span>Accès aux <b>Cours</b></li>
                <li><span className="fa-li"><i className="fas fa-check"></i></span>Accès aux <b>Exercices</b></li>
                <li><span className="fa-li"><i className="fas fa-check"></i></span>Accès aux <b>Forum</b></li>
                <li><span className="fa-li"><i className="fas fa-check"></i></span>Accès aux <b>Livres</b></li>
                <li><span className="fa-li"><i className="fas fa-check"></i></span>Accès aux <b> Cours de répétition</b></li>

                <li className="text-muted"><span className="fa-li"><i className="fas fa-times"></i></span>Accès aux <b>Questions/Réponses</b></li>

            </ul>
            <div className="d-grid">
              <Link to="/login" href="#" className="btn_2 btn-primary text-uppercase">S'abonner</Link>
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-3">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title text-muted text-uppercase text-center"><b>Premium</b></h5>
            <h6 className="card-price text-center">50.000F<span className="period">/an</span></h6>
            <hr />
            <ul className="fa-ul">
                <li><span className="fa-li"><i className="fas fa-check"></i></span>Accès aux <b>Cours</b></li>
                <li><span className="fa-li"><i className="fas fa-check"></i></span>Accès aux <b>Exercices</b></li>
                <li><span className="fa-li"><i className="fas fa-check"></i></span>Accès aux <b>Forum</b></li>
                <li><span className="fa-li"><i className="fas fa-check"></i></span>Accès aux <b>Livres</b></li>
                <li><span className="fa-li"><i className="fas fa-check"></i></span>Accès aux <b> Cours de répétition</b></li>
                <li><span className="fa-li"><i className="fas fa-check"></i></span>Accès aux <b> Questions/Réponses</b></li>


            </ul>
            <div className="d-grid">
              <Link to="/login" href="#" className="btn_1 btn-primary text-uppercase">S'abonner</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
  )
}

export default Pricingcard