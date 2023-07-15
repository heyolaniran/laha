import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import LayoutStudent from "../../../layouts/Admin/Student/Layout";
import { useDispatch, useSelector } from "react-redux";
import { getCours,getCourFiltre, resetCours } from "../../../reducers/modules/Cour/list";
import { getSubjects } from "../../../reducers/modules/Subject/list";
import { filterList, findById, findList } from '../../../utils'

const MesCours = () => {
  const dispatch = useDispatch();
  const [showFiltre, setShowFiltre] = useState(false)
  const [isSearch, setIsSearch] = useState(false)
  const [reload, setReload] = useState(false)
  useEffect(() => {
    dispatch(getCours());
    //dispatch(getSubjects());

    return ()=>{
      dispatch(resetCours())
    }
  }, [reload]);
 
  const {items,isLoading,searchItems} = useSelector(state=>state.cours.list);

  const allCours = items;

  //const subjectReduce = useSelector((state)=>state.subjects.list);

  const search =(param)=>{
    if(param.length == 0){
      setIsSearch(false)
    }else{
      setIsSearch(true)
  
      dispatch(getCourFiltre(param));
    }
    // setReload(!reload);
  }

  return (
    <LayoutStudent actif="cours">
      <div className="container-xxl flex-grow-1 container-p-y">
        <h4 className="fw-bold py-3 mb-4">
          <span className="text-muted fw-light">Dashboard /</span> Cours
        </h4>
        <h5 className='text-muted' onClick={(e)=>setShowFiltre(!showFiltre)}>Filtre <i className='bx bx-filter' style={{fontSize:"25px"}}></i></h5>
            {showFiltre && (<div className="row my-3">
     <div onClick={(e)=>search([])} className='cursor-pointer' style={{padding:"4px 15px 4px 2px",margin:"5px 10px",backgroundColor:"#bb8f475c",width:"max-content",borderRadius:"20px",display:"flex",alignItems:"center"}}> <div className="" style={{padding:"4px 14px",backgroundColor:"white",borderRadius:"15px",fontWeight:"bolder",color:"#bb8f47"}}>{allCours.length}</div><span style={{margin:"0px 5px"}}>Tout</span> </div>
     {/*subjectReduce.items && (subjectReduce.items.map((sub)=>{
     return <div className='cursor-pointer' onClick={(e)=>search([{name:"subjectId",value:sub.id}])} style={{padding:"4px 15px 4px 2px",margin:"5px 10px",backgroundColor:"#bb8f475c",width:"max-content",borderRadius:"20px",display:"flex",alignItems:"center"}}> <div className="" style={{padding:"4px 14px",borderRadius:"15px",fontWeight:"bolder",color:"#bb8f47"}}>{filterList(allCours,'subjectId',sub.id)?.length}</div><span style={{margin:"0px 5px"}}>{sub.name}</span> </div>
     })) */}

     </div>)}
        {!isSearch && ( allCours.length> 0 ? (
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-4 mb-5">
          {allCours.map((cour) => {
            return (
              <div className="col">
                <div className="card h-100">
                  <img
                    className="card-img-top"
                    src={cour.picture}
                    alt="Card image cap"
                    style={{minHeight:"40%",maxHeight:"40%",width:"100%"}}
                  />
                  <div className="card-body">
                    <span className="badge bg-label-primary me-1 mb-4">
                      {/*findById(subjectReduce.items,cour.subjectId)?.name*/}
                    </span>
                    <Link to={"/cours/" + cour.id}>
                      <h5 className="card-title" style={{ color: "#007cff" }}>
                        {cour.titre}
                      </h5>
                    </Link>

                    <p className="card-text">
                      {cour.resumer.substring(0,25) + "..."}
                    </p>
                   
                  </div>
                  <div className="card-footer">
                  <hr />
                  <div className="row">

                      <div className="col-12 " style={{display:"flex"}}>
                  

                        <img
                          src="/template/snaet/assets/img/avatars/5.png"
                          alt="Avatar"
                          className="rounded-circle"
                          style={{ width: "50px",height:"50px" }}
                        />
                        <div className="mr-3" style={{marginLeft:"10px"}}>
                        <div className="">
                          <b>{cour.userId}</b>
                        </div>
                        <div className="">
                          <i>Professeur</i>
                        </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>):(!isLoading ? (<div>Il n'y a pas de cours pour votre niveau actuellement</div>):(<><div className="my-5" ><div className="spinner-grow text-primary" role="status" ><span className="visually-hidden">Loading...</span></div></div></>)))}
       
       
        {isSearch && ( searchItems.length> 0 ? (
        <div className="row row-cols-1 row-cols-md-3 g-4 mb-5">
          {searchItems.map((cour) => {
            return (
              <div className="col">
                <div className="card h-100">
                  <img
                    className="card-img-top"
                    src="/template/etrain-master/img/teache (4).svg"
                    alt="Card image cap"
                  />
                  <div className="card-body">
                    <span className="badge bg-label-primary me-1 mb-4">
                     Sujet 
                    </span>
                    <Link to={"/cours/" + cour.id}>
                      <h5 className="card-title" style={{ color: "#007cff" }}>
                        {cour.titre}
                      </h5>
                    </Link>

                    <p className="card-text">
                      {cour.resumer.split(" ").slice(0, 15).join(" ") + "..."}
                    </p>
                    <hr />
                    <div className="row">
                      <div className="col-12" style={{display:"flex"}}>
                        <img
                          src="/template/snaet/assets/img/avatars/5.png"
                          alt="Avatar"
                          className="rounded-circle"
                          style={{ width: "50px" }}
                        />
                        <div className="mr-3" style={{marginLeft:"10px"}}>
                        <div className="">
                          <b>{cour.auteur}</b>
                        </div>
                        <div className="">
                          <i>Professeur</i>
                        </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>):(!isLoading ? (<div>Il n'y a pas de cours pour votre niveau actuellement</div>):(<><div className="my-5" ><div className="spinner-grow text-primary" role="status" ><span className="visually-hidden">Loading...</span></div></div></>)))}
      </div>
    </LayoutStudent>
  );
};

export default MesCours;
