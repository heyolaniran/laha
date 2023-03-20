import React from 'react'

const Feature = () => {
  return (
    <section className="feature_part">
    <div className="container">
        <div className="learning_part">

        <div className="learning_member_text">
            <h5> <h4><b>On vous aide à</b></h4></h5>
        </div>
        
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
        </div>
    </div>
</section>
  )
}

export default Feature