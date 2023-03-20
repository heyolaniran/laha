import axios from 'axios';
import { useEffect,useState } from 'react';
import { Link } from 'react-router-dom';

const ExercicesCard = () => {
    const [data, setData] = useState([])
    const [initiale, setInitiale] = useState([])
    useEffect(() => {
        getAllExo()
    },[""])
    const getAllExo = async()=>{

        await axios.get('/db/exercices.json').then(({data})=>{
            setData(data)
            setInitiale(data)
        })
    }
    const searchSubject = (matiere)=>{
      result = initiale;
      var result = result.filter((exo)=> exo.matiere == matiere);
      setData(result);
    }
    
    const classe = localStorage.getItem('classe');
  return (
    <section className="blog_area single-post-area section_padding">
      <div className="container">
         <div className="row">
         <div className="col-lg-4 ">
               <div className="blog_right_sidebar">
                  <aside className="single_sidebar_widget search_widget">
                     <form action="#">
                        <div className="form-group">
                           <div className="input-group mb-3">
                              <input type="text" className="form-control" placeholder="Recherche d'exercice" />
                              <div className="input-group-append">
                                 <button className="btn" type="button"><i className="ti-search"></i></button>
                              </div>
                           </div>
                        </div>
                        <button className="button rounded-0 primary-bg text-white w-100 btn_1" type="submit">Rechercher</button>
                     </form>
                  </aside>
                  <aside className="single_sidebar_widget post_category_widget">
                     <div className=" row" style={{justifyContent:"space-between",alignItems:"center"}}>
                            <h2 className='widget_title'>Categories</h2>
                            <div  onClick={()=>setData(initiale)} className='widget_title ' style={{fontSize:"14px",cursor:"pointer"}}>Tout(250)</div>
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
                {data.length == 0?
                    <h2>Aucun exercice disponible pour <b>{classe}</b> </h2>
                :data.map((exercice)=>{
                    return (<div className="col-sm-6 col-lg-6 mt-2 mb-5  ">
                    <div className="single_special_cource card px-4 py-5">
                        <img src="/template/etrain-master/img/teache (3).svg" className="special_img" alt="" />
                        <div className="special_cource_text" >
                            <Link to={"/exercices/1"} className=" mb-5" ><b style={{color:"#bb8f47"}} className="mb-2">{exercice.matiere}</b> </Link>
                            <Link to={"/exercices/1"}><h3>{exercice.titre}</h3></Link>
                            <p clas>{exercice.resumer}</p>
                            
                        </div>

                    </div>
                </div>);
                })}
                
                
                
            </div>
               
            </div>
            
         </div>
      </div>
   </section>
  )
}

export default ExercicesCard