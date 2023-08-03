import { useState, useEffect } from "react";
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import LayoutStudent from "../../../layouts/Admin/Student/Layout";
import { useDispatch, useSelector } from "react-redux";
import { createRepetition } from '../../../reducers/modules/Repetition/create' 
import { deleteRepetition } from '../../../reducers/modules/Repetition/delete' 
import { getRepetition,getRepetitionFiltre,getRepetitions } from '../../../reducers/modules/Repetition/list' 
import { getUserRepets } from '../../../reducers/modules/UserRepet/list' 
import { createUserRepet } from '../../../reducers/modules/UserRepet/create' 
import { deleteUserRepet } from '../../../reducers/modules/UserRepet/delete' 
import { getUsers } from '../../../reducers/modules/User/list' 
import { containList, filterList, findById, findList } from "../../../utils";
import { getSubjects,resetSubjects } from '../../../reducers/modules/Subject/list'
import { Tooltip } from 'react-tooltip'
import { SET_REPETITIONS_LIST_SEARCH_ITEMS } from "../../../reducers/modules/Repetition/list/mutation";


const MesRepetitions = () => {
  const myAlert = withReactContent(Swal);
  
  const dispatch =  useDispatch();
  const [reload, setReload] = useState(false);
  const [modale, setModale] = useState(false);
  const [reptFocus, setReptFocus] = useState({})
  useEffect(() => {
    setFormRept({})
    dispatch(getRepetitions());
    dispatch(getUserRepets());
    dispatch(getSubjects());
    dispatch(getUsers());
  }, [reload]);

  const repetReduce = useSelector(state => state.repetitions.list);
  const userRepet =  useSelector(state =>state.userRepets.list);
  const userReduce =  useSelector(state =>state.users.list);
  const subjectReduce = useSelector((state)=>state.subjects.list);

  const auth = useSelector(state => state.auth);

  const allRept = repetReduce.items
  const loadingRept = repetReduce.isLoading

  const myRepet = (id)=>{
    if(userRepet && allRept && auth.user){
        const firstFiltre = filterList(userRepet.items,"repetitionId",id);

        return filterList(firstFiltre,"userId",auth.user.id).length > 0
    }
  }
  const deleteRepet = (e,id)=>{
    e.preventDefault();
    myAlert.fire({
      title: 'Suppression d\'une répétition',
      text: "Vous ne pourrez pas revenir en arrière !!",
      icon: 'error',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: 'btn btn-secondary',
      confirmButtonText: 'Oui, supprimer',
      cancelButtonText:"Annuler",
    }).then(function(result){
      if (result.isConfirmed) {
         dispatch(deleteRepetition(id))
          setReload(!reload);
      }
    })
  }
  const retirerRept = (e,id)=>{
    e.preventDefault();
    myAlert.fire({
      title: 'Quitter la répétition',
      text: "Vous ne pourrez pas revenir en arrière !!,Une fois quitter,vous ne pouvez pas etre rembourser",
      icon: 'error',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: 'btn btn-secondary',
      confirmButtonText: 'Oui, quitter',
      cancelButtonText:"Annuler",
    }).then(function(result){
      if (result.isConfirmed) {
        const us = userRepet.items.find((po)=> po.repetitionId == id && po.userId == auth.user.id)
        console.log('us', us)
        if (us) {
          dispatch(deleteUserRepet(us.id));
          setReload(!reload)
        }       //  dispatch(deleteRepetition(id))
        //   setReload(!reload);
      }
    })
  }

  const participerRept = (e,id)=>{
    e.preventDefault();
    if(!myRepet(id)){
       myAlert.fire({
      title: 'Participer à cette répétition',
      text: "Souhaitez-vous réellement participer à cette répétition,Si oui passer au payement",
      icon: 'info',
      showCancelButton: true,
      confirmButtonColor: 'btn btn-primary',
      cancelButtonColor: 'btn btn-primary',
      confirmButtonText: 'Passer au payement',
      cancelButtonText:"Annuler",
    }).then(function(result){
      if (result.isConfirmed) {
        
          dispatch(createUserRepet({"userId":auth.user.id,"repetitionId":id}));
          setReload(!reload)
          //  dispatch(deleteRepetition(id))
        //   setReload(!reload);
      }
      
    })
    }
   
  }
  const handleCreate = (e)=>{
    e.preventDefault();
    const letters = "AZERTYUIOPQSDFGHJKLMWXCVBN";
    const code  = Math.floor((Math.random()*(99-10))+10)+letters[Math.floor(Math.random()*22)]+letters[Math.floor(Math.random()*22)]+Math.floor((Math.random()*(999-100))+100)
    const item = {
      "code":code,
      "program":[],
      "linkZoom":"",
      "description":"",
      "type":"En ligne",
      "state": "check",
      "rejectMessage": "",
      "lieu": "",
      "userId": auth.user.id,
      "studyMax":1

    }
    dispatch(createRepetition({...item,...formRept}))
    setModale(false);
    setIsCreated(false);
    setFormRept({})
    setReload(!reload)
  }

  const [formRept, setFormRept] = useState({});
  const [isCreated, setIsCreated] = useState(false)
  const [tab, setTab] = useState(1);
  const [searchItem, setSearchItem] = useState("");


  useEffect(() => {
    dispatch(getRepetitions());
    dispatch({type:SET_REPETITIONS_LIST_SEARCH_ITEMS,payload:containList(repetReduce.items,"code",searchItem)})
  
    return () => {
      dispatch({type:SET_REPETITIONS_LIST_SEARCH_ITEMS,payload:[]})
    }
  }, [searchItem])
  
  return (
    <>
       {modale && (<div className="" style={{width:"100%",height:"100%",position:"fixed",backgroundColor:"#000000ac",zIndex:2000}}>
        <div className="card-body col-lg-4 col-md-8 col-11" style={{position:"absolute",top:"50%",left:"50%",transform:'translate(-50%,-50%)',backgroundColor:"white" }}>
          <div className="row">
            <div className="col-11">
             <h4>Répétition</h4> 
            </div>
            <div className="col-1 text-end">
              <i className='bx bx-x text-danger cursor-pointer' style={{fontSize:"19px"}} onClick={(e)=>setModale(false)}></i>
            </div>
          </div>
          {isCreated ?(<>
            <form onSubmit={handleCreate} className=" offset-1 col-lg-10">      
              <span className="mb-4">
                    Formulaire de demande de repetition
              </span>
              <div className="my-3 row form-group">
                <h5 htmlFor="">Type de répétition</h5>

                <select name="" id=""  required className="form-control" value={formRept.type} onChange={(e)=> setFormRept({...formRept,type:e.target.value})} >
                <option value="" disabled selected></option>
                  
                  <option value="En ligne" >Cour en ligne</option>
                  <option value="Presentiel"> Cour à domicile</option>
                </select>
              </div>
              <div className="row form-group mt-4">
                <h5 htmlFor="">Matieres</h5>
                <select name="" required  className="form-control" id="" value={formRept.matiere} onChange={(e)=> setFormRept({...formRept,matiere:e.target.value})}>
                  <option value="" disabled selected></option>
                  {subjectReduce.items.map((su,index)=>{
                
                    return <option value={su.id} >{su.name}</option>
                  })}
                </select>
                
                  
              </div>
                          <div className="row form-group mt-3">

                            <h5 htmlFor="">Nombre d'etudiant</h5>
                            <input type="number" required className="form-control" value={formRept.studyMax} onChange={(e)=> setFormRept({...formRept,studyMax:e.target.value})} step={2} min={1} max={5} />
                          </div>
                          {formRept.type == "Presentiel" && (
                          <div className="row form-group mt-3">

                            <h5 htmlFor="" >Votre adresse</h5>
                            <textarea name="" required={formRept.type == "Presentiel" ? true:false} value={formRept.lieu} onChange={(e)=> setFormRept({...formRept,lieu:e.target.value})}id="" className="form-control">
                            
                            </textarea>
                          </div>)}

                          <button className="btn btn-outline-primary col-lg-8 my-4" type="submit" >Soumettre</button>
            </form>
          </>):(<>
            {reptFocus.state == "accept" && (
            <div class="bs-toast toast fade show bg-secondary" role="alert" aria-live="assertive" aria-atomic="true">
            
            <div class="toast-body">
              Votre prochaine séance pour cette répétition démarre dans moins de 2 jours
            </div>
          </div>
          )}
          {reptFocus.state == "check" && (
            <div class="bs-toast toast fade show bg-secondary" role="alert" aria-live="assertive" aria-atomic="true">
            
            <div class="toast-body">
              Il vous manque  {reptFocus.studyMax - filterList(userRepet.items,"repetitionId",reptFocus.id)?.length} etudiants pour commencer la répétition,
              Partager le code <b><u>{reptFocus.code }</u></b>  pour inviter vos amis à rejoindre la répétition
            </div>
          </div>
          )}
          {reptFocus.state == "reject" && (
            <div class="bs-toast toast fade show bg-danger" role="alert" aria-live="assertive" aria-atomic="true">
            
            <div class="toast-body">
              Votre demande à été réjectée <br />
              <b><u>Cause:</u></b><br />
              <ul>
                <li> {reptFocus.rejectMessage}</li>
              </ul>
            </div>
          </div>
          )}
          <div className="row mt-2" style={{overflowY:"scroll",maxHeight:"60vh"}}>
          <div className="table-responsive text-wrap">
                      <table className="table table-hover">
                        <thead>
                          <tr>
                            <th><b>Code</b> </th>
                            <td>
                            <b>{reptFocus.code}</b>
                              
                            </td>
                          </tr>
                          <tr>
                            <th>Matieres </th>
                            <td>
                            <>{findById(subjectReduce.items,reptFocus.matiere)?.name}</>
                            </td>
                          </tr>
                        </thead>
                        <tbody className="table-border-bottom-0">
                        <tr>
                            <th>Etat </th>
                            <td>
                                  {reptFocus.state == "accept" && (
                                    <span className="badge  bg-label-success ">
                                        Demarrer
                                    </span>
                                  )}
                                  {reptFocus.state == "reject" && (
                                    <span className="badge  bg-label-danger ">
                                        Annuler
                                    </span>
                                  )}
                                  {reptFocus.state == "check" && (
                                    <span className="badge  bg-label-primary ">
                                        Adhesion
                                    </span>
                                  )}
                                </td>
                          </tr>
                          <tr>
                            <th>Type de cour</th>
                          <td>
                                  {reptFocus.type}
                                </td>
                          </tr>
                          <tr>
                            <th>Programme</th>
                          <td>
                            <table>
                             
                              
                            
                                  {reptFocus.program.map((it)=>{
                                    return (
                                      <tr>
                                <th>{it.day} : </th>
                                <td>{it.start} à {it.end}</td>
                              </tr>
                                    )
                                  })}</table>
                                </td>
                          </tr>
                          {reptFocus.state != "reject" && (<tr>
                            {reptFocus.type === "En ligne" ?<th>Lien Zoom</th>: <th>Lieu</th>}
                            <td>
                                  {reptFocus.type === "En ligne"  ? (
                                  <a href={reptFocus.linkZoom} target="_blank" rel="noopener noreferrer"><div  style={{padding:"2px 5px 5px",backgroundColor:reptFocus.state == "check" ? "#4e8aef":"grey",maxWidth:"min-content",maxHeight:"min-content",borderRadius:"5px"}}><i class='bx bxl-zoom' style={{color:"#fff"}}></i> <b style={{color:"white"}}> Rejoindre</b></div></a>
                                  ):(<b>{reptFocus.lieu}</b>)}
                                </td>
                          </tr>)}
                          {reptFocus.state == "check" && (<tr>
                            <th>Nombre de participant</th>
                            <td>
                                  {filterList(userRepet.items,'repetitionId',reptFocus.id)?.length}/{reptFocus.studyMax} Etudiant{reptFocus.studyMax > 1 &&(<>s</>)}
                                </td>
                          </tr>)}
                          <tr>
                            <th>Participants</th>
                            <td>
                              <ul>

                              
                              {filterList(userRepet.items,"repetitionId",reptFocus.id)?.map((dd)=>{
                                return <li>{findById(userReduce.items,dd.userId)?.surname[0]}. {findById(userReduce.items,dd.userId)?.firstname}</li>
                              })}</ul>
                            </td>
                          </tr>
                          {reptFocus.state == "accept" && (
                            <tr>
                              <th>Animé par</th>
                              <td><>{findById(userReduce.items,reptFocus.professors)?.surname[0]}. {findById(userReduce.items,reptFocus.professors)?.firstname}</>
                              </td>
                            </tr>
                          )}
                         
                        </tbody>
                      </table>
                    </div>
          </div></>)}
        </div>
      </div>)}
      
    <LayoutStudent actif="rept">
      <div className="" onClick={(e)=>{setModale(true);setIsCreated(true);setFormRept({})}} style={{position:"fixed",bottom:"70px",right:"20px",padding:"10px",borderRadius:"60px",zIndex:5,backgroundColor:'#ebddc8b8',cursor:"pointer"}}><i className='bx bx-plus' style={{fontSize:"25px",color:"#32CD32"}}></i> <b style={{paddingLeft:"10px",paddingRight:"5px"}}>Enregistrer une demande</b></div>
      <div className=""  style={{position:"fixed",bottom:"120px",right:"20px",padding:"10px",borderRadius:"60px",zIndex:5,backgroundColor:'#c6c6ddb0',cursor:"pointer"}}>
        <input type="text" value={searchItem} onChange={(e)=>setSearchItem(e.target.value)} placeholder="Entrer le code " style={{backgroundColor:"transparent",border:"none"}} id="searchInput" />
        {searchItem.length == 0 ?<i className='bx bx-search' style={{fontSize:"25px",color:"#7777ff"}}></i>
        :<i className='bx bx-x' onClick={(e)=>setSearchItem("")} style={{fontSize:"25px",color:"red"}}></i>}
      </div>
                            
      <div className="container-xxl flex-grow-1 container-p-y">
        <h4 className="fw-bold py-3 mb-4">
          <span className="text-muted fw-light">Dashboard /</span> Répétitions
        </h4>
        {
          searchItem.length == 0 ?(
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
                        Rejoindre une répétition
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
                        Notifications
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
                              <th><b>Code</b></th>
                              <th>Matieres</th>
                              <th>Etat</th>
                              <th>Type</th>
                              <th>Lien Zoom / Lieu</th>
                              <th>Participants</th>
                              <th style={{justifyContent:"center",display:"flex"}}>Actions</th>
                            </tr>
                          </thead>
                          <tbody className="table-border-bottom-0">
                            {allRept.map((rept) => {
                              
                              return myRepet(rept.id) || rept.userId == auth.user.id ? (
                                <tr>
                                   <td>
                                    
                                    <b>{rept.code}</b>
                                   </td>
                                  <td>
                                    <>{findById(subjectReduce.items,rept.matiere)?.name}</>
                                  </td>
                                  <td>
                                    {rept.state == "accept" && (
                                      <span className="badge  bg-label-success ">
                                          Demarrer
                                      </span>
                                    )}
                                    {rept.state == "reject" && (
                                      <span className="badge  bg-label-danger ">
                                          Annuler
                                      </span>
                                    )}
                                    {rept.state == "check" && (
                                      <span className="badge  bg-label-primary ">
                                          Adhesion
                                      </span>
                                    )}
                                  </td>
                                  <td>
                                    {rept.type}
                                  </td>
                                  <td>
                                    {rept.state != "reject" && (rept.type === "En ligne"  ? (
                                    <a href={rept.state == "check" ?"#":rept.linkZoom} target={rept.state != "check" && "_blank"} rel="noopener noreferrer">
                                      <div style={{padding:"2px 5px 5px",backgroundColor:rept.state == "check" ? "grey":"#4e8aef",maxWidth:"min-content",maxHeight:"min-content",borderRadius:"5px"}}><i class='bx bxl-zoom' style={{color:"#fff"}}></i> <b style={{color:"white"}}> Rejoindre</b></div>
                                    </a>
                                    ):(<b>{rept.lieu}</b>))}
                                    {rept.state == "reject" &&(<>-</>)}
                                  </td>
                                  <td>
                                    {filterList(userRepet.items,'repetitionId',rept.id)?.length}/{rept.studyMax} Etudiant{rept.studyMax >1 &&(<>s</>)}
                                  </td>
                                  <td className="text-center">
                 <div className="row">
                 <div className="mx-2 cursor-pointer my-tooltip my-2" data-tooltip-content="Voir plus"   style={{padding:"5px 6px",borderRadius:"10px",backgroundColor:"#007bff4d",maxWidth:"min-content"}}>
                    <i className='bx bx-show' style={{color:"#007bff"}} onClick={(e)=>{
                      setModale(true);
                      setIsCreated(false)
                      setReptFocus(rept)
                    }}></i>
                  </div>
                  {rept.state == "reject" ?(<div className="mx-1 cursor-pointer my-tooltip my-2" onClick={(e)=>deleteRepet(e,rept.id)} data-tooltip-content="Supprimer" style={{padding:"5px 8px",borderRadius:"10px",backgroundColor:"#ff00001f",maxWidth:"min-content"}}>
                    <i className='bx bx-trash' style={{color:"red"}}></i>
                  </div>): myRepet(rept.id) ?(<div onClick={(e)=> retirerRept(e,rept.id)} className="cursor-pointer mx-1 my-tooltip my-2" data-tooltip-content="Se retirer" style={{padding:"5px 8px",borderRadius:"10px",backgroundColor:"#ffab006e",maxWidth:"min-content"}}><i className='bx bx-log-out-circle' style={{color:"red"}}></i>
                  </div>) :  <div onClick={(e)=> participerRept(e,rept.id)} className="cursor-pointer mx-2 my-tooltip my-2" data-tooltip-content="Participer" style={{padding:"5px 8px",borderRadius:"10px",backgroundColor:"#abff006e",maxWidth:"min-content"}}>
                    <i className='bx bx-log-in-circle' style={{color:"green"}}></i>
                  </div>}
                 </div>
                                  </td>
                                  
                                </tr>
                              ):(<></>);
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
                              <th><b>Code</b></th>
                              <th>Matieres</th>
                              <th>Etat</th>
                              <th>Type</th>
                              <th>Lien Zoom / Lieu</th>
                              <th>Participants</th>
                              <th style={{justifyContent:"center",display:"flex"}}>Actions</th>
                            </tr>
                          </thead>
                          <tbody className="table-border-bottom-0">
                          {allRept.map((rept) => {
                              
                              return !myRepet(rept.id) && rept.state =="check" ? (
                                <tr>
                                   <td>
                                    
                                    <b>{rept.code}</b>
                                   </td>
                                  <td>
                                    <>{findById(subjectReduce.items,rept.matiere)?.name}</>
                                  </td>
                                  <td>
                                    
                                      <span className="badge  bg-label-primary ">
                                          Adhesion
                                      </span>
                                    
                                  </td>
                                  <td>
                                    {rept.type}
                                  </td>
                                  <td>
                                    {rept.state != "reject" && (rept.type === "En ligne"  ? (
                                    <a href={rept.linkZoom} target="_blank" rel="noopener noreferrer"><div style={{padding:"2px 5px 5px",backgroundColor:"#4e8aef",maxWidth:"min-content",maxHeight:"min-content",borderRadius:"5px"}}><i class='bx bxl-zoom' style={{color:"#fff"}}></i> <b style={{color:"white"}}> Rejoindre</b></div></a>
                                    ):(<b>{rept.lieu}</b>))}
                                    {rept.state == "reject" &&(<>-</>)}
                                  </td>
                                  <td>
                                    {filterList(userRepet.items,'repetitionId',rept.id)?.length}/{rept.studyMax} Etudiant{rept.studyMax >1 &&(<>s</>)}
                                  </td>
                                  <td className="text-center">
                 <div className="row">
                 <div className="mx-2 cursor-pointer my-tooltip" data-tooltip-content="Voir plus"   style={{padding:"5px 6px",borderRadius:"10px",backgroundColor:"#007bff4d",maxWidth:"min-content"}}>
                    <i className='bx bx-show' style={{color:"#007bff"}} onClick={(e)=>{
                      setModale(true);
                      setReptFocus(rept)
                    }}></i>
                  </div>
                
                  <div onClick={(e)=> participerRept(e,rept.id)} className="cursor-pointer mx-2 my-tooltip" data-tooltip-content="Participer" style={{padding:"5px 8px",borderRadius:"10px",backgroundColor:"#abff006e",maxWidth:"min-content"}}>
                    <i className='bx bx-log-in-circle' style={{color:"green"}}></i>
                  </div>
                 </div>
                                  </td>
                                  
                                </tr>
                              ):(<></>);
                            })}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          ):(
            <>
            
            <div className="row">
              <div className="col-lg-12">
                <div className="card">
                  <div className="card-body"> <div className="table-responsive text-nowrap my-2">
                        <table className="table table-hover">
                          <thead>
                            <tr>
                              <th><b>Code</b></th>
                              <th>Matieres</th>
                              <th>Etat</th>
                              <th>Type</th>
                              <th>Lien Zoom / Lieu</th>
                              <th>Participants</th>
                              <th style={{justifyContent:"center",display:"flex"}}>Actions</th>
                            </tr>
                          </thead>
                          <tbody className="table-border-bottom-0">
                            {repetReduce.searchItems.map((rept) => {
                              
                              return repetReduce.searchItems.length > 0 ? (
                                <tr>
                                   <td>
                                    
                                    <b>{rept.code}</b>
                                   </td>
                                  <td>
                                    <>{findById(subjectReduce.items,rept.matiere)?.name}</>
                                  </td>
                                  <td>
                                    {rept.state == "accept" && (
                                      <span className="badge  bg-label-success ">
                                          Demarrer
                                      </span>
                                    )}
                                    {rept.state == "reject" && (
                                      <span className="badge  bg-label-danger ">
                                          Annuler
                                      </span>
                                    )}
                                    {rept.state == "check" && (
                                      <span className="badge  bg-label-primary ">
                                          Adhesion
                                      </span>
                                    )}
                                  </td>
                                  <td>
                                    {rept.type}
                                  </td>
                                  <td>
                                    {rept.state != "reject" && (rept.type === "En ligne"  ? (
                                    <a href={rept.state == "check" ?"#":rept.linkZoom} target={rept.state != "check" && "_blank"} rel="noopener noreferrer">
                                      <div style={{padding:"2px 5px 5px",backgroundColor:rept.state == "check" ? "grey":"#4e8aef",maxWidth:"min-content",maxHeight:"min-content",borderRadius:"5px"}}><i class='bx bxl-zoom' style={{color:"#fff"}}></i> <b style={{color:"white"}}> Rejoindre</b></div>
                                    </a>
                                    ):(<b>{rept.lieu}</b>))}
                                    {rept.state == "reject" &&(<>-</>)}
                                  </td>
                                  <td>
                                    {filterList(userRepet.items,'repetitionId',rept.id)?.length}/{rept.studyMax} Etudiant{rept.studyMax >1 &&(<>s</>)}
                                  </td>
                                  <td className="text-center">
                 <div className="row">
                 <div className="mx-2 cursor-pointer my-tooltip my-2" data-tooltip-content="Voir plus"   style={{padding:"5px 6px",borderRadius:"10px",backgroundColor:"#007bff4d",maxWidth:"min-content"}}>
                    <i className='bx bx-show' style={{color:"#007bff"}} onClick={(e)=>{
                      setModale(true);
                      setIsCreated(false)
                      setReptFocus(rept)
                    }}></i>
                  </div>
                  {rept.state == "reject" ?(<div className="mx-1 cursor-pointer my-tooltip my-2" onClick={(e)=>deleteRepet(e,rept.id)} data-tooltip-content="Supprimer" style={{padding:"5px 8px",borderRadius:"10px",backgroundColor:"#ff00001f",maxWidth:"min-content"}}>
                    <i className='bx bx-trash' style={{color:"red"}}></i>
                  </div>): myRepet(rept.id) ?(<div onClick={(e)=> retirerRept(e,rept.id)} className="cursor-pointer mx-1 my-tooltip my-2" data-tooltip-content="Se retirer" style={{padding:"5px 8px",borderRadius:"10px",backgroundColor:"#ffab006e",maxWidth:"min-content"}}><i className='bx bx-log-out-circle' style={{color:"red"}}></i>
                  </div>) :  <div onClick={(e)=> participerRept(e,rept.id)} className="cursor-pointer mx-2 my-tooltip my-2" data-tooltip-content="Participer" style={{padding:"5px 8px",borderRadius:"10px",backgroundColor:"#abff006e",maxWidth:"min-content"}}>
                    <i className='bx bx-log-in-circle' style={{color:"green"}}></i>
                  </div>}
                 </div>
                                  </td>
                                  
                                </tr>
                              ):(<tr>
                                  <td >
                                    Pas de répétition
                                  </td>
                                </tr>);
                            })}
                          </tbody>
                        </table>
                      </div></div>
                </div>
              </div>
            </div>
            </>
          )
        }
       
      </div>
    </LayoutStudent>
    <Tooltip  anchorSelect=".my-tooltip"/></>
  );
};

export default MesRepetitions;
