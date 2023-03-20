import React from 'react'
import LayoutStudent from '../../../layouts/Admin/Student/Layout'

const MonAbonnement = () => {
  return (
    <LayoutStudent actif='abon'>
    <div className="container-xxl flex-grow-1 container-p-y">
                  <h4 className="fw-bold py-3 mb-4"><span className="text-muted fw-light">Dashboard /</span> Abonnement</h4>
    
                  <div className="row">
                    <div className="col-md-12">
                     
                      <div className="card mb-4">
                        <h5 className="card-header"> Detail sur l'abonnement</h5>
                       
                        <div className=" mx-4 alert alert-warning">
                              <h6 className="alert-heading fw-bold mb-1">Votre abonnement épuise bientot?</h6>
                              <p className="mb-0">Une fois le 26 Avril 2023,vous n'aurez plus accès à nos services</p>
                            </div>
                        <hr className="my-0" />
                        <div className="card-body">
                          <div className="row mt-3">
                            <div className="col-lg-8"><b>Type d'abonnements:</b></div>
                            <div className="col-lg-4 color-danger font-primary"  style={{color:"green"}}><b>Premium</b></div>
                          </div>
                          <div className="row mt-3">
                            <div className="col-lg-8"><b>Prix :</b></div>
                            <div className="col-lg-4 color-danger font-primary"  ><b>40 000 FCFA</b></div>
                          </div>
                          <div className="row mt-3">
                            <div className="col-lg-8"><b>Par:</b></div>
                            <div className="col-lg-4 color-danger font-primary"  ><b>an</b></div>
                          </div>
                          <div className="row mt-3">
                            <div className="col-lg-8"><b>Créer le:</b></div>
                            <div className="col-lg-4 color-danger font-primary"  ><i>30 Décembre 2022</i></div>
                          </div>
                          <div className="row mt-3" style={{color:"red"}}>
                            <div className="col-lg-8"><b>Exprire le:</b></div>
                            <div className="col-lg-4 color-danger font-primary"  ><i>26 Avril 2023</i></div>
                          </div>
                          <button type="submit" className="mt-4 btn btn-primary deactivate-account">Réabonnez-vous</button>

                        </div>
                      </div>
                      
                    </div>
                  </div>
                </div>
    </LayoutStudent>
  )
}

export default MonAbonnement