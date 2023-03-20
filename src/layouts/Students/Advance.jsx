import React from 'react'

const Advance = () => {
  return (
    <section className="advance_feature learning_part">
    <div className="container">
        <div className="row align-items-sm-center align-items-xl-stretch">
            <div className="col-md-6 col-lg-6">
                <div className="learning_member_text">
                    <h5>Avec Nous</h5>
                    {/* <h2>Apprendre est plus facile avec LAHACADEMIA</h2> */}
                    {/* <p>Nous mettons à votre dispositions touts ce qu'il faut pour apprendre plus facilement et dans les bonnes conditions,<br /> Vous pouviez avoir acces à  nos:</p> */}
                    <div className="row">
                        <div className="col-sm-6 col-md-12 col-lg-6">
                            <div className="learning_member_text_iner">
                                <span className="ti-book"></span>
                                <h4>402 Livres</h4>
                                <p>Les meilleures livres du marches pour une bonne connaissance de vos matieres</p>
                            </div>
                        </div>
                        <div className="col-sm-6 col-md-12 col-lg-6">
                            <div className="learning_member_text_iner">
                                <span className="ti-crown"></span>
                                <h4>+70 Professeurs</h4>
                                <p>Des professeurs et Docteurs expérimentés dans l'ensignement depuis des années</p>
                            </div>
                        </div>
                        <div className="col-sm-6 col-md-12 col-lg-6">
                            <div className="learning_member_text_iner">
                                <span className="ti-ruler-pencil"></span>
                                <h4>+30 Cours</h4>
                                <p>Des cours bien details pour une meilleure compréhension</p>
                            </div>
                        </div>
                        <div className="col-sm-6 col-md-12 col-lg-6">
                            <div className="learning_member_text_iner">
                                <span className="ti-thought"></span>
                                <h4>+20 Forums</h4>
                                <p>Des forums de discussion entre eleves et professeur</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-lg-6 col-md-6">
                <div className="learning_img">
                    <img src="template/etrain-master/img/advance_feature_img.png" alt="" />
                </div>
            </div>
        </div>
    </div>
</section>
  )
}

export default Advance