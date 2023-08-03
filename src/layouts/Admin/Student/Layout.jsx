import React from 'react'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import 'react-perfect-scrollbar/dist/css/styles.css'
import PerfectScrollbar from 'react-perfect-scrollbar'
import { SET_AUTH_USER } from '../../../reducers/modules/Auth/mutation';

const LayoutStudent = ({children,actif = "tb",}) => {
  const {user,isAuth} = useSelector(state=> state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  
  return (
    <>
    <div className="layout-wrapper layout-content-navbar">
      <div className="layout-container">
        <aside
          id="layout-menu"
          className="layout-menu menu-vertical menu bg-menu-theme"
        >
          <div className="app-brand demo">
            <Link to="/accueil" href="index.html" className="app-brand-link">
              <span className="app-brand-logo demo">
                <img src="/template/etrain-master/img/favicon.png" width="50px" alt="" />
              </span>
              <span className=" demo fw-bolder ms-2" style={{color:"#32CD32"}}>
                GESCO
              </span>
            </Link>

            <a
            onClick={(e)=>{
              document.querySelector("html").classList.toggle("layout-menu-expanded")
          }}
              className="layout-menu-toggle menu-link text-large ms-auto d-block d-xl-none"
            >
              <i className="bx bx-chevron-left bx-sm align-middle"></i>
            </a>
          </div>

          <div className="menu-inner-shadow"></div>
          <PerfectScrollbar >
          <ul className="menu-inner py-1 mt-0" style={{paddingBottom:"20px"}}>
            <li className={actif === "tb" ? "menu-item active":'menu-item'}>
              <Link to="/mon_compte" className="menu-link">
                <i className="menu-icon tf-icons bx bx-home-circle"></i>
                <div data-i18n="Analytics">Tableau de bord</div>
              </Link>
            </li>

           

          
            <li className={actif === "cours" ? "menu-item active":'menu-item'}>
              <Link to="/cours"  className="menu-link ">
                <i className="menu-icon tf-icons bx bx-dock-top"></i>
                <div data-i18n="Account Settings">Cours</div>
              </Link>
              
            </li>
            
            
            
            <li className={actif === "rept" ? "menu-item active":'menu-item'}>
              <Link to="/repetitions" href="j" className="menu-link ">
                <i className="menu-icon tf-icons bx bx-box"></i>
                <div data-i18n="Account Settings">Répétitions</div>
              </Link>
              
            </li>
            
            <li className={actif === "livres" ? "menu-item active":'menu-item'}>
              <Link to="/livres" href="j" className="menu-link ">
                <i className="menu-icon tf-icons bx bx-collection"></i>
                <div data-i18n="Account Settings">Livres</div>
              </Link>
            </li>
            <li className={actif === "exos" ? "menu-item active":'menu-item'}>
              <Link to="/exercices"  className="menu-link">
                <i className="menu-icon tf-icons bx bx-bar-chart"></i>
                <div data-i18n="Authentications">Exercices</div>
              </Link>
              
            </li>
            <li className={actif === "qr" ? "menu-item active":'menu-item'}>
              <Link to="/question-reponse"  className="menu-link">
                <i className="menu-icon tf-icons bx bx-message-rounded-dots"></i>
                <div data-i18n="Authentications">Questions/Reponses</div>
              </Link>
              
            </li>
            <li className={actif === "forum" ? "menu-item active":'menu-item'} onClick={(e)=>{
              e.stopPropagation();
              e.target.classList.toggle('open')
            }}>
              <a  className="menu-link menu-toggle" style={{cursor:"pointer"}} onClick={(e)=>{
                 e.currentTarget.parentElement.classList.toggle('open')
              }}>
                <i className="menu-icon tf-icons bx bx-cube-alt"></i>
                <div data-i18n="Forum">Forum</div>
              </a>
              <ul className="menu-sub">
                <li className="menu-item">
                  <Link to={"/forums/national"}  className="menu-link">
                    <div data-i18n="Error">National</div>
                  </Link>
                </li>
                <li className="menu-item">
                  <Link to={"/forums/international"}  className="menu-link">
                    <div data-i18n="Under Maintenance">International</div>
                  </Link>
                </li>
              </ul>
            </li>
            
            <li className="menu-header small text-uppercase">
              <span className="menu-header-text">Abonnements</span>
            </li>

            <li className={actif === "abon" ? "menu-item active":'menu-item'}>
              <Link to="/mon_abonnement" href="cards-basic.html" className="menu-link">
                <i className="menu-icon tf-icons bx bx-crown"></i>
                <div data-i18n="Basic">Mon abonnement</div>
              </Link>
            </li>
            <li className="menu-header small text-uppercase">
              <span className="menu-header-text">Compte</span>
            </li>

            <li className={actif === "profil" ? "menu-item active":'menu-item'}>
              <Link to="/informations" href="cards-basic.html" className="menu-link">
                <i className="menu-icon tf-icons bx bx-user"></i>
                <div data-i18n="Basic">Mon profil</div>
              </Link>
            </li>
            
          </ul>
          </PerfectScrollbar>
        </aside>

        <div className="layout-page">
          <nav
            className="layout-navbar container-xxl navbar navbar-expand-xl navbar-detached align-items-center bg-navbar-theme"
            id="layout-navbar"
          >
            <div className="layout-menu-toggle navbar-nav align-items-xl-center me-3 me-xl-0 d-xl-none">
              <a
                className="nav-item nav-link px-0 me-xl-4"
                onClick={(e)=>{
                  document.querySelector("html").classList.toggle("layout-menu-expanded")
              }}
              >
                <i className="bx bx-menu bx-sm"></i>
              </a>
            </div>

            <div
              className="navbar-nav-right d-flex align-items-center"
              id="navbar-collapse"
            >
              <div className="navbar-nav align-items-center">
                <div className="nav-item d-flex align-items-center">
                  <i className="bx bx-search fs-4 lh-0"></i>
                  <input
                    type="text"
                    className="form-control border-0 shadow-none"
                    placeholder="Rechercher..."
                    aria-label="Rechercher..."
                  />
                </div>
              </div>

              <ul className="navbar-nav flex-row align-items-center ms-auto">
                <li className="nav-item lh-1 me-3">
                  <a
                    className="github-button"
                    
                    data-icon="octicon-star"
                    data-size="large"
                    data-show-count="true"
                    aria-label="Star themeselection/sneat-html-admin-template-free on GitHub"
                  >
                    {user.surname +" "+ user.firstname}
                  </a>
                </li>

                <li className="nav-item navbar-dropdown dropdown-user dropdown">
                  <a
                    className="nav-link dropdown-toggle hide-arrow"
                    
                    data-bs-toggle="dropdown"
                  >
                    <div className="avatar avatar-online">
                      <img
                        src="/template/snaet/assets/img/avatars/1.png"
                        className="w-px-40 h-auto rounded-circle"
                      />
                    </div>
                  </a>
                  
                </li>
              </ul>
            </div>
          </nav>
              {children}
         
        </div>
      </div>
    </div>

    <script src="/template/snaet/assets/js/main.js"></script>

    </>
  )
}

export default LayoutStudent