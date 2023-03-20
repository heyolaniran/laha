import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import LayoutStudent from "../../../layouts/Admin/Student/Layout";

const MesRepetitions = () => {
  useEffect(() => {
    getAllRepts();
  }, [""]);
  const [allRept, setAllRept] = useState([]);
  const getAllRepts = async () => {
    await axios.get("/db/repetitions.json").then(({ data }) => {
      setAllRept(data);
    });
  };
  const myAlert = withReactContent(Swal);
  const [tab, setTab] = useState(1);
  const [type, setType] = useState(0);
  const [address, setAddress] = useState("")
  return (
    <LayoutStudent actif="rept">
      <div className="container-xxl flex-grow-1 container-p-y">
        <h4 className="fw-bold py-3 mb-4">
          <span className="text-muted fw-light">Dashboard /</span> Répétitions
        </h4>

        <div className="row">
          <div className="col-md-12">
            <div className="col-xl-12">
              <div className="nav-align-top mb-4">
                <ul className="nav nav-pills mb-3" role="tablist">
                  <li className="nav-item">
                    <button
                      type="button"
                      className={tab == 1 ? "nav-link active" : "nav-link "}
                      role="tab"
                      data-bs-toggle="tab"
                      data-bs-target="#navs-pills-top-home"
                      aria-controls="navs-pills-top-home"
                      aria-selected="true"
                      onClick={() => {
                        setTab(1);
                      }}
                    >
                      Mes Répétitions
                    </button>
                  </li>
                  <li className="nav-item">
                    <button
                      type="button"
                      className={tab == 4 ? "nav-link active" : "nav-link "}
                      role="tab"
                      data-bs-toggle="tab"
                      data-bs-target="#navs-pills-top-messages"
                      aria-controls="navs-pills-top-messages"
                      aria-selected="false"
                      onClick={() => {
                        setTab(4);
                      }}
                    >
                      Enregistrer une demande
                    </button>
                  </li>

                  <li className="nav-item">
                    <button
                      type="button"
                      className={tab == 3 ? "nav-link active" : "nav-link "}
                      role="tab"
                      data-bs-toggle="tab"
                      data-bs-target="#navs-pills-top-messages"
                      aria-controls="navs-pills-top-messages"
                      aria-selected="false"
                      onClick={() => {
                        setTab(3);
                      }}
                    >
                      Rejoindre une demande
                    </button>
                  </li>
                  <li className="nav-item">
                    <button
                      type="button"
                      className={tab == 2 ? "nav-link active" : "nav-link "}
                      role="tab"
                      data-bs-toggle="tab"
                      data-bs-target="#navs-pills-top-profile"
                      aria-controls="navs-pills-top-profile"
                      aria-selected="false"
                      onClick={() => {
                        setTab(2);
                      }}
                    >
                      Alertes
                    </button>
                  </li>
                </ul>
                <div className="tab-content">
                  <div
                    className={
                      tab == 1 ? "tab-pane fade show active" : "tab-pane fade"
                    }
                    id="navs-pills-top-home"
                    role="tabpanel"
                  >
                    <div className="table-responsive text-nowrap">
                      <table className="table table-hover">
                        <thead>
                          <tr>
                            <th>Matieres</th>
                            <th>Resumer</th>
                            <th>Type</th>
                            <th>Lien Zoom</th>
                            <th>Professeurs</th>
                            <th>Horaires</th>
                          </tr>
                        </thead>
                        <tbody className="table-border-bottom-0">
                          {allRept.map((rept) => {
                            return (
                              <tr>
                                <td>
                                  <i className="fab fa-angular fa-lg text-danger me-3"></i>
                                  <strong>{rept.matiere}</strong>
                                </td>
                                <td>
                                  <p>
                                    {rept.resumer
                                      .split(" ")
                                      .slice(0, 5)
                                      .join(" ") + "..."}
                                  </p>
                                </td>

                                <td>
                                  <span className="badge bg-label-primary me-1">
                                    En ligne
                                  </span>
                                </td>
                                <td>{rept.link_zoom}</td>
                                <td>
                                  <ul className="list-unstyled users-list m-0 avatar-group d-flex align-items-center">
                                    <li
                                      data-bs-toggle="tooltip"
                                      data-popup="tooltip-custom"
                                      data-bs-placement="top"
                                      className="avatar avatar-xs pull-up"
                                      title="Lilian Fuller"
                                    >
                                      <img
                                        src="/template/snaet/assets/img/avatars/5.png"
                                        alt="Avatar"
                                        className="rounded-circle"
                                      />
                                      {rept.auteur}
                                    </li>
                                  </ul>
                                </td>
                                <td>{rept.days + " de " + rept.hours}</td>
                              </tr>
                            );
                          })}
                        </tbody>
                      </table>
                    </div>
                  </div>
                  <div
                    className={
                      tab == 2 ? "tab-pane fade show active" : "tab-pane fade"
                    }
                    id="navs-pills-top-home"
                    role="tabpanel"
                  >
                    <div
                      className="col-12"
                      style={{ display: "flex", justifyContent: "center" }}
                    >
                      <h4 className="text-muted mb-2">
                        Aucune  notification
                      </h4>
                    </div>
                  </div>
                  <div
                    className={
                      tab == 3 ? "tab-pane fade show active" : "tab-pane fade"
                    }
                    id="navs-pills-top-home"
                    role="tabpanel"
                  >
                    <div className="table-responsive text-nowrap">
                      <table className="table table-hover">
                        <thead>
                          <tr>
                            <th>Matieres</th>
                            <th>Type</th>
                            <th>Adresse</th>
                            <th>Horaires</th>
                            <th>Participant</th>
                            <th>Participer</th>
                          </tr>
                        </thead>
                        <tbody className="table-border-bottom-0">
                          {allRept.map((rept, index) => {
                            if (index < 4) {
                              return;
                            }
                            return (
                              <tr>
                                <td>
                                  <i className="fab fa-angular fa-lg text-danger me-3"></i>
                                  <strong>{rept.matiere}</strong>
                                </td>

                                <td>Présentiel</td>
                                <td>Bénin, Agla Hlazounto</td>

                                <td>{rept.days + " de " + rept.hours}</td>
                                <td>
                                  <span className="badge bg-label-primary me-1">
                                    3/5 eleves
                                  </span>
                                </td>
                                <td>
                                  <a href="#" onClick={(e)=>{
                                    myAlert.fire("","Votre demande de participation  a été soumise","success",)
                                  }}>Participer</a>
                                </td>
                              </tr>
                            );
                          })}
                        </tbody>
                      </table>
                    </div>
                  </div>

                  <div
                    className={
                      tab == 4 ? "tab-pane fade show active" : "tab-pane fade"
                    }
                    id="navs-pills-top-home"
                    role="tabpanel"
                  >
                    <div
                      className="col-12"
                      style={{ display: "flex",  }}
                    >
                    
                        <form action="" className=" offset-1 col-lg-8">
                       
                        <h6 className="text-muted mb-4">
                             Formulaire de demande de repetition
                        </h6>
                          <div className="row form-group">

                            <h5 htmlFor="">Type de répétition</h5>
                            <select name="" id="" className="form-control" onChange={(e)=> setType(e.target.value)} >
                              <option value="0">Cour en ligne</option>
                              <option value="1"> Cour à domicile</option>
                            </select>
                          </div>
                          <div className="row form-group mt-4">

                            <h5 htmlFor="">Matieres</h5>
                            <div className="col-lg-3" style={{display:"flex"}}><input type="checkbox" /> <span style={{color:"black",fontSize:"18px",paddingLeft:"15px"}}>Physique</span></div>
                            <div className="col-lg-3" style={{display:"flex"}}><input type="checkbox" /> <span style={{color:"black",fontSize:"18px",paddingLeft:"15px"}}>Math</span></div>
                            <div className="col-lg-3" style={{display:"flex"}}><input type="checkbox" /> <span style={{color:"black",fontSize:"18px",paddingLeft:"15px"}}>Hist-Géo</span></div>
                            <div className="col-lg-3" style={{display:"flex"}}><input type="checkbox" /> <span style={{color:"black",fontSize:"18px",paddingLeft:"15px"}}>Anglais</span></div>
                             
                          </div>
                          <div className="row form-group mt-3">

                            <h5 htmlFor="">Nombre d'etudiant</h5>
                            <select name="" id="" className="form-control">
                              <option value="0">1</option>
                              <option value="1"> 3</option>
                              <option value="1"> 5</option>
                            </select>
                          </div>
                          {type == 1 && (
                          <div className="row form-group mt-3">

                            <h5 htmlFor="">Votre adresse</h5>
                            <textarea name="" id="" className="form-control">
                            
                            </textarea>
                          </div>)}

                          <div className="btn btn-outline-primary col-lg-8 my-4"  onClick={(e)=>{
                            let typeF = type == 0 ? "cour en  ligne":'cour à domicile'
                            myAlert.fire("Super","Votre demande de "+typeF+" à été soumise avec succes (NB:Une fois confirmer vous serez notifier)","success",)
                          }}>Soumettre</div>
                        </form>
                     
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </LayoutStudent>
  );
};

export default MesRepetitions;
