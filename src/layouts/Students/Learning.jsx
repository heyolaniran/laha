import { Link } from "react-router-dom"

const Learning = () => {
  return (
    <section className="learning_part">
    <div className="container">
        <div className="row align-items-sm-center align-items-lg-stretch">
            <div className="col-md-7 col-lg-7">
                <div className="learning_img">
                    <img src="template/etrain-master/img/learning_img.png" alt="" />
                </div>
            </div>
            <div className="col-md-5 col-lg-5">
                <div className="learning_member_text">
                    <h5>A propos de nous</h5>
                    <h2>Pourquoi GESCO est la meilleure?</h2>
                    <p>
                    Notre plateforme de cours en ligne offre un accès illimité à des cours de qualité,
                    des exercices et des livres en ligne pour vous aider à comprendre les leçons.
                    Nous avons une équipe de professeurs expérimentés et dévoués, prêts à répondre à toutes vos questions.
                    Nous proposons également des forums de discussion pour échanger des idées avec d'autres étudiants.
                    En plus de cela, nous garantissons la confidentialité de vos informations personnelles.
                    Choisir notre plateforme, c'est choisir la réussite.
                    </p>

                    {/*  */}
                </div>
            </div>
        </div>
          
        <div className="feature_part">
            <div className="row">
                
                <div className="col-sm-6 col-xl-3 " style={{cursor:"pointer"}}>
                        <div className="single_feature">
                            <div className="single_feature_part">
                                <span className="single_feature_icon"><i className="ti-book"></i></span>
                                <h4>Apprendre</h4>
                                <p>suis les cours en vidéo pour apprendre</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6 col-xl-3 " style={{cursor:"pointer"}}>
                        <div className="single_feature">
                            <div className="single_feature_part">
                                <span className="single_feature_icon"><i className="ti-layers"></i></span>
                                <h4>Comprendre</h4>
                                <p>suis les cours en vidéo pour apprendre</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6 col-xl-3" style={{cursor:"pointer"}}>
                        <div className="single_feature">
                            <div className="single_feature_part">
                                <span className="single_feature_icon"><i className="ti-new-window"></i></span>
                                <h4>Répèter</h4>
                                <p>suis les cours de répétion en ligne ou en présentiel pour te renforcer</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6 col-xl-3" style={{cursor:"pointer"}}>
                        <div className="single_feature">
                            <div className="single_feature_part single_feature_part_2">
                                <span className="single_service_icon style_icon"><i className="ti-light-bulb"></i></span>
                                <h4>Découvrir</h4>
                                <p>Découvres des forums de discution sur des sujets qui te son complexe et poses des questions aux professeurs</p>
                            </div>
                        </div>
                    </div>
            </div>
            <div className="align-items-center" style={{textAlign:"center"}}>

            </div>

        </div>
    </div>
</section>
  )
}

export default Learning