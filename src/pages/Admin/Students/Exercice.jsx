import  { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import LayoutStudent from "../../../layouts/Admin/Student/Layout";
import { useDispatch, useSelector } from "react-redux";
import { getExercice,  resetExercices } from "../../../reducers/modules/Exercice/list";
import { getSubjects } from "../../../reducers/modules/Subject/list";
import {  findById } from '../../../utils'

const Exercice = () => {
    const {id} = useParams();
    const dispatch = useDispatch();
    const [reload, setReload] = useState(false)

    useEffect(() => {
        
        dispatch(getExercice(id));
        dispatch(getSubjects());
        return ()=>{
          dispatch(resetExercices())
        }
    }, [reload]);

    const {isLoading,items} = useSelector((state)=> state.exercices.list);
    const subjectReduce= useSelector((state)=> state.subjects.list);

    const [formItem, setformItem] = useState([])
    const navigate = useNavigate();
    const handleSubmit = (e)=>{
        e.preventDefault();
        localStorage.setItem('propose',JSON.stringify(formItem))
        navigate('/exercices/'+id+'/corriger')
        
    }
  return (
    <LayoutStudent actif="exos">
  {
    !isLoading ? (
        <div className="container-xxl flex-grow-1 container-p-y">
        <h4 className="fw-bold py-3 mb-4">
          <span className="text-muted fw-light">Dashboard /</span>
          <Link to={"/exercices"} className="text-muted fw-light">Exercices /</Link>
          {items.titre}
           
        </h4>
   <div className='row'>
        <div className="col-lg-10 offset-1 mt-2 py-4">
                <div className="card pt-5 px-5">
                    <div className="card-title">
                        <h4><u>Exercice de {findById(subjectReduce.items,items.subjectId)?.name}</u></h4>
                    </div>
                    <div className="row my-5">
                        <div className="col-lg-9">
                            <h3>Objet: {items.titre}</h3>
                        </div>
                        <div className="col-lg-3 " style={{textAlign:"end"}}> <b>Durée:</b> {items.time}</div>
                        
                    </div><div className="mb-2">
                            <b>Problemes:</b>
                        </div>
                    <div className="mb-5 px-4">
                        <p>{items.descriptions}</p>
                    </div>
                    <div className="">
                        <b>Questions:</b>
                        <ol>
                            {items.qr && items.qr.map((quiz)=>{
                                return <li className='mt-3' >{quiz.question}</li>
                            })}
                        </ol>

                    </div>
                    <form onSubmit={handleSubmit}>
                    <div className="">
                        <b>Répondre:</b>
                        <p className='mt-2'>Proposer une solution aux questions</p>
                        <ol>
                            {items.qr && items.qr.map((quiz,index)=>{
                                return <>
                                 <li className='mt-3'><b>{quiz.question}</b></li>
                                 <textarea name="" id="" required value={formItem[index]} onChange={(e)=>setformItem({...formItem,[index]:e.target.value})} cols="50"rows={6} className="mt-3" style={{width:"85%"}}></textarea>
                                </>
                            })}
                        </ol>

                    </div>
                    <div className="col-12" style={{display:"flex",justifyContent:"center"}}>
                    <button className='btn btn-outline-primary mx-5 mt-4 mb-5 col-6  ' style={{justifyContent:"center"}} type="submit">Soumettre</button>

                    </div>
                    </form>
                </div>
            </div>
        </div>
        </div>
    ):(<>Loading</>)
  }
  </LayoutStudent>
  )
}

export default Exercice