import { useEffect, useState } from "react"
import LayoutAdmin from "../../../layouts/Admin/Admin/Layouts"
import { getBooks, relationBooks, resetBooks } from "../../../reducers/modules/Book/list"
import { deleteBook } from "../../../reducers/modules/Book/delete"
import { useDispatch, useSelector } from "react-redux"
import { Tooltip } from "react-tooltip"
import { getFiltre } from "../../../reducers/modules/Filtre"
import { Link, useNavigate } from "react-router-dom"
import { getSubjects, resetSubjects } from "../../../reducers/modules/Subject/list"
import { getClassrooms } from "../../../reducers/modules/Classroom/list"
import { getBookTypes, resetBookTypes } from "../../../reducers/modules/BookType/list"

const BooksAdmin = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [allCours, setAllCours] = useState([]);
    const [isSearch,setIsSearch]  = useState(false);
    const [modale, setModale] = useState(false);
    const [formFiltre, setFormFiltre] = useState({"subjectId":"","categoryId":"","titre":"","bookTypeId":"","classroomId":""});
    const [modalTitle, setModalTitle] = useState("")
    const [showFilter, setShowFilter] = useState(false)
    const [reload, setReload] = useState(false)
    useEffect(() => {
      dispatch(getBooks())
      dispatch(getSubjects())
      dispatch(getClassrooms())
      dispatch(getBookTypes())
    
      return () => {
        dispatch(resetBooks())
        dispatch(resetBookTypes())
        dispatch(resetSubjects())
      }
    }, [reload])
    
    const {items,isLoading,searchItems} = useSelector((state)=>state.books.list)
    const subjectReduce = useSelector((state)=>state.subjects.list)
    const classroomReduce = useSelector((state)=>state.classrooms.list)
    const typeReduce = useSelector((state)=>state.booksTypes.list)
   useEffect(() => {
     setAllCours(items)   
     return ()=>{
        setAllCours([])
     }
   }, [items]);

   const handleDelete = async (id)=>{
    if(id){
        await dispatch(deleteBook(id))
        setReload(!reload)
    }
   }
   const searchCours =  async(key,value)=>{
    if(value == "" || value ==")" || value.trim()===""){
        setAllCours(items)
    }else{
           await dispatch(getFiltre('BOOKS',relationBooks+"&"+key+"="+value));
            setIsSearch(value)
    }
 
   }
  
   const filtreBooks = async(e)=>{
    e.preventDefault()
    let url = ""
    url += formFiltre.subjectId != "" ? "&subjectId="+formFiltre.subjectId:""
    url += formFiltre.bookTypeId != "" ? "&bookTypeId="+formFiltre.bookTypeId:""
    url += formFiltre.titre.trim() != "" ? "&titre_like="+formFiltre.titre.trim():""
    url += formFiltre.classroomId != "" ? "&classroomId="+formFiltre.classroomId:""
    if (url != "") {
        await dispatch(getFiltre('BOOKS',relationBooks+url))
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
             <h4>Books - {modalTitle}</h4> 
            </div>
            <div className="col-1 text-end">
              <i className='bx bx-x text-danger cursor-pointer' style={{fontSize:"19px"}} onClick={(e)=>setModale(false)}></i>
            </div>
            <div className="col-12">
               {showFilter && (<form onSubmit={filtreBooks}>
        <div className="row">
            <div className="col-12 mb-2">
                <label htmlFor="matiere">Matiere</label>
                <select value={formFiltre.subjectId}  onChange={(e)=>{ setFormFiltre({...formFiltre,subjectId:e.target.value})}} id="matiere" className="form-control">
                    <option value="" selected >Tous</option>
                    {subjectReduce.items.map((cour)=>{
                        return <option value={cour.id}>{cour.name}</option>
                    })}
                </select>   

            </div>
            <div className="col-12 mb-2">
                <label htmlFor="classroom">Type</label>
                <select value={formFiltre.bookTypeId}   onChange={(e)=>setFormFiltre({...formFiltre,bookTypeId:e.target.value})} id="classroom" className="form-control">
                    <option value="" selected >Tous</option>
                    {typeReduce.items.map((type)=>{
                        return <option value={type.id}>{type.name}</option>
                    })}
                </select>   
            </div>
            <div className="col-12 mb-2">
                <label htmlFor="classroom">Classe</label>
                <select value={formFiltre.classroomId}   onChange={(e)=>setFormFiltre({...formFiltre,classroomId:e.target.value})} id="classroom" className="form-control">
                    <option value="" selected >Tous</option>
                    {classroomReduce.items.map((classe)=>{
                        return <option value={classe.id}>{classe.abbrv}</option>
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
    <LayoutAdmin actif="livres">
        
      <div className="" onClick={(e)=>{navigate('/admin/livres/create')}} style={{position:"fixed",bottom:"70px",right:"20px",padding:"10px",borderRadius:"60px",zIndex:5,backgroundColor:'#ebddc8b8',cursor:"pointer"}}><i className='bx bx-plus' style={{fontSize:"25px",color:"#32CD32"}}></i> <b style={{paddingLeft:"10px",paddingRight:"5px"}}>Enregistrer un livre</b></div>
      <div className="container-xxl flex-grow-1 container-p-y">
        <h4 className="fw-bold py-3 mb-4">
          <span className="text-muted fw-light">Dashboard /</span> Livres
        </h4>
      
        <div className="row">
              <div className="col-lg-12">
                <div className="card">
                    
                  <div className="card-body">
                    <>
                    <div className="card-title my-2">
                        <div className="" style={{display:"flex",justifyContent:"space-between",}}>
                        <h5>Liste des livres</h5>
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
                              <th>Auteur</th>
                              <th>Matieres</th>
                              <th>Classe</th>
                              <th>Type</th>
                              <th>Nbre Favoris</th>
                              <th colSpan={2}>Actions</th>
                            </tr>
                          </thead>
                          <tbody className="table-border-bottom-1">
                            {isLoading ?(<tr><td>IsLoading</td></tr>) :allCours.map((item)=>{
                                return (
                                    <tr>
                                        <td><b className="text-primary">{item.titre.substring(0,18)}...</b></td>
                                        <td><b >{item.auteur.substring(0,18)}...</b></td>
                                        <td><b>{item.subject?.name}</b></td>
                                        <td><b>{item.classroom?.abbrv}</b></td>
                                        <td><span className="badge bg-label-info">{item.bookType?.name}</span></td>

                                        <td><span className="badge bg-label-secondary">{item.bookFavs?.length} J'aime{item.bookFavs?.length >1 ? "s":""}</span></td>
                                        <td className="text-center" colSpan={2}>
                 <div className="row">
                 
                 
                  <div className="mx-1 cursor-pointer my-tooltip my-2" data-tooltip-content="Voir plus" onClick={(e)=>{e.preventDefault(); navigate("/admin/livres/"+item.id)}}   style={{padding:"8px 9px",borderRadius:"10px",backgroundColor:"#007bff4d",maxWidth:"min-content"}}>
                    <i className='bx bx-show' style={{color:"#007bff"}}></i>
                  </div>  
                  <div  className="cursor-pointer mx-1 my-tooltip my-2" onClick={(e)=>{e.preventDefault(); navigate("/admin/livres/"+item.id+"/edit")}} data-tooltip-content="Modifier" style={{padding:"8px 10px",borderRadius:"10px",backgroundColor:"#abff006e",maxWidth:"min-content"}}>
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

export default BooksAdmin