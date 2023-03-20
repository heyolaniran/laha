import { Link } from "react-router-dom"


const Banner = () => {
  return (
    <section className="banner_part">
        <div className="container">
            <div className="row align-items-center">
                <div className="col-lg-6 col-xl-6">
                    <div className="banner_text">
                        <div className="banner_text_iner">
                            <h1>Apprenez aujourd'hui,et devenez un leader demain</h1>
                            <p>Notre plateforme vous permet de suivre des cours de répétition en ligne avec des professeurs qualifiés.</p>
                            <Link to="/login" href="#" className="btn_1">Voir Nos cours </Link>
                            <Link to="/abonnements" href="#" className="btn_2">Faire un abonnement</Link>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
        
    </section>
  )
}

export default Banner