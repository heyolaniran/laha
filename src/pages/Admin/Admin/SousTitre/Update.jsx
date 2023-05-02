import { useEffect, useState } from "react";
import LayoutAdmin from "../../../../layouts/Admin/Admin/Layouts";

import { updateSousTitre } from "../../../../reducers/modules/SousTitre/update";
import { useDispatch, useSelector } from "react-redux";
import { Tooltip } from "react-tooltip";
import { Link, useNavigate, useParams } from "react-router-dom";
import moment from "moment";
import FileBase64 from "react-file-base64";
import { getUsers, resetUsers } from "../../../../reducers/modules/User/list";
import { getSousTitre } from "../../../../reducers/modules/SousTitre/list";

const UpdateSousTitreAdmin = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
//   const [sousTitreForm, setSousTitreForm] = useState({});
  const navigate = useNavigate();
  useEffect(() => {
    dispatch(getSousTitre(id))
    dispatch(getUsers());

    return () => {
      dispatch(resetUsers);
    };
  }, [""]);

  const userReduce = useSelector((state) => state.users.list);
  const authReduce = useSelector((state) => state.auth);
  const {isLoading,items} = useSelector((state) => state.sousTitres.list);

  useEffect(() => {
    
  setSousTitreForm(items)
  }, [items])
  

  const handleSubmit = async (e) => {
    e.preventDefault();
    const itemsForm ={
        ...sousTitreForm,
        qcm:sousTitreForm.isQcm ?sousTitreForm.qcm:[],
        userId:sousTitreForm.isUser ? authReduce.user.id :sousTitreForm.userId,
    }
    
    await dispatch(updateSousTitre(itemsForm));
    navigate("/admin/sous_titres/" + id );
  };
  const [sousTitreForm, setSousTitreForm] = useState({})

  return (
    <LayoutAdmin actif="cours">
      {!isLoading ?<div className="container-xxl flex-grow-1 container-p-y">
        <h4 className="fw-bold py-3 mb-4">
          <span className="text-muted fw-light">Dashboard / </span>
          <Link to={"/admin/cours/" + id + "/sous_titres"}>
            <span className="text-muted fw-light"> SousTitres / </span>
          </Link>
          Enregistrement
        </h4>

        <div className="row">
          <div className="col-lg-12">
            <div className="card">
              <div className="card-body">
                <>
                  <div className="row">
                    <div className="col-12">
                      <div className="divider">
                        <div className="divider-text">
                          Formulaire d'enregistrement d'un sous-titre
                        </div>
                      </div>
                      <form onSubmit={handleSubmit}>
                        <div
                          className="my-2"
                          style={{
                            display: "flex",
                            justifyContent: "space-between",
                          }}
                        >
                          <h5>Etes-vous l'auteur de ce sous-titres</h5>
                          <div className="d-flex">
                            <label
                              class="mx-1"
                              htmlFor="flexSwitchCheckDefault"
                            >
                              Non
                            </label>
                            <div class="form-check form-switch mb-2 ">
                              <input
                                class="form-check-input"
                                type="checkbox"
                                id="flexSwitchCheckDefault"
                                checked={sousTitreForm.isUser}
                                onChange={(e) => {
                                  setSousTitreForm({
                                    ...sousTitreForm,
                                    isUser: e.target.checked,
                                  });
                                }}
                              />
                              <label
                                class="form-check-label"
                                htmlFor="flexSwitchCheckDefault"
                              >
                                Oui
                              </label>
                            </div>
                          </div>
                        </div>
                        {!sousTitreForm.isUser && (
                          <div className="row my-2">
                            <div className="col-12">
                              <label htmlFor="">Auteur</label>
                              <select
                                type="text"
                                className="form-control"
                                placeholder="Auteur du sous titre "
                                required
                                value={sousTitreForm.userId}
                                onChange={(e) =>
                                  setSousTitreForm({
                                    ...sousTitreForm,
                                    userId: e.target.value,
                                  })
                                }
                              >
                                <option value="" selected disabled></option>
                                {userReduce?.items.map((s) => {
                                  return (
                                    <option value={s.id}>
                                      {s.surname} {s.firstname}
                                    </option>
                                  );
                                })}
                              </select>
                            </div>
                          </div>
                        )}
                        <div className="row my-2">
                          <div className="col-12">
                            <label htmlFor="">Titre</label>
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Titre du cour"
                              required
                              value={sousTitreForm.titre}
                              onChange={(e) =>
                                setSousTitreForm({
                                  ...sousTitreForm,
                                  titre: e.target.value,
                                })
                              }
                            />
                          </div>
                        </div>
                        <div className="row my-2">
                          <div className="col-12">
                            <label htmlFor="">Présentation du cour</label>
                            <textarea
                              className="form-control"
                              type="text"
                              rows={10}
                              required
                              value={sousTitreForm.description}
                              onChange={(e) =>
                                setSousTitreForm({
                                  ...sousTitreForm,
                                  description: e.target.value,
                                })
                              }
                            ></textarea>
                          </div>
                        </div>
                        <div className="row my-2">
                          <div className="col-12">
                            <label htmlFor="">Image ou Vidéo</label> <br />
                            <FileBase64
                              multiple={false}
                              onDone={({ base64 }) => {
                                setSousTitreForm({
                                  ...sousTitreForm,
                                  picture: base64,
                                });
                              }}
                            />
                          </div>
                        </div>
                        <div
                          className="my-4"
                          style={{
                            display: "flex",
                            justifyContent: "space-between",
                          }}
                        >
                          <h5>
                            Pour valider ce sous-titre aura t'il à repondre à un
                            qcm?
                          </h5>
                          <div className="d-flex">
                            <label
                              class="mx-1"
                              htmlFor="flexSwitchCheckDefault"
                            >
                              Non
                            </label>
                            <div class="form-check form-switch mb-2 ">
                              <input
                                class="form-check-input"
                                type="checkbox"
                                id="flexSwitchCheckDefault"
                                checked={sousTitreForm.isQcm}
                                onChange={(e) => {
                                  setSousTitreForm({
                                    ...sousTitreForm,
                                    qcm:sousTitreForm.qcm?.length ==0 ? [{id:1,question:"",explication:"",propositions:[{id:1,reponse:"",isgood:true},{id:2,reponse:"",isgood:false},{id:3,reponse:"",isgood:false},{id:4,reponse:"",isgood:false}]}]:sousTitreForm.qcm,
                                    isQcm: e.target.checked,
                                  });
                                }}
                              />
                              <label
                                class="form-check-label"
                                htmlFor="flexSwitchCheckDefault"
                              >
                                Oui
                              </label>
                            </div>
                          </div>
                        </div>
                        {sousTitreForm.isQcm && sousTitreForm.qcm.map((qcm,index)=>{
                            return  <div className="row my-2">
                            <div className="divider">
                              <div className="divider-text">
                                <b>Question n°{index+1}</b>
                              </div>
                            </div>
                            {index > 0 && <div className="d-flex" style={{justifyContent:"flex-end"}}>
                                <span  style={{color:"red"}} className="cursor-pointer" onClick={(e)=>{
                                    e.preventDefault();
                                    const qcm_r = sousTitreForm.qcm;
                                    qcm_r.splice(index,1)
                                    setSousTitreForm({...sousTitreForm,qcm:qcm_r})
                                }}>- Retirer cette question</span>
                            </div>}
                            <div className="col-12">
                              <div className="form-group">
                                <label htmlFor="">Question</label>
                                <textarea
                                  type="text"
                                  className="form-control"
                                  placeholder="Entrer la question"
                                  value={qcm.question}
                                  required
                                  onChange={(e)=>{
                                    const qcm_r = sousTitreForm.qcm;
                                    let filtreSousTitre = qcm_r[index]
                                    qcm_r.splice(index,1,{...filtreSousTitre,question:e.target.value})
                                    setSousTitreForm({...sousTitreForm,qcm:qcm_r})
                                  }}
                                ></textarea>
                              </div>
                            </div>
                            <div className="col-12 my-2">
                              <div className="form-group">
                                <label htmlFor="">Explication (En cas de bonne reponses)</label>
                                <textarea
                                  type="text"
                                  className="form-control"
                                  placeholder="Message de bonne reponse"
                                  value={qcm.explication}
                                  onChange={(e)=>{
                                    const qcm_r = sousTitreForm.qcm;
                                    let filtreSousTitre = qcm_r[index]
                                    qcm_r.splice(index,1,{...filtreSousTitre,explication:e.target.value})
                                    setSousTitreForm({...sousTitreForm,qcm:qcm_r})
                                  }}
                                ></textarea>
                              </div>
                            </div>
                            <div className="col-12 ">
                            <span>Propositions de reponse</span>
                              <div
                                className="row items-center"
                                style={{ alignItems: "center" }}
                              >
                                <div className="table-responsive text-nowrap my-2">
                                  <table className="table table-hover">
                                    <thead>
                                      <tr>
                                        <th>N°</th>
                                        <th>Proposition</th>
                                        <th>Bonne reponse ?</th>
                                        <th colSpan={2}>Supprimer</th>
                                      </tr>
                                    </thead>
                                    <tbody>
                                     {qcm.propositions.map((propo,jndex)=>{
                                        return  (<><tr>
                                        <td>#{jndex+1}</td>
                                        <td>
                                          <textarea
                                            name=""
                                            id=""
                                            cols="30"
                                            rows="1"
                                            required
                                            value={propo.reponse}
                                            onChange={(e) => {
                                                const propo_r = qcm.propositions;
                                                let proproFiltre = propo_r[jndex]
                                            propo_r.splice(jndex,1,{...proproFiltre,reponse:e.target.value})
                                            const qcm_r = sousTitreForm.qcm;
                                            let filtreSousTitre = qcm_r[index]
                                            qcm_r.splice(index,1,{...filtreSousTitre,propositions:propo_r})
                                            setSousTitreForm({...sousTitreForm,qcm:qcm_r})
                                            }}
                                            className="form-control"
                                          ></textarea>
                                        </td>
                                        <td>
                                          <div className="d-flex">
                                            <label
                                              class="mx-1"
                                              htmlFor="flexSwitchCheckDefault"
                                            >
                                              Non
                                            </label>
                                            <div class="form-check form-switch mb-2 ">
                                              <input
                                                class="form-check-input"
                                                type="checkbox"
                                                id="flexSwitchCheckDefault"
                                                checked={propo.isgood}
                                                onChange={(e) => {
                                                    const propo_r = qcm.propositions;
                                                    let proproFiltre = propo_r[jndex]
                                                propo_r.splice(jndex,1,{...proproFiltre,isgood:e.target.checked})
                                                const qcm_r = sousTitreForm.qcm;
                                                let filtreSousTitre = qcm_r[index]
                                                qcm_r.splice(index,1,{...filtreSousTitre,propositions:propo_r})
                                                setSousTitreForm({...sousTitreForm,qcm:qcm_r})
                                                }}
                                              />
                                              <label
                                                class="form-check-label"
                                                htmlFor="flexSwitchCheckDefault"
                                              >
                                                Oui
                                              </label>
                                            </div>
                                          </div>
                                        </td>
                                        <td>
                                          <div
                                            className="mx-1 cursor-pointer my-tooltip my-2"
                                            onClick={(e) => {
                                              e.preventDefault();
                                              if(qcm.propositions.length >2){
                                                const propo_r = qcm.propositions;
                                                propo_r.splice(jndex,1)
                                                const qcm_r = sousTitreForm.qcm;
                                                let filtreSousTitre = qcm_r[index]
                                                qcm_r.splice(index,1,{...filtreSousTitre,propositions:propo_r})
                                                setSousTitreForm({...sousTitreForm,qcm:qcm_r})
                                              }else{
                                                alert("Minimum 2 questions")
                                              }
                                            }}
                                            data-tooltip-content="Retirer cette proposition"
                                            style={{
                                              padding: "5px 8px",
                                              borderRadius: "10px",
                                              backgroundColor: "#ff00001f",
                                              maxWidth: "min-content",
                                            }}
                                          >
                                            <i
                                              className="bx bx-x"
                                              style={{ color: "red" }}
                                            ></i>
                                          </div>
                                        </td>
                                      </tr>   {jndex == qcm.propositions.length-1  && (<tr  >
                                      <td style={{textAlign:"center"}} colSpan={4}>  <span><b className="text-primary cursor-pointer" onClick={(e)=>{
                                            if(qcm.propositions.length <4){
                                             
                                                const propo_r = qcm.propositions;
                                                propo_r.push({id:index+1,reponse:"",isgood:false})
                                                const qcm_r = sousTitreForm.qcm;
                                                let filtreSousTitre = qcm_r[index]
                                                qcm_r.splice(index,1,{...filtreSousTitre,propositions:propo_r})
                                                setSousTitreForm({...sousTitreForm,qcm:qcm_r})
                                                                             
                                            }else{
                                                alert('Pas plus de 4 proposition')
                                            }
                                        }}>+Nouvelle proposition</b></span></td>
                                      </tr>)}</>)
                                    
                                     })}
                                      
                                    </tbody>
                                  </table>
                                </div>
                              </div>
                            </div>
                            <div className="divider">
                              <div className="divider-text">
                                <b>Fin Question n°{index+1}</b>
                              </div>
                            </div>
                          </div>;
                        })}
                        {sousTitreForm.isQcm && (  <div
                          className="my-4"
                          style={{
                            display: "flex",
                            justifyContent: "flex-end",
                          }}
                        >
                          <h5>
                            <span className="btn btn-secondary" onClick={(e)=>{
                                e.preventDefault();
                                const qcm_r = sousTitreForm.qcm;
                                qcm_r.push({id:1,question:"",explication:"",propositions:[{id:1,reponse:"",isgood:true},{id:2,reponse:"",isgood:false}]})
                                setSousTitreForm({...sousTitreForm,qcm:qcm_r})

                            }}>+ Ajouter une nouvelle question</span>
                          </h5>
                          
                        </div>)}
                       
                        <div className="row my-2">
                          <div
                            className="my-2"
                            style={{
                              display: "flex",
                              justifyContent: "center",
                            }}
                          >
                            <button className="btn btn-primary" type="submit">
                              Modifier le sous-titre
                            </button>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </>
              </div>
            </div>
          </div>
        </div>
      </div>:<>Is Loading ...</>}
      <Tooltip anchorSelect=".my-tooltip" />
    </LayoutAdmin>
  );
};

export default UpdateSousTitreAdmin;
