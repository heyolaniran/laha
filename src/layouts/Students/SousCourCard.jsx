import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


const SousCour =({titre="",cour=[],sous_titres=[],id=0,description ="",qcm=[]})=>{
    
    const [allSousTitre, setAllSousTitre] = useState([])
    // const navigator = useNavigate();
    useEffect(() => {
    getSousTitres();
    }, [])
    const getSousTitres =async ()=>{
        axios.get('/db/sous_titre.json').then(({data})=>{
            
            var sous = data.filter((sous_tit)=>sous_titres.includes(sous_tit.id))
            // console.log('sous', sous)
            setAllSousTitre(sous)
        })
    }
return(

    <>
    <section className="blog_area single-post-area section_padding">
      <div className="container">
         <div className="row">
            <div className="col-lg-9 posts-list">
               <div className="single-post">
                  <div className="feature-img">
                  <iframe width="100%" height="450" src="https://www.youtube.com/embed/_WsyszOaqCs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                    
                  </div>
                  <div className="blog_details">
                     <h2>{titre}</h2>
                     <ul className="blog-info-link mt-3 mb-4">
                        <b><Link to="" href="#"> { cour.titre}</Link></b>
                     </ul>
                     <p className="excert">
                        {description}
                     </p>
                     
                  </div>
               </div>
               <div className="navigation-top">
                 
                  <div className="navigation-area">
                     <div className="row">
                        <div
                           className="col-lg-6 col-md-6 col-12 nav-left flex-row d-flex justify-content-start align-items-center">
                           <div className="thumb">
                              <a href="#">
                                 <img className="img-fluid" src="/template/etrain-master/img/post/preview.png" alt="" />
                              </a>
                           </div>
                           <div className="arrow">
                              <Link to="" href="#">
                                 <span className="lnr text-white ti-arrow-left"></span>
                              </Link>
                           </div>
                           <div className="detials">
                              <p>Précedent </p>
                              <Link to="" href="#">
                                 <h4>Sous Titre 2</h4>
                              </Link>
                           </div>
                        </div>
                        <div
                           className="col-lg-6 col-md-6 col-12 nav-right flex-row d-flex justify-content-end align-items-center">
                           <div className="detials">
                              <p>Suivant</p>
                              <Link  to="" href="#">
                                 <h4>Sous Titre 3</h4>
                              </Link>
                           </div>
                           <div className="arrow">
                              <a href="#">
                                 <span className="lnr text-white ti-arrow-right"></span>
                              </a>
                           </div>
                           <div className="thumb">
                              <a href="#">
                                 <img className="img-fluid" src="/template/etrain-master/img/post/next.png" alt="" />
                              </a>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
               <div className="blog-author">
                  <div className="media align-items-center">
                     <img src="/template/etrain-master/img/blog/author.png" alt="" />
                     <div className="media-body">
                        <a href="#">
                           <h4>{cour.length && cour[0].auteur}</h4>
                        </a>
                        <p>Second divided from form fish beast made. Every of seas all gathered use saying you're, he
                           our dominion twon Second divided from</p>
                     </div>
                  </div>
               </div>
               <div className="row mt-5">
                <div className="col-lg-12">
                    <span style={{fontSize:"22px",fontWeight:"900"}}><b>QCM</b></span>

                    <br />
                    <br />
                    <ol>
                        {qcm.map((q)=>{

                            return <>
                                <li>{q.quiz}</li>
                                <div className="mt-2">
                                    <div className="row mt-2 mb-4">
                                        {q.proposition.map((pop)=>{
                                            return (
                                                <>
                                                    <div className="col-lg-1"><input type="checkbox" /></div>
                                                    <div className="col-lg-5">{pop}</div>
                                                </>
                                            )
                                        })}
                                    </div>
                                </div>
                            </>
                        })}
                    </ol>

                            <button className="btn_1 mt-4">Soumettre</button>
                </div>
               </div>
          
              
            </div>
            
         </div>
      </div>
   </section>

    </>
)
}

export default SousCour;