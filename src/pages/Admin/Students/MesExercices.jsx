import  { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import LayoutStudent from "../../../layouts/Admin/Student/Layout";
import { useDispatch, useSelector } from "react-redux";
import { getExerciceFiltre, getExercices, resetExercices } from "../../../reducers/modules/Exercice/list";
import { getSubjects } from "../../../reducers/modules/Subject/list";
import { filterList, findList } from '../../../utils'

const MesExercices = () => {
  const dispatch = useDispatch()
  const [showFiltre, setShowFiltre] = useState(false)
  const [isSearch, setIsSearch] = useState(false)
  const [reload, setReload] = useState(false)

  useEffect(() => {
    dispatch(getExercices());
    dispatch(getSubjects());
    return ()=>{
      dispatch(resetExercices())
    }
  }, [reload]);
  
  const exosReduce = useSelector((state)=>state.exercices.list);
  const allExo = exosReduce.items
  const isLoading = exosReduce.isLoading; 
  const searchItems = exosReduce.searchItems;

  const subjectReduce = useSelector((state)=>state.subjects.list);

  const search =(param)=>{
    if(param.length == 0){
      setIsSearch(false)
    }else{
      setIsSearch(true)
  
      dispatch(getExerciceFiltre(param));
    }
    // setReload(!reload);
  }

  return (
    <LayoutStudent actif="exos">
      <div className="container-xxl flex-grow-1 container-p-y">
        <h4 className="fw-bold py-3 mb-4">
          <span className="text-muted fw-light">Dashboard /</span> Exercices
        </h4>   <h5 className='text-muted' onClick={(e)=>setShowFiltre(!showFiltre)}>Filtre <i className='bx bx-filter' style={{fontSize:"25px"}}></i></h5>
            {showFiltre && (<div className="row my-3">
     <div onClick={(e)=>search([])} className='cursor-pointer' style={{padding:"4px 15px 4px 2px",margin:"5px 10px",backgroundColor:"#1E90FF5c",width:"max-content",borderRadius:"20px",display:"flex",alignItems:"center"}}> <div className="" style={{padding:"4px 14px",backgroundColor:"white",borderRadius:"15px",fontWeight:"bolder",color:"#1E90FF"}}>{allExo.length}</div><span style={{margin:"0px 5px"}}>Tout</span> </div>
     {subjectReduce.items && (subjectReduce.items.map((sub)=>{
     return <div className='cursor-pointer' onClick={(e)=>search([{name:"subjectId",value:sub.id}])} style={{padding:"4px 15px 4px 2px",margin:"5px 10px",backgroundColor:"#1E90FF5c",width:"max-content",borderRadius:"20px",display:"flex",alignItems:"center"}}> <div className="" style={{padding:"4px 14px",borderRadius:"15px",fontWeight:"bolder",color:"#1E90FF"}}>{filterList(allExo,'subjectId',sub.id)?.length}</div><span style={{margin:"0px 5px"}}>{sub.name}</span> </div>
     }))}

     </div>)}
        {!isSearch && (allExo.length> 0 ? (
        <div className="row">
         


     <div className="row">
     {allExo.map((cour) => {
            return (
              <div className="col-md-4">
                <div className="card h-100">
                  <img
                    className="card-img-top"
                    src="/template/etrain-master/img/teache (3).svg"
                    alt="Card image cap"
                  />
                  <div className="card-body my-3">
                    <span className="badge bg-label-primary me-1 mb-4">
                      {findList(subjectReduce.items,'id',cour.subjectId)?.name}
                    </span>
                    <Link to={"/exercices/1"}>
                      <h5 className="card-title" style={{ color: "#007cff" }}>
                        {cour.titre}
                      </h5>
                    </Link>

                    <p className="card-text">
                      {cour.resumer.split(" ").slice(0, 15).join(" ") + "..."}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
     </div>
         
          
        </div>):(!isLoading ? (<div>Il n'y a pas de cours pour votre niveau actuellement</div>):(<><div className="my-5" ><div className="spinner-grow text-primary" role="status" ><span className="visually-hidden">Loading...</span></div></div></>)))}
      
        {isSearch && (searchItems.length> 0 ? (
        <div className="row">
            


     <div className="row">
     {searchItems.map((cour) => {
            return (
              <div className="col-md-4">
                <div className="card h-100">
                  <img
                    className="card-img-top"
                    src="/template/etrain-master/img/teache (3).svg"
                    alt="Card image cap"
                  />
                  <div className="card-body my-3">
                    <span className="badge bg-label-primary me-1 mb-4">
                      {findList(subjectReduce.items,'id',cour.subjectId)?.name}
                    </span>
                    <Link to={"/exercices/"+cour.id}>
                      <h5 className="card-title" style={{ color: "#007cff" }}>
                        {cour.titre}
                      </h5>
                    </Link>

                    <p className="card-text">
                      {cour.resumer.split(" ").slice(0, 15).join(" ") + "..."}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
     </div>
         
          
        </div>):(!isLoading ? (<div>Il n'y a pas de cours pour votre niveau actuellement</div>):(<><div className="my-5" ><div className="spinner-grow text-primary" role="status" ><span className="visually-hidden">Loading...</span></div></div></>)))}
      
      </div>
    </LayoutStudent>
  );
};

export default MesExercices;
