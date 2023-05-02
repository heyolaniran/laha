
import  { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import LayoutStudent from "../../../layouts/Admin/Student/Layout";
import { useDispatch, useSelector } from "react-redux";
import { getExercice,  resetExercices } from "../../../reducers/modules/Exercice/list";
import { getSubjects } from "../../../reducers/modules/Subject/list";
import { findById } from '../../../utils'
const Corriger = () => {
    const {id} = useParams();
    const dispatch = useDispatch();
    const [reload, setReload] = useState(false)
    const [proposes, setProposes] = useState({})
    useEffect(() => {
        const propositions = localStorage.getItem("propose");
        setProposes(JSON.parse(propositions))
        dispatch(getExercice(id));
        dispatch(getSubjects());
        return ()=>{
          dispatch(resetExercices())
        }
    }, [reload]);

    const {isLoading,items} = useSelector((state)=> state.exercices.list);
    const subjectReduce= useSelector((state)=> state.subjects.list);
    const exo = items;
    

    const navigate = useNavigate();
    const handleBack = (e)=>{
        e.preventDefault();
        navigate('/exercices/'+id);
        
    }
    
  return (
    <LayoutStudent actif="exos">
        {!isLoading?(<div className="container-xxl flex-grow-1 container-p-y">
        <h4 className="fw-bold py-3 mb-4">
          <span className="text-muted fw-light">Dashboard /</span>
          <Link to={"/exercices"} className="text-muted fw-light">Exercices /</Link>
          {exo.titre}
           
        </h4>
   <div className='row'>
        <div className="col-lg-10 offset-1 mt-2 py-4">
            <div className='row'>
                <div className='col-lg-8'>
                    <button className='btn btn-outline-secondary mb-4' onClick={handleBack}>Retour sur l'exercice</button>

                </div>
                <div className='col-lg-4' style={{textAlign:"end"}}>
                    <div className='row'>
                        <div className='px-4 py-4' >
                            {/* <i className='fas fa-pencil'></i> */}
                        </div>
                    </div> 
                </div>
            </div>
                <div className="card pt-5 px-5" id='print'>
                    <div className="card-title row">
                        <div className='col-lg-6'>
                            <h4><u>Exercice de {findById(subjectReduce.items,exo.subjectId)?.name}</u></h4>
                        </div>
                        <div className='col-lg-6' style={{textAlign:"end"}} onClick={(e)=>{
                                window.print(document.getElementById('print').innerHTML)
                        }}>  
                          <i className='bx bx-printer bx-border-circle px-3 py-3' style={{cursor:"pointer"}} ></i>
                        </div>
                        
                    </div>
                    <div className="row my-5">
                        
                        <div className="col-lg-9">
                            <h3>Objet: {exo.titre}</h3>
                        </div>
                        <div className="col-lg-3 " style={{textAlign:"end"}}> <b>Durée:</b> {exo.time}</div>
                        
                    </div><div className="mb-2">
                            <b>Problemes:</b>
                        </div>
                    <div className="mb-5 px-4">
                        <p>{exo.descriptions}</p>
                    </div>
                    <div className="">
                        <b>Corriger:</b>
                        <ol>
                            {exo.qr && exo.qr.map((quiz,index)=>{
                                return( <>
                                    <li className='mt-3' ><b>{quiz.question}</b></li>
                                    <div className='mt-3 my-3 mb-4  px-5 py-3' style={{color:"",fontWeight:'bold'}}> <u>Votre reponse:</u> <span style={{color:"grey"}}>{proposes[index]}</span></div>
                                    <div className='mt-3 my-3 mb-4  px-5 py-3' style={{color:"green",fontWeight:'bold'}}> <u>Bonne reponse:</u> <span style={{color:"grey"}}>{quiz.reponse}</span></div>
                                </>)
                            })}
                        </ol>

                    </div>
                 
                    {/* <button className='btn_1 mx-4 my-5' onClick={handleSubmit}>Reprendre l'exo</button> */}
                </div>
            </div>
        </div>
        </div>):(<>Loading...</>)}
  </LayoutStudent>
  )
}

export default Corriger