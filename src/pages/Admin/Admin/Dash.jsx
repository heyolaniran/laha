import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Dash = () => {
  

  return (
    <>
      <div className="layout-wrapper layout-content-navbar">
        <div className="layout-container">
          <aside
            id="layout-menu"
            className="layout-menu menu-vertical menu bg-menu-theme"
          >
            <div className="app-brand demo">
              <a href="index.html" className="app-brand-link">
                <span className="app-brand-logo demo">
                  <img src="/template/etrain-master/img/favicon.png" width="50px" alt="" />
                </span>
                <span className=" demo fw-bolder ms-2" style={{color:"#32CD32"}}>
                  GESCO
                </span>
              </a>

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

            <ul className="menu-inner py-1 mt-0">
              <li className="menu-item active">
                <a href="index.html" className="menu-link">
                  <i className="menu-icon tf-icons bx bx-home-circle"></i>
                  <div data-i18n="Analytics">Tableau de bord</div>
                </a>
              </li>

             

            
              <li className="menu-item">
                <a href="j" className="menu-link ">
                  <i className="menu-icon tf-icons bx bx-dock-top"></i>
                  <div data-i18n="Account Settings">Cours</div>
                </a>
                
              </li>
              
              <li className="menu-item">
                <a href="j" className="menu-link ">
                  <i className="menu-icon tf-icons bx bx-box"></i>
                  <div data-i18n="Account Settings">Répétitions</div>
                </a>
                
              </li>
              
              <li className="menu-item">
                <a href="j" className="menu-link ">
                  <i className="menu-icon tf-icons bx bx-collection"></i>
                  <div data-i18n="Account Settings">Livres</div>
                </a>
              </li>
              <li className="menu-item">
                <a  className="menu-link">
                  <i className="menu-icon tf-icons bx bx-bar-chart"></i>
                  <div data-i18n="Authentications">Exercices</div>
                </a>
                
              </li>
              <li className="menu-item">
                <a  className="menu-link">
                  <i className="menu-icon tf-icons bx bx-cube-alt"></i>
                  <div data-i18n="Forum">Forums</div>
                </a>
                
              </li>
              <li className="menu-header small text-uppercase">
                <span className="menu-header-text">Abonnements</span>
              </li>

              <li className="menu-item">
                <a href="cards-basic.html" className="menu-link">
                  <i className="menu-icon tf-icons bx bx-crown"></i>
                  <div data-i18n="Basic">Mon abonnement</div>
                </a>
              </li>
              <li className="menu-header small text-uppercase">
                <span className="menu-header-text">Compte</span>
              </li>

              <li className="menu-item">
                <a href="cards-basic.html" className="menu-link">
                  <i className="menu-icon tf-icons bx bx-user"></i>
                  <div data-i18n="Basic">Mon profil</div>
                </a>
              </li>
              
            </ul>
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
                      {localStorage.getItem('firstname')+" "+localStorage.getItem("lastname")}
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

           
          </div>
        </div>
      </div>

      <script src="/template/snaet/assets/vendor/libs/jquery/jquery.js"></script>
      <script src="/template/snaet/assets/vendor/libs/popper/popper.js"></script>
      <script src="/template/snaet/assets/vendor/js/bootstrap.js"></script>
      <script src="/template/snaet/assets/vendor/libs/perfect-scrollbar/perfect-scrollbar.js"></script>
    </>
  );
};

export default Dash;
