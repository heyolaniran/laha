import { useEffect, useState } from "react"
import LayoutAdmin from "../../../layouts/Admin/Admin/Layouts"
import { getCour, resetCours } from "../../../reducers/modules/Cour/list"
import { deleteSousTitre } from "../../../reducers/modules/SousTitre/delete"
import { useDispatch, useSelector } from "react-redux"
import { Tooltip } from "react-tooltip"
import { getFiltre } from "../../../reducers/modules/Filtre"
import { getSubjects } from "../../../reducers/modules/Subject/list"
import { getClassrooms } from "../../../reducers/modules/Classroom/list"
import { Link, useNavigate, useParams } from "react-router-dom"
import { getCourSousTitres,relationSousTitres, resetSousTitres } from "../../../reducers/modules/SousTitre/list"

const SousTitresAdmin = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {id} = useParams()
    const [allCours, setAllCours] = useState([]);
    const [isSearch,setIsSearch]  = useState(false);
    const [modale, setModale] = useState(false);
    const [formFiltre, setFormFiltre] = useState({"subjectId":"","classroomId":"","titre":""});
    const [modalTitle, setModalTitle] = useState("")
    const [showFilter, setShowFilter] = useState(false)
    const [reload, setReload] = useState(false)
    useEffect(() => {
      dispatch(getCourSousTitres(id))
      dispatch(getCour(id))
    
      return () => {
        dispatch(resetCours())
        dispatch(resetSousTitres())
      }
    }, [reload])
    
    const {items,isLoading,searchItems} = useSelector((state)=>state.sousTitres.list)
    const courReduce = useSelector((state)=>state.cours.list)
   useEffect(() => {
     setAllCours(items)   
     return ()=>{
        setAllCours([])
     }
   }, [items]);

   const handleDelete = async (id)=>{
    if(id){
        await dispatch(deleteSousTitre(id))
        setReload(!reload)
    }
   }
   const searchCours =  async(key,value)=>{
    if(value == "" || value ==")" || value.trim()===""){
        setAllCours(items)
    }else{
           await dispatch(getFiltre('SOUSTITRES',key+"="+value+"&courId="+id,"sous_titres"));
            setIsSearch(value)
    }
   }
  
   const filtreCours = async(e)=>{
    e.preventDefault()
    let url = ""
    url += formFiltre.userId != "" ? "&userId="+formFiltre.userId:""
    url += formFiltre.titre.trim() != "" ? "&titre_like="+formFiltre.titre.trim():""
    if (url != "") {
        await dispatch(getFiltre('SOUSTITRES',relationSousTitres+url+"&courId="+id,"sous_titres"))
        setIsSearch(url)
        setModale(false)
    }else{
        setAllCours(items)
        setModale(false)
    }
    
   }

   useEffect(() => {
     setAllCours(searchItems)
   }, [isSearch])
   




   
  return (
    <>
     {modale && (<div className="" style={{width:"100%",height:"100%",position:"fixed",backgroundColor:"#000000ac",zIndex:2000}}>
        <div className="card-body col-lg-4 col-md-8 col-11" style={{position:"absolute",top:"50%",left:"50%",transform:'translate(-50%,-50%)',backgroundColor:"white" }}>
          <div className="row">
            <div className="col-11">
             <h4>Sous Titres - {modalTitle}</h4> 
            </div>
            <div className="col-1 text-end">
              <i className='bx bx-x text-danger cursor-pointer' style={{fontSize:"19px"}} onClick={(e)=>setModale(false)}></i>
            </div>
            <div className="col-12">
               {showFilter && (<form onSubmit={filtreCours}>
        <div className="row ">
            <div className="col-12 my-2">
                <label htmlFor="matiere">Auteur</label>
                <select value={formFiltre.userId}  onChange={(e)=>{ setFormFiltre({...formFiltre,userId:e.target.value})}} id="matiere" className="form-control">
                    <option value="" selected >Tous</option>
                    {items.map((prof)=>{
                        return <option value={prof.userId}>{prof.user?.surname} {prof.user?.firstname}</option>
                    })}
                </select>   

            </div>
            
            <div className="col-12">
                <label htmlFor="titre">Titre</label>
                <input name="titre" value={formFiltre.titre} onChange={(e)=>setFormFiltre({...formFiltre,titre:e.target.value})} id="titre" className="form-control" />
            </div>
            <div className="my-2" style={{display:"flex",justifyContent:"center"}}>
            <button type="submit" className="btn btn-primary">Filtrer</button>

            </div>
        </div></form>)}
            </div>
          </div>
        </div>
      </div>)}
    <LayoutAdmin actif="cours">
        
      <div className="" onClick={(e)=>{navigate('/admin/cours/'+courReduce.items?.id+'/sous_titres/create')}} style={{position:"fixed",bottom:"70px",right:"20px",padding:"10px",borderRadius:"60px",zIndex:5,backgroundColor:'#ebddc8b8',cursor:"pointer"}}><i className='bx bx-plus' style={{fontSize:"25px",color:"#32CD32"}}></i> <b style={{paddingLeft:"10px",paddingRight:"5px"}}>Ajouter un sous titre</b></div>
      <div className="container-xxl flex-grow-1 container-p-y">
        <h4 className="fw-bold py-3 mb-4">
          <span className="text-muted fw-light">Dashboard /</span> 
        <Link to="/admin/cours"> <span className="text-muted fw-light"> Cours /</span></Link>  
        <Link to={"/admin/cours/"+courReduce.items?.id}> <span className="text-muted fw-light my-tooltip" data-tooltip-content={courReduce.items?.titre} > {courReduce.items.titre?.substring(0,10)+'...'} /</span></Link>
        Sous-titres
        </h4>
      
        <div className="row">
              <div className="col-lg-12">
                <div className="card">
                    
                  <div className="card-body">
                    <>
                    <div className="card-title my-2">
                        <a>{courReduce.items?.titre}</a> <br />
                        <div className="" style={{display:"flex",justifyContent:"space-between",}}>
                        <h5>Liste des sous-titres</h5>
                        <div>
                        <button 
        className="btn btn-secondary "
        onClick={(e)=>{
            e.preventDefault();
            setModalTitle("Filtre")
            setModale(true)
            setShowFilter(true)
        }}><i className="bx bx-filter"></i>
        </button>
                        
                        <input type="text" onChange={(e)=>{
                            searchCours('titre_like',e.target.value)
                        }} placeholder="Rechercher ..." style={{borderRadius:"15px",border:"0.4px solid lightgrey",}} className="px-4 py-2 mx-2" />
                        </div></div>
                    </div>
                    <div className="table-responsive text-nowrap my-2">
                      <table className="table table-hover">
                          <thead>
                            <tr>
                              <th>Titre</th>
                              <th>Présentation</th>
                              <th className="my-tooltip" data-tooltip-content="Pour valider ce sous-titres aura t'il à repondre à un QCM?">QCM ?</th>
                              <th className="my-tooltip" data-tooltip-content="Nombre d'etudiant à ce niveau">Etudiants</th>
                              <th colSpan={2}>Actions</th>
                            </tr>
                          </thead>
                          <tbody className="table-border-bottom-1">
                            {isLoading ?(<tr><td>IsLoading</td></tr>) :allCours.map((item)=>{
                                return (
                                    <tr>
                                        <td><b>{item.titre.substring(0,15)}...</b></td>
                                        <td><b className="text-primary">{item.description.substring(0,50)}...</b></td>
                                     
                                        <td><a href="">{item.qcm.length == 0 ? (<span className="badge bg-label-secondary">Non</span>): (<span className="badge bg-label-info">Oui</span>)}  </a></td>
                                        <td>{item.user_level_cours?.length ?? "0"} Etudiant</td>
                                        
                                        <td className="text-center" colSpan={2}>
                 <div className="row">
                 
                  
                  <div className="mx-1 cursor-pointer my-tooltip my-2" data-tooltip-content="Voir plus" onClick={(e)=>{e.preventDefault(); navigate("/admin/sous_titres/"+item.id)}}   style={{padding:"8px 9px",borderRadius:"10px",backgroundColor:"#007bff4d",maxWidth:"min-content"}}>
                    <i className='bx bx-show' style={{color:"#007bff"}}></i>
                  </div>  
                  <div  className="cursor-pointer mx-1 my-tooltip my-2" onClick={(e)=>{e.preventDefault(); navigate("/admin/sous_titres/"+item.id+"/edit")}} data-tooltip-content="Modifier" style={{padding:"8px 10px",borderRadius:"10px",backgroundColor:"#abff006e",maxWidth:"min-content"}}>
                    <i className='bx bx-pencil' style={{color:"green"}}></i>
                  </div> 
                  
                   
                  <div className="mx-1 cursor-pointer my-tooltip my-2" onClick={(e)=>{e.preventDefault(); handleDelete(item.id)}}  data-tooltip-content="Supprimer" style={{padding:"5px 8px",borderRadius:"10px",backgroundColor:"#ff00001f",maxWidth:"min-content"}}>
                    <i className='bx bx-trash' style={{color:"red"}}></i>
                  </div>
                 </div>
</td>
                                    </tr>
                                )
                            })}
                            
                          </tbody>
                      </table>
                    </div></>
                  </div>
                </div>
              </div>
            </div>
        </div>
    <Tooltip  anchorSelect=".my-tooltip"/>
        
    </LayoutAdmin></>
  )
}

export default SousTitresAdmin