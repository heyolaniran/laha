import React, { useState } from 'react'
import LayoutStudent from '../../../layouts/Admin/Student/Layout'
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import axios from 'axios';
const MonCompte = () => {
  const [selectedInput, setSelectedInput] = useState('')
  const {user,isAuth} = useSelector(state=> state.auth);
  const [item, setItem] =  useState({}) ; 
  const [countries, setCountries] = useState([]) ;
  const handleSubmit =  () => { 
    console.log(item)
  }

  const handleCountries =  () => { 
     axios.get(`${process.env.REACT_APP_BACKEND_SOURCE}/pays`).then((json) => { 
      setCountries(json.data)
     })
  }

  useEffect(() => {
    handleCountries() ; 
    setItem({...user})
  }, [])
  
  return (
<LayoutStudent actif='profil'>
<div className="container-xxl flex-grow-1 container-p-y">
              <h4 className="fw-bold py-3 mb-4"><span className="text-muted fw-light">Compte /</span> Parametre</h4>

              <div className="row">
                <div className="col-md-12">
                 
                  <div className="card mb-4">
                    <h5 className="card-header"> Details de profil</h5>
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
                      <div id="formAccountSettings">
                        <div className="row">
                          <div className="mb-3 col-md-6">
                            <label for="firstName" className="form-label">Nom</label>
                            <input
                              className="form-control"
                              type="text"
                              name='firstname'
                              defaultValue={user.surname}
                              onChange={(e) => { 
                                setItem({...item , surname : e.target.value}) ; 
                              }}
                            
                            />
                          </div>
                          <div className="mb-3 col-md-6">
                            <label for="lastName" className="form-label">Prénoms</label>
                            <input className="form-control" type="text" name="lastName" id="lastName" defaultValue={user.firstname} onChange={(e) => {
                              setItem({...item , firstname : e.target.value})
                            }} />
                          </div>
                          <div className="mb-3 col-md-6">
                            <label for="email" className="form-label">E-mail</label>
                            <input
                              className="form-control"
                              type="text"
                              id="email"
                              name="email"
                              defaultValue={user.email}
                              onChange={(e) => { 
                                setItem({...item , email : e.target.value}) ; 
                              }}
                              placeholder="john.doe@example.com"
                            />
                          </div>
                          <div class="form-group">
                            <label for="">Pays </label>
                            <select class="form-control" name="" id="" defaultValue={selectedInput} onChange={(e) => { 
                              setItem({...item, country: e.target.value})
                              setSelectedInput(e.target.value)
                              }}>
                              {countries.map((country) => {
                                return (
                                   <option defaultValue={country.name} key={country.code}>{country.name}</option>
                                )
                              }
                              )}
                            </select>
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
                                defaultValue={user.tel}
                                onChange={(e) => { 
                                  setItem({...item , tel : e.target.value}) ; 
                                }} 

                              />
                            </div>
                          </div>
                          <div className="mb-3 col-md-6">
                            <label for="address" className="form-label">Adresse</label>
                            <input type="text" className="form-control" id="address" name="address" placeholder="Address" 
                            defaultValue={user.quartier + ", "+user.ville}
                            onChange={(e) => { 
                              setItem({...item , address : e.target.value}) ; 
                            }}
                            />
                          </div>
                          
                        </div>
                        <div className="mt-2">
                          <button type="submit" className="btn btn-primary me-2" onClick={handleSubmit}>Enregistrer</button>
                          <button type="reset" className="btn btn-outline-secondary">Annuler</button>
                        </div>
                      </div>
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