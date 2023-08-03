import axios from 'axios';
import {useState,useEffect} from 'react'
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import Bannerother from '../../layouts/Students/Bannerother'

const Books = () => {
  const [books, setBooks] = useState([]);
  const [initiale, setInitiale] = useState([])
  const getAllBook = async()=>{
    await axios.get('http://localhost:3000/books').then(({data})=>{
     
      setBooks(data)
      setInitiale(data)
    }).catch((err)=>{
      console.log('err', err)
    })
  }
  const searchSubject = (matiere)=>{
    result = initiale;
    var result = result.filter((book)=> book.matiere == matiere);
    setBooks(result);
  }
  const searchType = (type)=>{
    result = initiale;
    var result = result.filter((book)=> book.type == type);
    setBooks(result);
  }

  useEffect(()=>{
    getAllBook();
  },[""])
  const MySwal = withReactContent(Swal)
  
  const handleSubmit = (e)=>{
    e.preventDefault();
    MySwal.fire({
      title: <p>Hello World</p>,
      didOpen: () => {
        // `MySwal` is a subclass of `Swal` with all the same instance & static methods
        MySwal.showLoading()
      },
    }).then(() => {
      return MySwal.fire(<p>Shorthand works too</p>)
    })
  }
  return (
    <>
        <Bannerother previous='Accueil' actu='Livres' image='books (2).svg' />
        
            <section className="blog_area single-post-area section_padding">
            <div className="container">
               <div className="row">
               <div className="col-lg-4 ">
                     <div className="blog_right_sidebar">
                        <aside className="single_sidebar_widget search_widget">
                           
                              <div className="form-group">
                                 <div className="input-group mb-3">
                                    <input type="text" className="form-control" placeholder="Recherche de livre" />
                                    <div className="input-group-append">
                                       <button className="btn" type="button" onClick={handleSubmit}><i className="ti-search"></i></button>
                                    </div>
                                 </div>
                              </div>
                              <button className="button rounded-0 primary-bg text-white w-100 btn_1" type="submit">Rechercher</button>
                          
                        </aside>
                        <aside className="single_sidebar_widget post_category_widget">
                           <div className=" row" style={{justifyContent:"space-between",alignItems:"center"}}>
                                  <h2 className='widget_title'>Types</h2>
                                  <div  onClick={()=>setBooks(initiale)} className='widget_title ' style={{fontSize:"14px",cursor:"pointer"}}>Tout(250)</div>
                           </div>
                           <ul className="list cat-list">
                              
                              <li>
                                 <a className="d-flex" onClick={(e)=>searchType("Livre")} style={{cursor:"pointer"}}>
                                    <p>Livre</p>
                                    <p>(26)</p>
                                 </a>
                              </li>
                              <li>
                                 <a className="d-flex" onClick={(e)=>searchType("Roman")} style={{cursor:"pointer"}}>
                                    <p>Roman</p>
                                    <p>(98)</p>
                                 </a>
                              </li>
                              <li>
                                 <a className="d-flex" onClick={(e)=>searchType("Bouquin")} style={{cursor:"pointer"}}>
                                    <p>Bouquin</p>
                                    <p>(26)</p>
                                 </a>
                              </li>
                              <li>
                                 <a className="d-flex" onClick={(e)=>searchType("Manuel")} style={{cursor:"pointer"}}>
                                    <p>Manuel</p>
                                    <p>(121)</p>
                                 </a>
                              </li>
                           </ul>
                        </aside>
                        <aside className="single_sidebar_widget post_category_widget">
                           <div className=" row" style={{justifyContent:"space-between",alignItems:"center"}}>
                                  <h2 className='widget_title'>Matieres</h2>
                                  <div  onClick={()=>setBooks(initiale)} className='widget_title ' style={{fontSize:"14px",cursor:"pointer"}}>Tout(250)</div>
                           </div>
                           <ul className="list cat-list">
                              <li>
                                 <a  className="d-flex" onClick={(e)=>searchSubject("Mathématique")} style={{cursor:"pointer"}} >
                                    <p>Mathématique</p>
                                    <p>(37)</p>
                                 </a>
                              </li>
                              <li>
                                 <a className="d-flex" onClick={(e)=>searchSubject("Anglais")} style={{cursor:"pointer"}}>
                                    <p>Anglais</p>
                                    <p>(10)</p>
                                 </a>
                              </li>
                              <li>
                                 <a className="d-flex" onClick={(e)=>searchSubject("Français")} style={{cursor:"pointer"}}>
                                    <p>Français</p>
                                    <p>(03)</p>
                                 </a>
                              </li>
                              <li>
                                 <a className="d-flex" onClick={(e)=>searchSubject("SVT")} style={{cursor:"pointer"}}>
                                    <p>SVT</p>
                                    <p>(11)</p>
                                 </a>
                              </li>
                              <li>
                                 <a className="d-flex" onClick={(e)=>searchSubject("Physique")} style={{cursor:"pointer"}}>
                                    <p>Physique</p>
                                    <p>(21)</p>
                                 </a>
                              </li>
                              <li>
                                 <a className="d-flex" onClick={(e)=>searchSubject("Chimie")} style={{cursor:"pointer"}}>
                                    <p>Chimie</p>
                                    <p>(26)</p>
                                 </a>
                              </li>
                              <li>
                                 <a className="d-flex" onClick={(e)=>searchSubject("Philo")} style={{cursor:"pointer"}}>
                                    <p>Philo</p>
                                    <p>(121)</p>
                                 </a>
                              </li>
                           </ul>
                        </aside>
                       
                        
                     </div>
                  </div>
                  <div className="col-lg-8 ">
                  <div className="row">
                      {books.length == 0?
                          <h2>Aucun livre disponible pour <b>{localStorage.getItem("classe")}</b> </h2>
                      :books.map((livre)=>{
                          return (<div className="col-sm-6 col-lg-6 mt-2 mb-5  ">
                          <div className="single_special_cource card px-4 py-5">
                              <img src="/template/etrain-master/img/books (2).svg" className="special_img" alt="" />
                              <div className="special_cource_text" >
                                  <Link to={"/livres/"+livre.id} className=" mb-5" ><b style={{color:"#1E90FF"}} className="mb-2">{livre.auteur}</b> </Link>
                                  <Link to={"/livres/"+livre.id} className=" mb-5 " ><i  className="mb-2 ml-1">~   {livre.type}</i> </Link>
                                  <Link to={"/livres/"+livre.id}><h3>{livre.titre}</h3></Link>
                                  <p className='mt-3'>{livre.resumer}</p>
                                  
                              </div>
      
                          </div>
                      </div>);
                      })}
                      
                      
                      
                  </div>
                     
                  </div>
                  
               </div>
            </div>
         </section>

        
        
        
    </>
  )
}

export default Books