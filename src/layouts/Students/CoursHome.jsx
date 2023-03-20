
import axios from 'axios'
import { useState , useEffect } from 'react'
import { Link } from 'react-router-dom'

const CoursHome = () => {
    const [cours, setCours] = useState([])

    const allCours = async()=>{
    await axios.get('/db/cours.json')
    .then(({data})=>{
        setCours(data.slice(0,3));
    }).catch((err)=>{
        console.log('err', err)
    })
    }
    useEffect(() => {
      allCours();
    }, [])
  return (
    <section className="special_cource">
    <div className="container">
        <div className="row justify-content-center">
            <div className="col-xl-5">
                <div className="section_tittle text-center">
                    <p>Les plus populaire</p>
                    <h2>Nos Cours</h2>
                </div>
            </div>
        </div>
        <div className="row">
            {cours && cours.map((cour)=>{
                return (<div className="col-sm-6 col-lg-4">
                <div className="single_special_cource">
                    <img src="template/etrain-master/img/teache (4).svg" className="special_img" alt="" />
                    <div className="special_cource_text">
                        <Link to={"/cours/"+cour.id} className="btn_4">{cour.matiere}</Link>
                        <h4></h4>
                        <Link to={"/cours/"+cour.id}><h3>{cour.titre}</h3></Link>
                        <p>{cour.resumer} </p>
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
                                    <a href="#"><img src="template/etrain-master/img/icon/color_star.svg" alt="" /></a>
                                    <a href="#"><img src="template/etrain-master/img/icon/color_star.svg" alt="" /></a>
                                    <a href="#"><img src="template/etrain-master/img/icon/color_star.svg" alt="" /></a>
                                    <a href="#"><img src="template/etrain-master/img/icon/color_star.svg" alt="" /></a>
                                    <a href="#"><img src="template/etrain-master/img/icon/star.svg" alt="" /></a>
                                </div>
                                <p>3.8 Etoiles</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>)
            })}
            
        </div>
        <div className="my-4" style={{display:"flex",justifyContent:"center"}}>
            <Link to="/cours">
                <button className="btn_1" style={{textAlign:"center"}}>Voir plus</button>
            </Link>
        </div>
    </div>
</section>
  )
}

export default CoursHome