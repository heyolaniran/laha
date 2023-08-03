import { useEffect,useState } from 'react'
import { Link } from 'react-router-dom'
import LayoutStudent from '../../../layouts/Admin/Student/Layout'
import { useDispatch, useSelector } from 'react-redux'
import { getQuizFiltre, getQuizs,resetQuizs } from '../../../reducers/modules/Quiz/list'
import { createQuiz } from '../../../reducers/modules/Quiz/create' 
import { updateQuiz } from '../../../reducers/modules/Quiz/update' 
import { deleteQuiz } from '../../../reducers/modules/Quiz/delete' 
import { filterList, findById } from '../../../utils'
import { getUsers,resetUsers } from '../../../reducers/modules/User/list'
import { getSubjects,resetSubjects } from '../../../reducers/modules/Subject/list'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import PerfectScrollbar from 'react-perfect-scrollbar'

const Questions = () => {
  const myAlert = withReactContent(Swal);
  const dispatch = useDispatch();
  const [showFiltre, setShowFiltre] = useState(false)
  const [isSearch, setIsSearch] = useState(false)
  const [reload, setReload] = useState(false)
  const [update, setUpdate] = useState(false)
  const [formQuiz, setFormQuiz] = useState({});
  useEffect(() => {
    dispatch(getUsers());

    setFormQuiz({})
    dispatch(getQuizs());
    dispatch(getSubjects());
    return ()=>{
      dispatch(resetQuizs());
      dispatch(resetUsers());
      dispatch(resetSubjects());
    }
  }, [reload]);
 
  
  const {items,isLoading,searchItems} = useSelector(state=>state.quizs.list);
//  const quizUpdateReduce = useSelector(state=>state.quizs.update);
//  const quizDeleteReduce = useSelector(state=>state.quizs.delete);
//  const quizCreateReduce = useSelector(state=>state.quizs.create);


  const userReduce = useSelector((state)=>state.users.list);
  const auth = useSelector((state)=>state.auth);
  const subjectReduce = useSelector((state)=>state.subjects.list);
 
const [modale, setModale] = useState(false);
const handleCreate = (e)=>{
  e.preventDefault();
  setIsSearch(false)
  const userAuth = auth.user;
  dispatch(createQuiz({...formQuiz,reponses:[],userId:userAuth.id}))
  setModale(false);
  setReload(!reload)
  
}
const handleUpdate = ()=>{
  dispatch(updateQuiz(formQuiz))
  setUpdate(false);
  setModale(false);
  setReload(!reload)
}
const handleDelete = (e,id)=>{
  e.preventDefault();
  myAlert.fire({
    title: 'Suppression d\'une question',
    text: "Vous ne pourrez pas revenir en arrière !!",
    icon: 'error',
    showCancelButton: true,
    confirmButtonColor: '#d33',
    cancelButtonColor: 'btn btn-secondary',
    confirmButtonText: 'Oui, supprimer',
    cancelButtonText:"Annuler",
    footer:"<a href='/questions/"+id+"' target='_blank'>Voir la question</a>"
  }).then(function(result){
    if (result.isConfirmed) {
       dispatch(deleteQuiz(id))
        setReload(!reload);
    }
  })
  
}

const search =(param)=>{
  if(param.length == 0){
    setIsSearch(false)
  }else{
    setIsSearch(true)

    dispatch(getQuizFiltre(param));
  }
  // setReload(!reload);
}

  const quizs = items;
  return (<>
      {modale && (<div className="" style={{width:"100%",height:"100%",position:"fixed",backgroundColor:"#000000ac",zIndex:2000}}>
        <div className="card-body col-lg-4 col-md-8 col-11" style={{position:"absolute",top:"50%",left:"50%",transform:'translate(-50%,-50%)',backgroundColor:"white" }}>
          <div className="row">
            <div className="col-11">
              {update ?<h4>Modifier une question</h4> :<h4>Enregistrer une question</h4>}
            </div>
            <div className="col-1 text-end">
              <i className='bx bx-x text-danger cursor-pointer' style={{fontSize:"19px"}} onClick={(e)=>setModale(false)}></i>
            </div>
          </div>
          <p className='mt-1'>
            <span style={{fontWeight:"lighter",fontSize:"14px"}}>Pour une meilleure satisfation,poser vos questions avec le plus de detail possible</span></p>
          <div className="row mt-2">
            <form onSubmit={update? handleUpdate :handleCreate}>
            <div className="form-group mb-2">
                <label htmlFor="description">Matiere</label>
                <select type="text" id='description' className="form-control" required 
                value={formQuiz.category} onChange={(e)=>setFormQuiz({...formQuiz,category:e.target.value})}  >
                  <option value="" selected disabled></option>
                  {subjectReduce.items.map((subject)=>{
                    return <option value={subject.id} key={subject.id}>{subject.name}</option>
                  })}
                </select>
              </div>
              <div className="form-group mb-2">
                <label htmlFor="titre">Titre</label>
                <input type="text" id='titre' className="form-control" required  value={formQuiz.titre} onChange={(e)=>setFormQuiz({...formQuiz,titre:e.target.value})}  />
              </div>
              <div className="form-group mb-2">
                <label htmlFor="description">Description</label>
                <textarea type="text" id='description' className="form-control" required  value={formQuiz.resumer} onChange={(e)=>setFormQuiz({...formQuiz,resumer:e.target.value})}  ></textarea>
              </div>
              
              <div class="modal-footer">
                <button type="button" class="btn btn-outline-secondary" onClick={(e)=>setModale(false)} >
                  Fermer
                </button>
                {update ? <button type="submit" class="btn btn-success" >Modifier</button>:
                <button type="submit" class="btn btn-primary" >Enregistrer</button>}
              </div>
            </form>
          </div>
        </div>
      </div>)}

    <LayoutStudent actif="qr">
      <div className="" onClick={(e)=>search([{name:"userId",value:auth.user.id}])} style={{position:"fixed",bottom:"130px",right:"20px",padding:"10px",borderRadius:"60px",zIndex:5,backgroundColor:'#c6c6ddb0',cursor:"pointer"}}><i className='bx bx-chat' style={{fontSize:"25px",color:"#7777ff"}}></i> <b style={{paddingLeft:"10px",paddingRight:"5px"}}>Mes questions</b></div>
      <div className="" onClick={(e)=>{setModale(true);setUpdate(false);setFormQuiz({})}} style={{position:"fixed",bottom:"70px",right:"20px",padding:"10px",borderRadius:"60px",zIndex:5,backgroundColor:'#ebddc8b8',cursor:"pointer"}}><i className='bx bx-plus' style={{fontSize:"25px",color:"#32CD32"}}></i> <b style={{paddingLeft:"10px",paddingRight:"5px"}}>Poser une question</b></div>
    <div className="container-xxl flex-grow-1 container-p-y">
     <div className="row">
      <div className="col-12">
      <h4 className="fw-bold py-3 mb-4">
        <span className="text-muted fw-light">Dashboard /</span> Questions
      </h4>
      </div>
     </div>
     <h5 className='text-muted' onClick={(e)=>setShowFiltre(!showFiltre)}>Filtre <i className='bx bx-filter' style={{fontSize:"25px"}}></i></h5>
     {showFiltre && (<div className="row">
     <div onClick={(e)=>search([])} className='cursor-pointer' style={{padding:"4px 15px 4px 2px",margin:"5px 10px",backgroundColor:"#32CD325c",width:"max-content",borderRadius:"20px",display:"flex",alignItems:"center"}}> <div className="" style={{padding:"4px 14px",backgroundColor:"white",borderRadius:"15px",fontWeight:"bolder",color:"#32CD32"}}>{quizs.length}</div><span style={{margin:"0px 5px"}}>Tout</span> </div>
     {subjectReduce.items && (subjectReduce.items.map((sub)=>{
     return <div className='cursor-pointer' onClick={(e)=>search([{name:"category",value:sub.id}])} style={{padding:"4px 15px 4px 2px",margin:"5px 10px",backgroundColor:"#32CD325c",width:"max-content",borderRadius:"20px",display:"flex",alignItems:"center"}}> <div className="" style={{padding:"4px 14px",borderRadius:"15px",fontWeight:"bolder",color:"#32CD32"}}>{filterList(quizs,'category',sub.id)?.length}</div><span style={{margin:"0px 5px"}}>{sub.name}</span> </div>
     }))}

     </div>)}
     {/* {quizCreateReduce.message !="" && (<div className={"mb-2 alert alert-success"} >{quizCreateReduce.message}</div>) }
     {quizUpdateReduce.message !="" && (<div className={"mb-2 alert alert-warning"} >{quizUpdateReduce.message}</div>) }
     {quizDeleteReduce.message !="" && (<div className={"mb-2 alert alert-danger"} >{quizDeleteReduce.message}</div>) } */}
      <hr />
      {!isSearch && (quizs.length> 0 ? (
      <div className="row">
        {quizs.map((quiz)=>{
            return (<div className="col-sm-6 col-lg-4 mt-2 mb-5  ">
            <div className="single_special_cource card px-4 py-3">
                {auth.user &&(
                  auth.user.id == quiz.userId &&(
                    <div className="" style={{display:"flex",justifyContent:"flex-end"}}>
                <div className="cursor-pointer" onClick={(e)=>{
                  
                  handleDelete(e,quiz.id);}} style={{padding:"5px",borderRadius:"10px",backgroundColor:"#ff00001f"}}>
                  <i className='bx bx-trash' style={{color:"red"}}></i>
                </div>
                {quiz.reponses && (
                  quiz.reponses.length ==0 && (
                    <div className="mx-2 cursor-pointer" onClick={(e)=>{
                      e.preventDefault();
                      setFormQuiz(quiz);
                      setUpdate(true)
                      setModale(true)
                    }}  style={{padding:"5px",borderRadius:"10px",backgroundColor:"#007bff4d"}}>
                  <i className='bx bx-pencil' style={{color:"#007bff"}}></i>
                </div>
                  )
                )}
              </div>
                  )
                )}
                <img src="/template/etrain-master/img/quiz.svg" className="special_img" alt="" />
                <div className="special_cource_text" >
                    <Link to={"/questions/"+quiz.id} className=" mb-2 badge bg-label-primary" >{findById(subjectReduce.items,quiz.category)?.name} </Link>
                    {/* <Link to={"/questions/"+quiz.id} className=" mb-5 " ><i  className="mb-2 ml-1">~ {quiz.category}</i> </Link> */}
                    <Link to={"/questions/"+quiz.id}><h3>{quiz.titre}</h3></Link>
                    <p className='mt-3'>{quiz.resumer}</p>
                    
                </div>
                <hr />
                <div className="row">
                      <div className="col-9" style={{display:"flex"}}>
                        <img
                          src="/template/snaet/assets/img/avatars/5.png"
                          alt="Avatar"
                          className="rounded-circle"
                          style={{ width: "50px",maxWidth:"50px",maxHeight:"50px" }}
                        />
                        <div className="mr-3" style={{marginLeft:"10px"}}>
                        <div className="">
                          {
                            quiz.userId == auth.user.id ?(<b>Vous</b>):(
                              <b>{findById(userReduce.items,quiz.userId)?.firstname +" "+findById(userReduce.items,quiz.userId)?.surname}</b>
                            )
                          }
                          
                        </div>
                        <div className="">
                          <i>Apprenant</i>
                        </div>
                        </div>
                      </div>
                    
                
                {quiz.reponses && (
                  <div className="col-lg-3"><i className="bx bx-message-rounded"></i> {quiz.reponses.length}</div>
                )}
               </div>

            </div>
        </div>);
        })}
      </div>):(!isLoading ? (<div>Il n'y a pas de questions pour votre niveau actuellement</div>):(<><div className="my-5" ><div className="spinner-grow text-primary" role="status" ><span className="visually-hidden">Loading...</span></div></div></>)))}
      {isSearch && (searchItems.length> 0 ? (
      <div className="row">
        {searchItems.map((quiz)=>{
            return (<div className="col-sm-6 col-lg-4 mt-2 mb-5  ">
            <div className="single_special_cource card px-4 py-3">
                {auth.user &&(
                  auth.user.id == quiz.userId &&(
                    <div className="" style={{display:"flex",justifyContent:"flex-end"}}>
                <div className="cursor-pointer" onClick={(e)=>{
                  
                  handleDelete(e,quiz.id);}} style={{padding:"5px",borderRadius:"10px",backgroundColor:"#ff00001f"}}>
                  <i className='bx bx-trash' style={{color:"red"}}></i>
                </div>
                {quiz.reponses && (
                  quiz.reponses.length ==0 && (
                    <div className="mx-2 cursor-pointer" onClick={(e)=>{
                      e.preventDefault();
                      setFormQuiz(quiz);
                      setUpdate(true)
                      setModale(true)
                    }}  style={{padding:"5px",borderRadius:"10px",backgroundColor:"#007bff4d"}}>
                  <i className='bx bx-pencil' style={{color:"#007bff"}}></i>
                </div>
                  )
                )}
              </div>
                  )
                )}
                <img src="/template/etrain-master/img/quiz.svg" className="special_img" alt="" />
                <div className="special_cource_text" >
                    <Link to={"/questions/"+quiz.id} className=" mb-2 badge bg-label-primary" >{findById(subjectReduce.items,quiz.category)?.name} </Link>
                    {/* <Link to={"/questions/"+quiz.id} className=" mb-5 " ><i  className="mb-2 ml-1">~ {quiz.category}</i> </Link> */}
                    <Link to={"/questions/"+quiz.id}><h3>{quiz.titre}</h3></Link>
                    <p className='mt-3'>{quiz.resumer}</p>
                    
                </div>
                <hr />
                <div className="row">
                      <div className="col-9" style={{display:"flex"}}>
                        <img
                          src="/template/snaet/assets/img/avatars/5.png"
                          alt="Avatar"
                          className="rounded-circle"
                          style={{ width: "50px" }}
                        />
                        <div className="mr-3" style={{marginLeft:"10px"}}>
                        <div className="">
                        { 
                            quiz.userId == auth.user.id ?(<b>Vous</b>):(
                              <b>{findById(userReduce.items,quiz.userId)?.firstname +" "+findById(userReduce.items,quiz.userId)?.surname}</b>
                            )
                          }
                        </div>
                        <div className="">
                          <i>Apprenant</i>
                        </div>
                        </div>
                      </div>
                    
                
                {quiz.reponses && (
                  <div className="col-lg-3"><i className="bx bx-message-rounded"></i> {quiz.reponses.length}</div>
                )}
               </div>

            </div>
        </div>);
        })}
      </div>):(!isLoading ? (<div>Vous n'avez pas de questions pour cette filtre</div>):(<><div className="my-5" ><div className="spinner-grow text-primary" role="status" ><span className="visually-hidden">Loading...</span></div></div></>)))}
    </div>
  </LayoutStudent></>
  )
}

export default Questions