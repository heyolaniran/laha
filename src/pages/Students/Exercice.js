
import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom'
import Bannerother from '../../layouts/Students/Bannerother'
import ExerciceCards from '../../layouts/Students/Exercice'

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

    console.log('exo', exo)
    }
    const navigate = useNavigate();
    const handleSubmit = (e)=>{
        e.preventDefault();
        navigate('/exercices/'+id+'/corriger')
        
    }
    
  return (
    <>
    
     <Bannerother actu='Exercice sur les droites' previous='Exercices' image='teache (3).svg' />
        
        <div className='row'>
        <div className="col-lg-8 offset-2 mt-5 py-4">
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
                                 <textarea name="" id="" cols="50" rows={10} className="mt-3" style={{width:"85%"}}></textarea>
                                </>
                            })}
                        </ol>

                    </div>
                    <button className='btn_1 mx-4 my-5' onClick={handleSubmit}>Soumettre</button>
                </div>
            </div>
        </div>
        
    </>
  )
}

export default Exercice