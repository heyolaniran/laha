import { useState, useEffect, useRef } from "react";
import { Link, useParams } from "react-router-dom";
import LayoutAdmin from "../../../../layouts/Admin/Admin/Layouts"
import { useDispatch, useSelector } from "react-redux";
import { getSousTitre } from "../../../../reducers/modules/SousTitre/list"; 
import FileBase64 from 'react-file-base64';
import moment from "moment";
import { updateCourPatch } from "../../../../reducers/modules/Cour/update";


const ShowSousTitreAdmin = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const [reload, setReload] = useState(false)
  
  useEffect(() => {
    dispatch(getSousTitre(id));
  }, [reload]);
  
  const {items,isLoading} = useSelector(state=>state.sousTitres.list);

  const sousTitre = items;
const handleUpdatePicture =async(e)=>{
  e.preventDefault()
//   await dispatch(updateCourPatch({id:sousTitre.id,...uploadImageForm,startPicture:uploadImageForm.linkPicture != ""}))
//   setModale(false);
//   setUploadImageForm({isPicture:true,uploadImage:"",startPicture:false,linkPicture:null})
//   setReload(moment())

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
            <Link to={"/admin/cours/"+sousTitre.courId+"/sous_titres"}>
              <span className="text-muted fw-light"> Sous Titres </span>
            </Link>
            / {sousTitre.titre}
          </h4>
          <div className="row">
            { sousTitre.qcm?.length> 0 &&  <div className="col-12 mb-5">
                <div className="card">
                <div className="card-body ">
                    <div className="px-2" style={{display:"flex",justifyContent:"space-between"}}>
                    <b>QCM</b>
                    <div className="d-flex" style={{alignItems:"center"}}>
                    <Link to={"/admin/sous_titres/"+sousTitre.id+"/edit"}>
                    <i className="bx bx-pencil"></i>
                    <span className="px-2">Modifier</span></Link>
                    </div>
                    </div>
                    <br />
                    <span className="mb-1" style={{fontSize:"16px"}}>L'étudiant verra le formulaire du qcm ci-dessous,une fois qu'il essayera de passer au sous titres suivant</span>
                    {sousTitre.qcm.map((qcm,index)=>{
                        return <div className="mt-4">
                        <h5><b>Question n°{index+1}: </b> {qcm.question}</h5><br />
                        <div className="row mb-2">
                            {qcm.propositions.map((propo,jndex)=>{
                                return <div className="col-12 col-sm-6 ">
                                <div class="form-check">
                            <input class="form-check-input" type="checkbox" checked={propo.isgood} disabled />
                            <label class="form-check-label" for="defaultCheck3"> {propo.reponse} </label>
                          </div>
                            </div>
                            })}
                        </div>
                    </div>
                    })}  
                </div>
            </div></div>}
            <div className="col-12 col-sm-9 ">
              <div className="row">
                <h1 className="text-muted mb-2">{sousTitre.titre}</h1>

                <div className="col-md-12">
                  <div className="card">
                    <div className="card-body">
                        <div className="d-flex mb-3" style={{justifyContent:"flex-end"}}>
                            <div className="d-flex cursor-pointer" onClick={(e)=>{e.preventDefault();setModale(true)}} style={{alignItems:"center"}}>
                             
                                    <i className="bx bx-pencil"></i>
                                    <span className="mx-1">Modifier</span>
                               
                            </div>
                        </div>
                        {sousTitre.startPicture ?( !sousTitre.isPicture?
                      (<iframe
                        width="100%"
                        height="450"
                        style={{ borderRadius: "15px" }}
                        src={sousTitre.linkPicture}
                        title="YouTube video player"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowfullscreen
                      ></iframe>):(<img src={sousTitre.linkPicture} width="100%"
                      height="450"
                      style={{ borderRadius: "15px" }} />)):(<img src={sousTitre.picture} width="100%"
                        style={{ borderRadius: "15px" }}
                        height="450"  />)}
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
                                <Link to={"/admin/sous_titres/"+sousTitre.id+"/edit#presentation"}>
                                    <i className="bx bx-pencil"></i>
                                    <span className="mx-1">Modifier</span>
                                </Link>
                            </div>
                        </div>
                        {sousTitre.description}
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
                            Sous-titre suivant
                          </Link>
                        </li>
                        {/* {sousTitre.sous_titres && sousTitre.sous_titres.map((sous_titre) => {
                            return (
                              <li className="page-item">
                                <Link to={'/cours/'+sousTitre.id+'/sous_titres/'+sous_titre.id}
                                  className="page-link "
                                >
                                  {sous_titre.titre}
                                </Link>
                              </li>
                            );
                          })}
                       

                        <li className="page-item next">
                          <Link to={"/cours/"+sousTitre.id+"/sous_titres/1"} className="page-link" href="javascript:void(0);">
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
                    <Link to={"/admin/cours/"+sousTitre.courId+"/sous_titres"} className="btn btn-primary mt-3">Voir d'autres sous titres</Link>
                    
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

export default ShowSousTitreAdmin;
