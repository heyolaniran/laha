import React from 'react'
import { Link } from 'react-router-dom'

const CoursCard = ({classe="",dynamic=false,data=[],}) => {
    const disabledStart = (count)=>{
        let i = count;
        let retour = ""
        while (i<5) {
            i = i+1;
            retour += <div> flou</div>
        }
    }
    const checkStart = (count)=>{
        let i = 0;
        var retour = [];
        console.log('i', i)
        while (i<count) {
            retour.push('color_star.svg')
            i = i+1;
        }
        i= count;
        while (i<5) {
            i = i+1;
            retour.push('star.svg')
        }
        console.log(retour)
        return retour;
    }
  return (
    <section className="special_cource">
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-xl-5">
                    <div className="section_tittle text-center">
                       {dynamic ?<><p>Vos cours</p><h2>Les cours de {classe}</h2></> :
                       <> <p>Les plus populaire</p> <h2>Les Cours</h2></>}
                       
                    </div>
                </div>
            </div>
            <div className="row">
                {data.length == 0?
                    <h2>Aucun cours disponible pour <b>{classe}</b> </h2>
                :data.map((cour)=>{
                    return (<div className="col-sm-6 col-lg-4 mt-2 mb-2">
                    <div className="single_special_cource">
                        <img src="template/etrain-master/img/teache (4).svg" className="special_img" alt="" />
                        <div className="special_cource_text">
                            <Link to={"/cours/"+cour.id} className="btn_4">{cour.matiere}</Link>
                            <Link to={"/cours/"+cour.id}><h3>{cour.titre}</h3></Link>
                            <p>{cour.resumer}</p>
                            <div className="author_info">
                                <div className="author_img">
                                    <img src="template/etrain-master/img/author/author_1.png" alt="" />
                                    <div className="author_info_text">
                                        <p>Conduire par</p>
                                        <h5><a href="#">{cour.auteur}</a></h5>
                                    </div>
                                </div>
                                <div className="author_rating">
                                    <div className="rating">
                                        {checkStart(Math.round(cour.rang)).map((src)=>{
                                        return <img src={"template/etrain-master/img/icon/"+src} alt="" />
                                        })}
                                       
                                    </div>
                                    <p>{cour.rang} etoiles</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>);
                })}
                
                
                
            </div>
        </div>
    </section>
  )
}

export default CoursCard