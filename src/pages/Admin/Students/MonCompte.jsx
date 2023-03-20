import React from 'react'
import LayoutStudent from '../../../layouts/Admin/Student/Layout'

const MonCompte = () => {
  return (
<LayoutStudent actif='profil'>
<div className="container-xxl flex-grow-1 container-p-y">
              <h4 className="fw-bold py-3 mb-4"><span className="text-muted fw-light">Compte /</span> Parametre</h4>

              <div className="row">
                <div className="col-md-12">
                 
                  <div className="card mb-4">
                    <h5 className="card-header"> Detaile de profil</h5>
                    <div className="card-body">
                      <div className="d-flex align-items-start align-items-sm-center gap-4">
                        <img
                          src="template/snaet/assets/img/avatars/1.png"
                          alt="user-avatar"
                          className="d-block rounded"
                          height="100"
                          width="100"
                          id="uploadedAvatar"
                        />
                        <div className="button-wrapper">
                          <label for="upload" className="btn btn-primary me-2 mb-4" tabindex="0">
                            <span className="d-none d-sm-block">Changer de photo</span>
                            <i className="bx bx-upload d-block d-sm-none"></i>
                            <input
                              type="file"
                              id="upload"
                              className="account-file-input"
                              hidden
                              accept="image/png, image/jpeg"
                            />
                          </label>
                          

                          <p className="text-muted mb-0">Allowed JPG, GIF or PNG. Max size of 800K</p>
                        </div>
                      </div>
                    </div>
                    <hr className="my-0" />
                    <div className="card-body">
                      <form id="formAccountSettings" method="POST" onsubmit="return false">
                        <div className="row">
                          <div className="mb-3 col-md-6">
                            <label for="firstName" className="form-label">Nom</label>
                            <input
                              className="form-control"
                              type="text"
                              id="firstName"
                              name="firstName"
                              value={localStorage.getItem('firstname')}
                              autofocus
                            />
                          </div>
                          <div className="mb-3 col-md-6">
                            <label for="lastName" className="form-label">Prénoms</label>
                            <input className="form-control" type="text" name="lastName" id="lastName" value={localStorage.getItem('lastname')} />
                          </div>
                          <div className="mb-3 col-md-6">
                            <label for="email" className="form-label">E-mail</label>
                            <input
                              className="form-control"
                              type="text"
                              id="email"
                              name="email"
                              value={localStorage.getItem('email')}
                              placeholder="john.doe@example.com"
                            />
                          </div>
                          <div className="mb-3 col-md-6">
                            <label for="organization" className="form-label">Pays</label>
                            <input
                              type="text"
                              className="form-control"
                              id="organization"
                              readOnly
                              name="organization"
                              value={localStorage.getItem('country')}
                            />
                          </div>
                          <div className="mb-3 col-md-6">
                            <label className="form-label" for="phoneNumber">Numéro de téléphone</label>
                            <div className="input-group input-group-merge">
                              <span className="input-group-text">BJ (+229)</span>
                              <input
                                type="text"
                                id="phoneNumber"
                                name="phoneNumber"
                                className="form-control"
                                value={"60 00 00 00"}
                              />
                            </div>
                          </div>
                          <div className="mb-3 col-md-6">
                            <label for="address" className="form-label">Adresse</label>
                            <input type="text" className="form-control" id="address" name="address" placeholder="Address" value="Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, placeat! Similique animi doloremque veniam ullam distinctio non quos unde expedita odit ab voluptatem adipisci ipsam, reprehenderit sint? Dolorem, nihil voluptas." />
                          </div>
                          
                        </div>
                        <div className="mt-2">
                          <button type="submit" className="btn btn-primary me-2">Enregistrer</button>
                          <button type="reset" className="btn btn-outline-secondary">Annuler</button>
                        </div>
                      </form>
                    </div>
                  </div>
                  <div className="card">
                    <h5 className="card-header">Supprimer votre compte</h5>
                    <div className="card-body">
                      <div className="mb-3 col-12 ">
                        <div className="alert alert-warning">
                          <h6 className="alert-heading fw-bold mb-1">Etes vous sûre de vouloir supprimer votre compte?</h6>
                          <p className="mb-0">Une fois le compte supprimé,Plus possible de faire pas en arriere</p>
                        </div>
                      </div>
                      <form id="formAccountDeactivation">
                        <div className="form-check mb-3">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            name="accountActivation"
                            id="accountActivation"
                          />
                          <label className="form-check-label" for="accountActivation">Je confirme vouloir supprimer ce compte</label>
                        </div>
                        <button type="submit" className="btn btn-danger deactivate-account">Supprimer Compte</button>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
</LayoutStudent>
  )
}

export default MonCompte