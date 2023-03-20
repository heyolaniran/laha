import axios from 'axios';
import { useState, useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom'
import LayoutStudent from '../../../layouts/Admin/Student/Layout'

const Exercice = () => {
    const {id} = useParams();
    const [exo,setExo] = useState([]);
    const [allExo,setAllExo] = useState([]);
    useEffect(() => {
      getExercice();
    }, [""])

    const getExercice = async ()=>{
        await axios.get('/db/exercices.json')
                .then(({data})=>{
                    setAllExo(data);
                    // var result = data.filter((ex)=> ex.id == id);
                    // setExo(result)
                    setExo(data[0]);
                })
    }
    const navigate = useNavigate();
    const handleSubmit = (e)=>{
        e.preventDefault();
        navigate('/exercices/'+id+'/corriger')
        
    }
  return (
    <LayoutStudent actif="exos">
   <div className="container-xxl flex-grow-1 container-p-y">
        <h4 className="fw-bold py-3 mb-4">
          <span className="text-muted fw-light">Dashboard /</span>
          <Link to={"/exercices"} className="text-muted fw-light">Exercices /</Link>
          Exercice sur les droites
           
        </h4>
   <div className='row'>
        <div className="col-lg-10 offset-1 mt-2 py-4">
                <div className="card pt-5 px-5">
                    <div className="card-title">
                        <h4><u>Exercice de {exo.matiere}</u></h4>
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
                        <b>Questions:</b>
                        <ol>
                            {exo.qr && exo.qr.map((quiz)=>{
                                return <li className='mt-3' >{quiz.question}</li>
                            })}
                        </ol>

                    </div>
                    <div className="">
                        <b>Répondre:</b>
                        <p className='mt-2'>Proposer une solution aux questions</p>
                        <ol>
                            {exo.qr && exo.qr.map((quiz)=>{
                                return <>
                                 <li className='mt-3'><b>{quiz.question}</b></li>
                                 <textarea name="" id="" cols="50"rows={6} className="mt-3" style={{width:"85%"}}></textarea>
                                </>
                            })}
                        </ol>

                    </div>
                    <div className="col-12" style={{display:"flex",justifyContent:"center"}}>
                    <button className='btn btn-outline-primary mx-5 mt-4 mb-5 col-6  ' style={{justifyContent:"center"}} onClick={handleSubmit}>Soumettre</button>

                    </div>
                </div>
            </div>
        </div></div>
  </LayoutStudent>
  )
}

export default Exercice