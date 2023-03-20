import React from 'react'
import { Link } from 'react-router-dom'

const ForgetPasswordCard = () => {
  return (
    <div className="container-xxl">
      <div className="authentication-wrapper authentication-basic container-p-y">
        <div className="authentication-inner py-4">
          <div className="card">
            <div className="card-body">
              <div className="app-brand justify-content-center">
                
              </div>
              <h4 className="mb-2">Mot de passe oublié? 🔒</h4>
              <p className="mb-4">Entrer votre email et suivez les instrutions pour restaurer votre mot de passe</p>
              <form id="formAuthentication" className="mb-3" action="index.html" method="POST">
                <div className="mb-3">
                  <label for="email" className="form-label">Email</label>
                  <input
                    type="text"
                    className="form-control"
                    id="email"
                    name="email"
                    placeholder="Entrer votre email"
                    autofocus
                  />
                </div>
                <button className="btn  d-grid w-100" style={{background:"#bb8f47",color:"white"}}>Restaurer mot de passe</button>
              </form>
              <div className="text-center">
                <Link to="/login" href="auth-login-basic.html" className="d-flex align-items-center justify-content-center">
                  <i className="bx bx-chevron-left scaleX-n1-rtl bx-sm"></i>
                  Retour sur la page de connexion
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ForgetPasswordCard