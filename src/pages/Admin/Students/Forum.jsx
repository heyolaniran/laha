import React from 'react'
import { Link } from 'react-router-dom'
import LayoutStudent from '../../../layouts/Admin/Student/Layout'

const Forum = ({type=""}) => {
  return (
    
    <LayoutStudent actif='forum'>

<div className="container-xxl flex-grow-1 container-p-y">
        <h4 className="fw-bold py-3 mb-4">
          <span className="text-muted fw-light">Dashboard /</span>
          <Link to={"/forums/national"} className="text-muted fw-light">
            Forum /
          </Link>
          {type=='' ? "National": 'International'}
        </h4>
        <div className="row mt-3">
          
          <h2 className="text-muted mb-4">Forum Mathématique </h2>

         <div className="row">
             <div className=" bg-white my-4 px-4 py-4" style={{width:"max-content"}}>
            <div className=" mb-4">
              <div className="bg-whitep-3 text-start">
                <figure className="mb-0">
                  <blockquote className="blockquote">
                    <p>
                      A well-known quote, contained in a blockquote element.
                    </p>
                  </blockquote>
                  <figcaption className="blockquote-footer mb-0 text-muted">
                    Professeur<cite title="Source Title"> K.Albericq</cite>
                  </figcaption>
                </figure>
              </div>
            </div>
          </div>
         </div>
        
         
         <div className="row" style={{justifyContent:"end",color:"white"}}>
             <div className=" bg-primary my-4 px-4 py-2" style={{width:"max-content"}}>
            <div className=" mb-4">
              <div className="p-3 text-end">
                <figure className="mb-0">
                  <blockquote className="blockquote">
                    <p>
                      A well-known quote, contained in a blockquote element.
                    </p>
                  </blockquote>
                  <figcaption className="blockquote-footer mb-0 ">
                    <cite title="Source Title"> Moi</cite>
                  </figcaption>
                </figure>
              </div>
            </div>
          </div>
         </div>
         <div className="row">
             <div className=" bg-white my-4 px-4 py-4" style={{width:"max-content"}}>
            <div className=" mb-4">
              <div className="bg-whitep-3 text-start">
                <figure className="mb-0">
                  <blockquote className="blockquote">
                    <p>
                      A well-known quote, contained in a blockquote element.
                    </p>
                  </blockquote>
                  <figcaption className="blockquote-footer mb-0 text-muted">
                    Professeur<cite title="Source Title"> K.Albericq</cite>
                  </figcaption>
                </figure>
              </div>
            </div>
          </div>
         </div>
         <div className="row">
             <div className=" bg-white my-4 px-4 py-4" style={{width:"max-content"}}>
            <div className=" mb-4">
              <div className="bg-whitep-3 text-start">
                <figure className="mb-0">
                  <blockquote className="blockquote">
                    <p>
                      A well-known quote, contained in a blockquote element.
                    </p>
                  </blockquote>
                  <figcaption className="blockquote-footer mb-0 text-muted">
                    Professeur<cite title="Source Title"> K.Albericq</cite>
                  </figcaption>
                </figure>
              </div>
            </div>
          </div>
         </div>
         
        </div>
        <div className="row">
            <div className="col-10 offset-1">
                <div className="card">
                    <div className="card-body">
                    <div className="input-group input-group-merge speech-to-text">
                        <input type="text" className="form-control" placeholder="Repondre" aria-describedby="text-to-speech-addon" />
                        <span className="input-group-text" id="text-to-speech-addon">
                          <i className="bx bx-microphone cursor-pointer text-to-speech-toggle"></i>
                        </span>
                      </div>
                    </div>
                </div>
            </div>
        </div>
</div>
    </LayoutStudent>
  )
}

export default Forum