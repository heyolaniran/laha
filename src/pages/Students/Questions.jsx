import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Bannerother from '../../layouts/Students/Bannerother'

const Questions = () => {
  useEffect(() => {
    getAllExo()
  
    
  }, [""])

  const getAllExo = async()=>{
    axios.get('/db/questions.json').then(({data})=>{
      setBook(data);
      setInitiale(data);
    })
  }
  
  const [books, setBook] = useState([]);
  const [initiale, setInitiale] = useState([]);
  
  const  handleSearch = async(tag)=>{
    setBook(initiale)
  if (tag.length > 0) {
    const data = initiale.filter((book)=> book.titre.includes(tag));
    setBook(data);
  }
    
  }

  return (
    <>
      <Bannerother previous='Accueil' actu='Questions/Reponses' image='quiz.svg'/>
      <section className="blog_area single-post-area section_padding">
            <div className="container">
               <div className="row">
               <div className="col-lg-12 ">
                     <div className="blog_right_sidebar">
                        <aside className="single_sidebar_widget search_widget">
                           
                              <div className="form-group">
                                 <div className="input-group mb-3">
                                    <input type="text" className="form-control" placeholder="Rechercher une question" onChange={(e)=>{
                                      handleSearch(e.target.value)
                                    }}/>
                                    <div className="input-group-append">
                                       <button className="btn" type="button"><i className="ti-search"></i></button>
                                    </div>
                                 </div>
                              </div>
                              <button className="button rounded-0 primary-bg text-white w-100 btn_1" type="submit">Rechercher</button>
                          
                        </aside>
                     
                       
                        
                     </div>
                  </div>
                  <div className="col-lg-12 ">
                  <div className="row">
                      {books.length == 0?
                          <h2>Aucune questions disponible pour <b>{localStorage.getItem("classe")}</b> </h2>
                      :books.map((livre)=>{
                          return (<div className="col-sm-6 col-lg-3 mt-2 mb-5  ">
                          <div className="single_special_cource card px-4 py-5">
                              <img src="/template/etrain-master/img/quiz.svg" className="special_img" alt="" />
                              <div className="special_cource_text" >
                                  <Link to={"/questions/"+livre.id} className=" mb-5" ><b style={{color:"#32CD32"}} className="mb-2">{livre.by}</b> </Link>
                                  <Link to={"/questions/"+livre.id} className=" mb-5 " ><i  className="mb-2 ml-1">~   {livre.type}</i> </Link>
                                  <Link to={"/questions/"+livre.id}><h3>{livre.titre}</h3></Link>
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

export default Questions