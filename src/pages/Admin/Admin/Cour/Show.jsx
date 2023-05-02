import { useState, useEffect, useRef } from "react";
import { Link, useParams } from "react-router-dom";
import LayoutAdmin from "../../../../layouts/Admin/Admin/Layouts"
import { useDispatch, useSelector } from "react-redux";
import { getCour } from "../../../../reducers/modules/Cour/list"; 
import { getSousTitres } from "../../../../reducers/modules/SousTitre/list"; 
import FileBase64 from 'react-file-base64';
import moment from "moment";
import { updateCourPatch } from "../../../../reducers/modules/Cour/update";


const ShowCourAdmin = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const [reload, setReload] = useState(false)
  
  useEffect(() => {
    dispatch(getCour(id));
    dispatch(getSousTitres());

    
  }, [reload]);
  
  const {items,isLoading} = useSelector(state=>state.cours.list);

  const cour = items;
const handleUpdatePicture =async(e)=>{
  e.preventDefault()
  await dispatch(updateCourPatch({id:cour.id,...uploadImageForm,startPicture:uploadImageForm.linkPicture != ""}))
  setModale(false);
  setUploadImageForm({isPicture:true,uploadImage:"",startPicture:false,linkPicture:null})
  setReload(moment())

}
const [modale, setModale] = useState(false);
const [uploadImageForm, setUploadImageForm] = useState({isPicture:true,uploadImage:"",startPicture:false,linkPicture:""})






  return (
    <>
    
    {modale && (<div className="" style={{width:"100%",height:"100%",position:"fixed",backgroundColor:"#000000ac",zIndex:2000}}>
        <div className="card-body col-lg-4 col-md-8 col-11" style={{position:"absolute",top:"50%",left:"50%",transform:'translate(-50%,-50%)',backgroundColor:"white" }}>
          <div className="row">
            <div className="col-11">
             <h5>{uploadImageForm.isPicture ? "Image":"Vidéo"} d'introduction</h5> 
            </div>
            <div className="col-1 text-end">
              <i className='bx bx-x text-danger cursor-pointer' style={{fontSize:"19px"}} onClick={(e)=>{setModale(false);setUploadImageForm({...uploadImageForm,linkPicture:""})}}></i>
            </div>
            <div className="col-12"><form onSubmit={handleUpdatePicture}>
              <div className="row">
                <div className="col-12 form-group">
                  <label htmlFor="">S'agit-il d'une image ou vidéo</label>
           <div className="d-flex items-center mt-2">
           <label class="mx-2" htmlFor="" >Vidéo </label>
                  <div class="form-check form-switch mb-2">

                        <input class="form-check-input" type="checkbox" checked={uploadImageForm.isPicture} id="flexSwitchCheckDefault"   onChange={(e)=>{setUploadImageForm({...uploadImageForm,isPicture:e.target.checked})}} />
                        <label class="form-check-label" htmlFor="flexSwitchCheckDefault" >Image</label>
                      </div>
           </div>
                </div>
              </div>
        <div className="row">
            
             {/* {uploadImageForm.linkPicture != ""  && <img src={uploadImageForm.linkPicture} alt=",sk" srcset="" style={{width:"150px",height:"150px"}} />} */}
            <div className="col-12">
                <label htmlFor="titre">{uploadImageForm.isPicture ? "Image":"Vidéo"}</label>
              <br />
                <FileBase64  onDone={({base64})=>{setUploadImageForm({...uploadImageForm,linkPicture:base64})}}  />
                
            </div>
            <div className="my-2" style={{display:"flex",justifyContent:"center"}}>
            <button type="submit" className="btn btn-primary mt-2">Enregistrer</button>

            </div>
        </div></form>
            </div>
          </div>
        </div>
      </div>)}
    <LayoutAdmin actif="cours">
      {!isLoading ? (<>
        <div className="container-xxl flex-grow-1 container-p-y">
          <h4 className="fw-bold py-3 mb-4">
              <span className="text-muted fw-light"> Dashboard / </span>
            <Link to="/admin/cours">
              <span className="text-muted fw-light"> Cours </span>
            </Link>
            / {cour.titre}
          </h4>
          <div className="row">
            <div className="col-12">
                <div className="alert alert-dark alert-dismissible mb-3">
                    <div className="px-2" style={{display:"flex",justifyContent:"space-between"}}>
                    <b>Informations Générale</b>
                    <div className="d-flex" style={{alignItems:"center"}}>
                    <Link to={"/admin/cours/"+cour.id+"/edit"}>
                    <i className="bx bx-pencil"></i>
                    <span className="px-2">Modifier</span></Link>
                    </div>
                    </div>
                    <br />
                    <span className="mb-1" style={{fontSize:"14px"}}>Seul les administrateurs et professeurs peuvent voire ces informations</span>
                    <div className="mt-2">
                        <ul>
                            <li><b>Matiere</b>: <span>{cour.subject && cour.subject.name}</span></li>
                            <li><b>Classe</b>: <span>{cour.classroom && cour.classroom.abbrv}</span></li>
                            {/* <li><b>Enregistrer le </b>: <span>{moment(cour.createdAt, "DD MM YYYY hh:mm:ss")+"" }</span></li> */}
                            {cour.cours_starts &&  <li><b>Nombre d'etudiant</b>: <span>{cour.cours_starts.length} Etudiant{cour.cours_starts.length >1 && "s"} </span></li>}
                            {cour.sous_titres && <li><b>Nombre de sous titres</b>: <span>{ cour.sous_titres.length} Sous-titre{cour.sous_titres.length >1 && "s"} </span></li>}
                        </ul>
                    </div>
                </div>
            </div>
            <div className="col-12 col-sm-9 ">
              <div className="row">
                <h1 className="text-muted mb-2">{cour.titre}</h1>

                <div className="col-md-12">
                  <div className="card">
                    <div className="card-body">
                        <div className="d-flex mb-3" style={{justifyContent:"flex-end"}}>
                            <div className="d-flex cursor-pointer" onClick={(e)=>{e.preventDefault();setModale(true)}} style={{alignItems:"center"}}>
                             
                                    <i className="bx bx-pencil"></i>
                                    <span className="mx-1">Modifier</span>
                               
                            </div>
                        </div>
                        {cour.startPicture ?( !cour.isPicture?
                      (<iframe
                        width="100%"
                        height="450"
                        style={{ borderRadius: "15px" }}
                        src={cour.linkPicture}
                        title="YouTube video player"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowfullscreen
                      ></iframe>):(<img src={cour.linkPicture} width="100%"
                      height="450"
                      style={{ borderRadius: "15px" }} />)):(<img src={cour.picture} width="100%"
                        style={{ borderRadius: "15px" }}
                        height="450"  />)}
                    </div>
                  </div>
                </div>
              </div>
              <div className="row mt-3">
              <h1 className="text-muted mb-2">Introduction</h1>
               
                <div className="col-md-12">
                  <div className="card">
                    <div className="card-body">
                    <div className="d-flex mb-2" style={{justifyContent:"flex-end"}}>
                            <div className="d-flex" style={{alignItems:"center"}}>
                                <Link to={"/admin/cours/"+cour.id+"/edit#resumer"}>
                                    <i className="bx bx-pencil"></i>
                                    <span className="mx-1">Modifier</span>
                                </Link>
                            </div>
                        </div>
                        {cour.resumer}
                        </div>
                  </div>
                </div>
              </div>
              <div className="row mt-3">
              <h1 className="text-muted mb-2">Présentation</h1>

                <div className="col-md-12">
                  <div className="card">
                    <div className="card-body">
                    <div className="d-flex mb-2" style={{justifyContent:"flex-end"}}>
                            <div className="d-flex" style={{alignItems:"center"}}>
                                <Link to={"/admin/cours/"+cour.id+"/edit#presentation"}>
                                    <i className="bx bx-pencil"></i>
                                    <span className="mx-1">Modifier</span>
                                </Link>
                            </div>
                        </div>
                        {cour.description}
                        </div>
                    <div className="card-footer"></div>
                  </div>
                </div>
              </div>
              <div className="row mt-4">
                <div className="col-lg-12">
                  <div className="demo-inline-spacing">
                    <nav aria-label="Page navigation">
                      <ul className="pagination justify-content-end">
                        <li className="page-item active">
                          <Link
                            className="page-link"
                            to="#"
                          >
                            Démarrer le cour
                          </Link>
                        </li>
                        {/* {cour.sous_titres && cour.sous_titres.map((sous_titre) => {
                            return (
                              <li className="page-item">
                                <Link to={'/cours/'+cour.id+'/sous_titres/'+sous_titre.id}
                                  className="page-link "
                                >
                                  {sous_titre.titre}
                                </Link>
                              </li>
                            );
                          })}
                       

                        <li className="page-item next">
                          <Link to={"/cours/"+cour.id+"/sous_titres/1"} className="page-link" href="javascript:void(0);">
                          Suivant<i className="tf-icon bx bx-chevrons-right"></i>
                          </Link>
                        </li> */}
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
                    {cour.sous_titres?.length > 0 ? cour.sous_titres.map((sous_titre,index) => {
                        return (
                            <>
                          <div className="nav-item mx-3 my-1">
                            <hr />
                           
                            <Link
                              to={
                                "/admin/cours/" +
                                cour.id +
                                "/sous_titres/" +
                                sous_titre.id
                              }
                            >
                              {sous_titre.titre}
                            </Link>
                          </div>
                          {index ==cour.sous_titres.length-1 && <Link to={"/admin/cours/"+cour.id+"/sous_titres/create"} className="btn btn-primary mt-3">Ajouter d'autre sous-titre</Link>}
                          </>
                        );
                      }):(<Link to={"/admin/cours/"+cour.id+"/sous_titres/create"} className="btn btn-primary mt-3">Ajouter des sous titre</Link>)
                    }
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>):(<>Loading ...</>)}
    </LayoutAdmin></>
  );
};

export default ShowCourAdmin;
