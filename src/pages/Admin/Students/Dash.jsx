import React from 'react'
import LayoutStudent from '../../../layouts/Admin/Student/Layout'
import { useSelector } from 'react-redux'

const DashStudent = () => {
  const {user} = useSelector(state  => state.auth)
  return (
    <LayoutStudent >
    <div className="content-wrapper">
    <div className="container-xxl flex-grow-1 container-p-y">
      <div className="row">
        <div className="col-lg-8 mb-4 order-0">
          <div className="card">
            <div className="d-flex align-items-end row">
              <div className="col-sm-7">
                <div className="card-body">
                  <h5 className="card-title text-primary">
                    Congratulations {user.surname} 🎉
                  </h5>
                  <p className="mb-4">
                   Vous avez termine  <span className="fw-bold">72%</span>
                    des exercices de la journées.
                  </p>

                  <a
                    
                    className="btn btn-sm btn-outline-primary"
                  >
                    Voir mon Badge
                  </a>
                </div>
              </div>
              <div className="col-sm-5 text-center text-sm-left">
                <div className="card-body pb-0 px-0 px-md-4">
                  <img
                    src="/template/etrain-master/img/books (2).svg"
                    height="140"
                    alt="View Badge User"
                    data-app-dark-img="illustrations/man-with-laptop-dark.png"
                    data-app-light-img="illustrations/man-with-laptop-light.png"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-4 order-1">
          <div className="row">
            <div className="col-lg-6 col-md-12 col-6 mb-4">
              <div className="card">
                <div className="card-body">
                  <div className="card-title d-flex align-items-start justify-content-between">
                    <div className="avatar flex-shrink-0">
                      <img
                        src="/template/snaet/assets/img/icons/unicons/chart-success.png"
                        alt="chart success"
                        className="rounded"
                      />
                    </div>
                    <div className="dropdown">
                      <button
                        className="btn p-0"
                        type="button"
                        id="cardOpt3"
                        data-bs-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        <i className="bx bx-dots-vertical-rounded"></i>
                      </button>
                      <div
                        className="dropdown-menu dropdown-menu-end"
                        aria-labelledby="cardOpt3"
                      >
                        <a
                          className="dropdown-item"
                          
                        >
                          View More
                        </a>
                        <a
                          className="dropdown-item"
                          
                        >
                          Delete
                        </a>
                      </div>
                    </div>
                  </div>
                  <span className="fw-semibold d-block mb-1">
                    Cours
                  </span>
                  <h3 className="card-title mb-2">10</h3>
                  <small className="text-success fw-semibold">
                  <i className="bx bx-up-arrow-alt"></i> sur 90

                    {/* <i className="bx bx-up-arrow-alt"></i> 0.3 % qu'hier */}
                  </small>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-12 col-6 mb-4">
              <div className="card">
                <div className="card-body">
                  <div className="card-title d-flex align-items-start justify-content-between">
                    <div className="avatar flex-shrink-0">
                      <img
                        src="/template/snaet/assets/img/icons/unicons/wallet-info.png"
                        alt="Credit Card"
                        className="rounded"
                      />
                    </div>
                    <div className="dropdown">
                      <button
                        className="btn p-0"
                        type="button"
                        id="cardOpt6"
                        data-bs-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        <i className="bx bx-dots-vertical-rounded"></i>
                      </button>
                      <div
                        className="dropdown-menu dropdown-menu-end"
                        aria-labelledby="cardOpt6"
                      >
                        <a
                          className="dropdown-item"
                          
                        >
                          View More
                        </a>
                        <a
                          className="dropdown-item"
                          
                        >
                          Delete
                        </a>
                      </div>
                    </div>
                  </div>
                  <span>Livres</span>
                  <h3 className="card-title text-nowrap mb-1">
                    72
                  </h3>
                  <small className="text-success fw-semibold">
                    <i className="bx bx-up-arrow-alt"></i> sur 268
                  </small>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-12 col-lg-8 order-2 order-md-3 order-lg-2 mb-4">
        <div className="card">
      <h5 className="card-header">Vos Professeurs</h5>
      <div className="table-responsive text-nowrap">
        <table className="table table-borderless">
          <thead>
            <tr>
              <th>Matiere</th>
              <th>Nom</th>
              <th>Photo</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><i className="fab fa-angular fa-lg text-danger me-3"></i> <strong>Anglais</strong></td>
              <td>Albert Cook</td>
              <td>
                <ul className="list-unstyled users-list m-0 avatar-group d-flex align-items-center">
                  <li
                    data-bs-toggle="tooltip"
                    data-popup="tooltip-custom"
                    data-bs-placement="top"
                    className="avatar avatar-xs pull-up"
                    title="Lilian Fuller"
                  >
                    <img src="/template/snaet/assets/img/avatars/5.png" alt="Avatar" className="rounded-circle" />
                  </li>
              
                </ul>
              </td>
              <td><span className="badge bg-label-primary me-1">En ligne</span></td>
             
            </tr>
            <tr>
              <td><i className="fab fa-react fa-lg text-info me-3"></i> <strong>SVT</strong></td>
              <td>Barry Hunter</td>
              <td>
                <ul className="list-unstyled users-list m-0 avatar-group d-flex align-items-center">
                  
                  <li
                    data-bs-toggle="tooltip"
                    data-popup="tooltip-custom"
                    data-bs-placement="top"
                    className="avatar avatar-xs pull-up"
                    title="Sophia Wilkerson"
                  >
                    <img src="/template/snaet/assets/img/avatars/6.png" alt="Avatar" className="rounded-circle" />
                  </li>
                 
                </ul>
              </td>
              <td><span className="badge bg-label-success me-1">2 min</span></td>
              
            </tr>
            <tr>
              <td><i className="fab fa-vuejs fa-lg text-success me-3"></i> <strong>Physique</strong></td>
              <td>Trevor Baker</td>
              <td>
                <ul className="list-unstyled users-list m-0 avatar-group d-flex align-items-center">
                  
                  
                  <li
                    data-bs-toggle="tooltip"
                    data-popup="tooltip-custom"
                    data-bs-placement="top"
                    className="avatar avatar-xs pull-up"
                    title="Christina Parker"
                  >
                    <img src="/template/snaet/assets/img/avatars/7.png" alt="Avatar" className="rounded-circle" />
                  </li>
                </ul>
              </td>
              <td><span className="badge bg-label-info me-1">il y a 5h</span></td>
              
            </tr>
            <tr>
              <td><i className="fab fa-vuejs fa-lg text-success me-3"></i> <strong>Français</strong></td>
              <td>Trevor Baker</td>
              <td>
                <ul className="list-unstyled users-list m-0 avatar-group d-flex align-items-center">
                  
                  
                  <li
                    data-bs-toggle="tooltip"
                    data-popup="tooltip-custom"
                    data-bs-placement="top"
                    className="avatar avatar-xs pull-up"
                    title="Christina Parker"
                  >
                    <img src="/template/snaet/assets/img/avatars/1.png" alt="Avatar" className="rounded-circle" />
                  </li>
                </ul>
              </td>
              <td><span className="badge bg-label-info me-1">il y a 5h</span></td>
              
            </tr>
            <tr>
              <td><i className="fab fa-vuejs fa-lg text-success me-3"></i> <strong>Mathématique</strong></td>
              <td>Trevor Baker</td>
              <td>
                <ul className="list-unstyled users-list m-0 avatar-group d-flex align-items-center">
                  
                  
                  <li
                    data-bs-toggle="tooltip"
                    data-popup="tooltip-custom"
                    data-bs-placement="top"
                    className="avatar avatar-xs pull-up"
                    title="Christina Parker"
                  >
                    <img src="/template/snaet/assets/img/avatars/7.png" alt="Avatar" className="rounded-circle" />
                  </li>
                </ul>
              </td>
              <td><span className="badge bg-label-info me-1">il y a 5h</span></td>
              
            </tr>
           
          </tbody>
        </table>
      </div>
    </div>
        </div>
        <div className="col-12 col-md-8 col-lg-4 order-3 order-md-2">
          <div className="row">
            <div className="col-6 mb-4">
              <div className="card">
                <div className="card-body">
                  <div className="card-title d-flex align-items-start justify-content-between">
                    <div className="avatar flex-shrink-0">
                      <img
                        src="/template/snaet/assets/img/icons/unicons/paypal.png"
                        alt="Credit Card"
                        className="rounded"
                      />
                    </div>
                    <div className="dropdown">
                      <button
                        className="btn p-0"
                        type="button"
                        id="cardOpt4"
                        data-bs-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        <i className="bx bx-dots-vertical-rounded"></i>
                      </button>
                      <div
                        className="dropdown-menu dropdown-menu-end"
                        aria-labelledby="cardOpt4"
                      >
                        <a
                          className="dropdown-item"
                          
                        >
                          View More
                        </a>
                        <a
                          className="dropdown-item"
                          
                        >
                          Delete
                        </a>
                      </div>
                    </div>
                  </div>
                  <span className="d-block mb-1">Abonnements</span>
                  <h3 className="card-title text-wrap mb-2">
                    10 Déc 
                  </h3>
                  <small className="text-danger fw-semibold">
                    <i className="bx bx-down-arrow-alt"></i> fin dans 25 jours
                  </small>
                </div>
              </div>
            </div>
            <div className="col-6 mb-4">
              <div className="card">
                <div className="card-body">
                  <div className="card-title d-flex align-items-start justify-content-between">
                    <div className="avatar flex-shrink-0">
                      <img
                        src="/template/snaet/assets/img/icons/unicons/cc-primary.png"
                        alt="Credit Card"
                        className="rounded"
                      />
                    </div>
                    <div className="dropdown">
                      <button
                        className="btn p-0"
                        type="button"
                        id="cardOpt1"
                        data-bs-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        <i className="bx bx-dots-vertical-rounded"></i>
                      </button>
                      <div
                        className="dropdown-menu"
                        aria-labelledby="cardOpt1"
                      >
                        <a
                          className="dropdown-item"
                          
                        >
                          View More
                        </a>
                        <a
                          className="dropdown-item"
                          
                        >
                          Delete
                        </a>
                      </div>
                    </div>
                  </div>
                  <span className="fw-semibold d-block mb-1">
                    Exercices
                  </span>
                  <h3 className="card-title mb-2">6</h3>
                  <small className="text-danger fw-semibold">
                    <i className="bx bx-down-arrow-alt"></i> sur 269
                  </small>
                </div>
              </div>
            </div>
            

            
          </div>
        </div>
      </div>
      
    </div>

    <footer className="content-footer footer bg-footer-theme">
      <div className="container-xxl d-flex flex-wrap justify-content-between py-2 flex-md-row flex-column">
        <div className="mb-2 mb-md-0">
          ©<script>document.write(new Date().getFullYear());</script>,
          made with ❤️ by EDUTECH
         
        </div>
   
      </div>
    </footer>

    <div className="content-backdrop fade"></div>
  </div></LayoutStudent>
  )
}

export default DashStudent