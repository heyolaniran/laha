import axios from 'axios'
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Bannerother from '../../layouts/Students/Bannerother'

const Question = () => {
  useEffect(() => {
    getExo()
  }, [""]);
  const {id} = useParams();
  const navigate = useNavigate();
  const [exo, setExo] = useState({})
  const getExo = async()=>{
    await axios.get('/db/questions.json').then(({data})=>{
      const result = data.filter((ee)=> ee.id == id)
      if(result.length == 0){
        navigate('/question-reponse')
      }else{

        setExo(result[0])
      }
    })
  }
  
  return (
    <>
      <Bannerother previous='Questions' actu={exo.titre} image="quiz.svg" />

      <section className="blog_area single-post-area section_padding">
          <div className="row justify-content-center">
                <div className="col-xl-5">
                    <div className="section_tittle text-center">
                       <><p></p>
                       <h2>Question</h2></> 
                       
                    </div>
                </div>
            </div>
      <div className="container">
         <div className="row">
            <div className="col-lg-12 posts-list ">
               <div className="single-post">
                
                  <div className="blog_details">
                     <h2>{exo.titre}
                     </h2>
                     <ul className="blog-info-link mt-3 mb-4">
                        <li><a href="#"><i className="far fa-user"></i> par {exo.by}</a></li>
                     </ul>
                     <p className="excert">
                       {exo.resumer}
                     </p>
                     <div className="row justify-content-center">
                <div className="col-xl-5">
                    <div className="section_tittle text-center">
                       
                       <h2>Meilleure reponses</h2>
                       
                    </div>
                </div>
            </div>
                     
                     <div className="quote-wrapper">
                        <div className="quotes">
                           {exo.reponse != null ? exo.reponse.ans : "Pas de reponse à cette question pour l'instant"}
                        </div>
                     </div>
                     
                  </div>
               </div>
            
               
             
               
            </div>
       
         </div>
      </div>
      </section>
    </>
  )
}

export default Question