import axios from 'axios';
import  { useEffect, useState } from 'react'
import { Link, redirect, useNavigate } from 'react-router-dom'

const CourCard = ({id,image="",titre="",description="",auteur="",heures="- heure",sous_titres = [],cours=[],}) => {
    
    const [allSousTitre, setAllSousTitre] = useState([])
    const navigator = useNavigate();
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
    
    return (
        <section className="blog_area single-post-area section_padding">
        <div className="container">
            <div className="my-5">
                <button className="btn_2" onClick={(e)=>{
                    e.preventDefault();
                    navigator('/cours')
                }}>Retour sur les cours</button>
            </div>
            <div className="row">
                <div className="col-lg-8 posts-list">
                <div className="feature-img">
                        <iframe width="100%" height="450" src="https://www.youtube.com/embed/1Er8c6xikcA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

                        </div>
                </div>
                <div className="col-lg-4">
                    <div className="blog_right_sidebar">
                    {/* <aside className="single_sidebar_widget popular_post_widget">
                            <h3 className="widget_title">Autres cours</h3>
                            {cours.map((cr)=>{
                                return (
                                    <div className="media post_item">
                                <img src="/template/etrain-master/img/teache (1).svg" style={{width:"100px",height:"70px"}} alt="post" />
                                <div className="media-body">
                                <span onClick={(e)=>{
                                    e.preventDefault();
                                    getCour();
                                }}>
                                    <h3>{cr.titre}</h3>
                                </span>
                                <p>{cr.createdAt}</p>
                                </div>
                            </div>
                                )
                            })}
                            
                        </aside> */}
                        <aside className="single_sidebar_widget post_category_widget">
                            <h4 className="widget_title">Sous titres</h4>
                            <ul className="list cat-list">
                                {allSousTitre.map((sous_titre)=>{
                                    return(<li>
                                        <Link to={"/cours/"+id+"/sous-titres/"+sous_titre.id} href="#" className="d-flex">
                                        <p>{sous_titre.titre}</p>
                                        <p>(2 heures)</p>
                                        </Link>
                                    </li>)
                                })}
                            
                            </ul>
                        </aside>
                        
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-11">
                <div className="single-post">
                    
                    <div className="blog_details">
                        <h2>{titre}</h2>
                        <div style={{marginBottom:"15px"}}><b>Présentation du cour ({heures})</b></div>
                        
                        
                        <p className="excert">
                        {description}
                        </p>
                        
                    </div>
                </div>
                <div className="blog-author">
                    <div className="media align-items-center">
                        <img src="/template/etrain-master/img/blog/author.png" alt="" />
                        <div className="media-body">
                            <a>
                            <h4>{auteur}</h4>
                            </a>
                            <p>Second divided from form fish beast made. Every of seas all gathered use saying you're, he
                            our dominion twon Second divided from</p>
                        </div>
                    </div>
                </div>
                <div className="navigation-top">
                    
                    <div className="navigation-area">
                        <div className="row">
                            <div
                            className="col-lg-6 col-md-6 col-12 nav-left flex-row d-flex justify-content-start align-items-center">
                            
                            </div>
                            <div
                            className="col-lg-6 col-md-6 col-12 nav-right flex-row d-flex justify-content-end align-items-center">
                            <div className="detials">
                                <p>Démarrer le cour</p>
                                {allSousTitre.length > 0 &&<Link to={'/cours/'+id+"/sous-titres/"+allSousTitre[0].id}>
                                    <h4>{allSousTitre[0].titre}</h4>
                                </Link>}
                            </div>
                            <div className="arrow">
                                <a href="#">
                                    <span className="lnr text-white ti-arrow-right"></span>
                                </a>
                            </div>
                            <div className="thumb">
                                <a href="#">
                                    <img className="img-fluid" src="template/etrain-master/img/post/next.png" alt="" />
                                </a>
                            </div>
                            
                            </div>
                        </div>
                    </div>
                </div>
                
             
               
                </div>
            </div>
        </div>
        </section>
    )
}

export default CourCard