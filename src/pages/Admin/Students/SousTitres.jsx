import axios from "axios";
import { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import LayoutStudent from "../../../layouts/Admin/Student/Layout";
import { useDispatch, useSelector } from "react-redux";
import { getSousTitre } from "../../../reducers/modules/SousTitre/list";
import { getCour } from "../../../reducers/modules/Cour/list";
import { findById } from "../../../utils";

const SousTitres = () => {

  const [nextLevel, setNextLevel] = useState("medium")

  const [actuQuiz, setActuQuiz] = useState({})
  const [levelQuiz, setLevelQuiz] = useState("difficult")
   const navigator = useNavigate();
  const { id, sous_titre } = useParams();

  const [loading, setLoading] = useState(false);
  const [check, setCheck] = useState(false);
  const [resultForm, setResultForm] = useState(false);
  const [modal, setModal] = useState(false)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getSousTitre(sous_titre))
    dispatch(getCour(id))
    showQuizState()
  }, [sous_titre]);
 
  

  const sendQcm = async () => {
    
    // setLoading(true);
    // await new Promise((resolve) => setTimeout(resolve, 3000));
    // setCheck(true);

    // setResultForm(Boolean(Math.round(Math.random())));
    // setLoading(false);
  };
  const {items,isLoading} = useSelector((state)=> state.sousTitres.list)
  const courReduce = useSelector((state)=> state.cours.list)
  const sousTitre =  items;


  const showQuizState = ()=>{
    const quiz = items.qcm.find((ss)=>ss.level === levelQuiz);
    
    if(quiz !== undefined){
      
      setActuQuiz(quiz)
    }else{
      setModal(false)
    }
    
  }

  return (
    <LayoutStudent actif="cours">
      {!isLoading ?(
        <div className="container-xxl flex-grow-1 container-p-y">
        <h4 className="fw-bold py-3 mb-4">
          <Link to="/cours">
            <span className="text-muted fw-light"> Cours / </span>
          </Link>
          <Link to={"/cours/" + courReduce.items.id}>
            <span className="text-muted fw-light"> {courReduce.items.titre} / </span>
          </Link>
          {sousTitre.titre}
        </h4>
        <div className="row">
          <div className="col-12 col-sm-9 ">
            <div className="row">
              <h1 className="text-muted mb-2">
                {courReduce.items.titre} - {sousTitre.titre}
              </h1>

              <div className="col-md-12">
                <div className="card">
                  <div className="card-body">
                    <iframe
                      width="100%"
                      height="450"
                      style={{ borderRadius: "15px" }}
                      src="https://www.youtube.com/embed/DH6zu21OdBQ"
                      title="YouTube video player"
                      frameborder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowfullscreen
                    ></iframe>
                  </div>
                </div>
              </div>
            </div>

            <div className="row mt-3">
              <div className="col-md-12">
                <div className="card">
                  <h1 className="text-muted mb-2 mx-3 my-4">
                    {sousTitre.titre}
                  </h1>

                  <div className="card-body">{sousTitre.description}</div>
                  <div className="card-footer"></div>
                </div>
              </div>
            </div>
            <div className="row mt-4">
              <div className="col-lg-12">
                <div className="demo-inline-spacing">
                  <nav aria-label="Page navigation">
                    <ul className="pagination justify-content-end">
                      <li className="page-item next active ">
                        <span
                         
                          className="page-link px-5 py-3 cursor-pointer"
                          href="javascript:void(0);"
                          onClick={(e)=>{
                            setModal(true)
                          }}
                        >
                          <span style={{ fontSize: "20px" }}>
                            <b>Suivant</b>
                            <i
                              className="tf-icon bx bx-chevrons-right"
                              style={{ fontSize: "20px" }}
                            ></i>
                          </span>
                        </span>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
          </div>
          <div className=" col-12 col-sm-3 d-none d-sm-block mt-5">
            <div className="row">
              <div className="col-xl-12 card">
                <h2 className="text-muted my-3 mx-3">Sous Titres</h2>
                <div className="nav-align-top mb-4">
                  {/* {findById(items,courReduce.items.sous_titres[0])?.titre} */}
                  <hr />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="modal "
          id="modalScrollable"
          tabindex="-1"
          aria-hidden="true"
          style={{ display: modal?'block': "none", backgroundColor: "#00000064" }}
        >
          <div
            className="modal-dialog modal-dialog-scrollable"
            role="document"
          >
            <div className="modal-content">
              <div className="modal-header">
                <h3 className="modal-title" id="modalScrollableTitle">
                  QCM
                  <br />
                </h3>

                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                  onClick={(e)=>{
                    setModal(false)
                  }}
                ></button>
              </div>
              <div className="modal-body">
                <p className="mb-3">
                  {check ? (
                    resultForm ? (
                      <b>
                      Félicitation 
                    </b>
                    ):(
                      <b>Oups ...</b>
                    )
                    
                  ) : (loading?( <b>Vérification en cour</b>):(<b>Répondez correctement aux questions pour suivre le reste du cour </b>))}
                </p>

                {check ? (
                  resultForm ? (
                    <div className="alert alert-success" role="alert">
                      Super, Vous avez eu  <b>80%</b> de bonne reponse 
                    </div>
                  ) : (
                    <div className="alert alert-danger" role="alert">
                      Oups essayez de reprendre,Vous n'avez pas validé le teste
                    </div>
                  )
                ) : loading ? (
                  <div
                    className="my-5"
                    style={{ justifyContent: "center", display: "flex" }}
                  >
                    <div
                      className="spinner-grow text-primary"
                      style={{ width: "60px", height: "60px" }}
                      role="status"
                    >
                      <span className="visually-hidden">Loading...</span>
                    </div>
                  </div>
                ) : (
                    <>
                    <u className="mb-5">Question {actuQuiz.level}:</u>
              
                      <b> {actuQuiz.quiz}</b>
                      <div className="mt-2">
                        <div className="row mt-2 mb-4">
                        {actuQuiz.proposition && (actuQuiz.proposition.map((pop,index) => {
                            return (
                              <>
                                <div className="col-lg-1">
                                  <input type="radio" id={"dd"+index} name={"dd"+index}/>
                                </div>
                                <div className="col-lg-5" htmlFor={'dd'+index}>{pop}</div>
                              </>
                            );
                          }))}
                        </div>
                      </div>
                    </>
                  
                )}
              </div>
              <div className="modal-footer">
                {(check && <button
                  type="button"
                  className="btn btn-outline-secondary"
                  data-bs-dismiss="modal"
                  onClick={(e)=>{
                    setModal(false)
                    window.open(window.location.href+'/details','target')
                  }}
                >
                  Details resultat
                </button>)}
               { (check? (resultForm ?(<button
                  type="button"
                  className="btn  btn-outline-success"
                  onClick={(e) => {
                    setModal(false);
                    setCheck(false);
                    setLoading(false)
                    setResultForm(false);
                    navigator("/cours/2/sous_titres/3")
                  }}
                >
                  <b>Suivant</b>
                </button>):(<button
                  type="button"
                  className="btn  btn-secondary"
                  onClick={(e) => {
                    setCheck(false);
                    setLoading(false)
                  }}
                >
                  <b>Reprendre</b>
                </button>)):(loading?(<></>):(<button
                  type="button"
                  className="btn  btn-outline-primary"
                  onClick={(e) => sendQcm()}
                >
                  <b>Vérifier</b>
                </button>)))}
                
              </div>
            </div>
          </div>
        </div>
      </div>
      ):(<>Loading</>)}
    </LayoutStudent>
  );
};

export default SousTitres;
