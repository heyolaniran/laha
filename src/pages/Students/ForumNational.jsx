import React from 'react'
import Bannerother from '../../layouts/Students/Bannerother'

const ForumNational = ({type=""}) => {
  return (
    <>
    <Bannerother previous='Accueil' actu={type == "" ?"Forum National" : "Forum International"} image={type==""? "team-illustration-2.svg":"team-illustration-3.svg" }/>
      <div className="row offset-lg-2 mt-4">
        <div className="col-lg-9">
            <div className="card py-5 px-3">
            <div className="blog-author">
                  <div className="media align-items-center">
                     <img src="/template/etrain-master/img/comment/author.png" alt="" />
                     <div className="media-body">
                        <a href="#">
                           <h4>Harvard milan</h4>
                        </a>
                        <p>Second divided from form fish beast made. Every of seas all gathered use saying you're, he
                           our dominion twon Second divided from</p>
                     </div>
                  </div>
               </div>
               <div className="comments-area">
                  <h4>05 Commentaires</h4>
                  <div className="comment-list">
                     <div className="single-comment justify-content-between d-flex">
                        <div className="user justify-content-between d-flex">
                           <div className="thumb">
                              <img src="/template/etrain-master/img/comment/comment_1.png" alt="" />
                           </div>
                           <div className="desc">
                              <p className="comment">
                                 Multiply sea night grass fourth day sea lesser rule open subdue female fill which them
                                 Blessed, give fill lesser bearing multiply sea night grass fourth day sea lesser
                              </p>
                              <div className="d-flex justify-content-between">
                                 <div className="d-flex align-items-center">
                                    <h5>
                                       <a href="#">Emilly Blunt</a>
                                    </h5>
                                    <p className="date">5 Déc 2022 à 11h </p>
                                 </div>
                                 
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div className="comment-list">
                     <div className="single-comment justify-content-between d-flex">
                        <div className="user justify-content-between d-flex">
                           <div className="thumb">
                              <img src="/template/etrain-master/img/comment/comment_2.png" alt="" />
                           </div>
                           <div className="desc">
                              <p className="comment">
                                 Multiply sea night grass fourth day sea lesser rule open subdue female fill which them
                                 Blessed, give fill lesser bearing multiply sea night grass fourth day sea lesser
                              </p>
                              <div className="d-flex justify-content-between">
                                 <div className="d-flex align-items-center">
                                    <h5>
                                       <a href="#">Emilly Blunt</a>
                                    </h5>
                                    <p className="date">December 4, 2017 at 3:12 pm </p>
                                 </div>
                                 
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div className="comment-list">
                     <div className="single-comment justify-content-between d-flex">
                        <div className="user justify-content-between d-flex">
                           <div className="thumb">
                              <img src="/template/etrain-master/img/comment/comment_3.png" alt="" />
                           </div>
                           <div className="desc">
                              <p className="comment">
                                 Multiply sea night grass fourth day sea lesser rule open subdue female fill which them
                                 Blessed, give fill lesser bearing multiply sea night grass fourth day sea lesser
                              </p>
                              <div className="d-flex justify-content-between">
                                 <div className="d-flex align-items-center">
                                    <h5>
                                       <a href="#">Emilly Blunt</a>
                                    </h5>
                                    <p className="date">December 4, 2017 at 3:12 pm </p>
                                 </div>
                                
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
               <div className="comment-form">
                  <h4>Laisser un mot </h4>
                  <form className="form-contact comment_form" action="#" id="commentForm">
                     <div className="row">
                        <div className="col-12">
                           <div className="form-group">
                              <textarea className="form-control w-100" name="comment" id="comment" cols="30" rows="9"
                                 placeholder=" Commenter la publication"></textarea>
                           </div>
                        </div>
                        
                        
                     </div>
                     <div className="form-group">
                        <button type="submit" className="button btn_1 button-contactForm">Commenter</button>
                     </div>
                  </form>
               </div>
                
            </div>
        </div>
      </div>
    </>
  )
}

export default ForumNational