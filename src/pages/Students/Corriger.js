
import axios from 'axios'
import { useState,useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Bannerother from '../../layouts/Students/Bannerother'

const Corriger = () => {
    const {id} = useParams();
    const [exo, setExo] = useState({})
    useEffect(() => {
        getExo();
    }, [""])

    const getExo = async()=>{
        await axios.get('/db/exercices.json').then(({data})=>{
            setExo(data[0])
        })
    }
    const navigate = useNavigate();
    const handleBack = (e)=>{
        e.preventDefault();
        navigate('/exercices/'+id);
        
    }
    
  return (
    <>
        <Bannerother actu='Corriger' previous='Exercice sur les droites' image='teache (3).svg' />

        <div className='row'>
        <div className="col-lg-8 offset-2 mt-5 py-4">
            <div className='row'>
                <div className='col-lg-8'>
                    <button className='btn_2 mb-4' onClick={handleBack}>Retour sur l'exercice</button>

                </div>
                <div className='col-lg-4' style={{textAlign:"end"}}>
                    <div className='row'>
                        <div className='px-4 py-4' >
                            {/* <i className='fas fa-pencil'></i> */}
                        </div>
                    </div> 
                </div>
            </div>
                <div className="card pt-5 px-5">
                    <div className="card-title row">
                        <div className='col-lg-6'>
                            <h4><u>Exercice de {exo.matiere}</u></h4>
                        </div>
                        <div className='col-lg-6' style={{textAlign:"end"}}>  
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
                            {exo.qr && exo.qr.map((quiz)=>{
                                return( <>
                                    <li className='mt-3' ><b>{quiz.question}</b></li>
                                    <div className='mt-3 my-3 mb-4'>{quiz.reponse}</div>
                                </>)
                            })}
                        </ol>

                    </div>
                 
                    {/* <button className='btn_1 mx-4 my-5' onClick={handleSubmit}>Reprendre l'exo</button> */}
                </div>
            </div>
        </div>

    </>
  )
}

export default Corriger