import axios from 'axios'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import Bannerother from '../../layouts/Students/Bannerother'

const Repetiteurs = () => {
    const [repts, setRepts] = useState([])
    useEffect(() => {
        getAllRept();
    }, [""])

    const getAllRept = async()=>{
        await axios.get('/db/repetitions.json').then(({data})=>{
            setRepts(data)
        })
    }
    const myAlert = withReactContent(Swal);
    const handleDetails= (rep)=>{
        var html = `<div className="row px-2 py-5">
        <div className="col-12"><h4><b>par ${rep.auteur}</b></h4></div>
        <p>${rep.resumer}</p>
        <div style={{display:"flex",alignItems:"center"}}>
            <div className="" style={{width:"30px",height:"30px",borderRadius:"40px",backgroundColor:"lightgray",background:"url('/template/etrain-master/img/author/author_1.png')",backgroundPosition:"center center"}}></div>
        </div>
    </div>` 
        myAlert.fire({
            title: ' '+rep.matiere,
            html: html,
            confirmButtonColor:"#1E90FF",
            confirmButtonText:"Participer",
           
          }).then((result) => {
                if (result.isConfirmed) {
                    myAlert.fire("Bravo","Cette répétition à été ajouté à votre dashbord","success",)
                }
            
          })
    }
    const handleOnlineCours = ()=>{
        var html = `<div className="row px-2 py-5">
        <div className="col-12"><h4><b>Remplissez le formulaire</b></h4></div>
        <p>Maitieres</p>
        <div className="row" style="display:flex">
            <div className="col-lg-4 col-sm-6 col-md-12" style="margin-left:10px">
                <div style="display:flex">
                    <div className="col-4"><input type="checkbox" name="" id="" /></div>
                    <div className="col-7">Mathématique</div>
                </div>
            </div>
            <div className="col-lg-4 col-sm-6 col-md-12" style="margin-left:10px">
                <div style="display:flex">
                    <div className="col-4"><input type="checkbox" name="" id="" /></div>
                    <div className="col-7">PCT</div>
                </div>
            </div>
            <div className="col-lg-4 col-sm-6 col-md-12" style="margin-left:10px">
                <div style="display:flex">
                    <div className="col-4"><input type="checkbox" name="" id="" /></div>
                    <div className="col-7">SVT</div>
                </div>
            </div>
            <div className="col-lg-4 col-sm-6 col-md-12" style="margin-left:10px">
                <div style="display:flex">
                    <div className="col-4"><input type="checkbox" name="" id="" /></div>
                    <div className="col-7">Anglais</div>
                </div>
            </div>
            <div className="col-lg-4 col-sm-6 col-md-12" style="margin-left:10px">
                <div style="display:flex">
                    <div className="col-4"><input type="checkbox" name="" id="" /></div>
                    <div className="col-7">Hist-Géo</div>
                </div>
            </div>
            
        
        </div>
        <p style="margin-top:10px">Nombre d'etudiants</p>
        <input type="number" min="0" max="10" value="1" style="width:60%;margin-top:10px" />
        
    </div>`
        myAlert.fire({
            title: ' Demande cour en ligne',
            html: html,
            confirmButtonColor:"#1E90FF",
            confirmButtonText:"Envoyer",
            cancelButtonText:"Annuler"
           
          }).then((result) => {
                if (result.isConfirmed) {
                    myAlert.fire("Super","Votre requete a été soumise","success",)
                }
            
          })
    }
    const handleOfflineCours = ()=>{
        var html = `<div className="row px-2 py-5">
        <div className="col-12"><h4><b>Remplissez le formulaire</b></h4></div>
        <p>Maitieres</p>
        <div className="row" style="display:flex">
            <div className="col-lg-4 col-sm-6 col-md-12" style="margin-left:10px">
                <div style="display:flex">
                    <div className="col-4"><input type="checkbox" name="" id="" /></div>
                    <div className="col-7">Mathématique</div>
                </div>
            </div>
            <div className="col-lg-4 col-sm-6 col-md-12" style="margin-left:10px">
                <div style="display:flex">
                    <div className="col-4"><input type="checkbox" name="" id="" /></div>
                    <div className="col-7">PCT</div>
                </div>
            </div>
            <div className="col-lg-4 col-sm-6 col-md-12" style="margin-left:10px">
                <div style="display:flex">
                    <div className="col-4"><input type="checkbox" name="" id="" /></div>
                    <div className="col-7">SVT</div>
                </div>
            </div>
            <div className="col-lg-4 col-sm-6 col-md-12" style="margin-left:10px">
                <div style="display:flex">
                    <div className="col-4"><input type="checkbox" name="" id="" /></div>
                    <div className="col-7">Anglais</div>
                </div>
            </div>
            <div className="col-lg-4 col-sm-6 col-md-12" style="margin-left:10px">
                <div style="display:flex">
                    <div className="col-4"><input type="checkbox" name="" id="" /></div>
                    <div className="col-7">Hist-Géo</div>
                </div>
            </div>
            
        
        </div>
        <p style="margin-top:10px">Nombre d'etudiants</p>
        <input type="number" min="0" max="10" value="1" style="width:80%;margin-top:10px" />
        <p style="margin-top:10px">Votre adresse</p>
        <textarea type="text" min="0" max="10" value="1" style="width:80%;margin-top:10px;min-height:100px" > </textarea>
        
    </div>`
        myAlert.fire({
            title: ' Demande cour à domicile',
            html: html,
            confirmButtonColor:"#1E90FF",
            confirmButtonText:"Envoyer",
            cancelButtonText:"Annuler"
           
          }).then((result) => {
            if (result.isConfirmed) {
                myAlert.fire("Super","Votre requete a été soumise","success",)
            }
            
          })
    }
    
  return (
    <>
        <Bannerother actu='Répétitions' previous='Accueil' image='teache (2).svg' />
        
        <div className="row">
            <div className="col-lg-9 offset-lg-1 my-3">
                <h2><b>Programme des répétitions</b></h2>
            </div>
            <div className="col-lg-10 offset-lg-1 mt-3">
                <div className="">
                    <div className="card-body">
                        {repts.length > 0 ?<table className="table table-hover cursor-pointer" style={{cursor:"pointer"}}>
                            <thead>
                                <tr>
                                <th scope="col">Matiere</th>
                                <th scope="col">Professeur</th>
                                <th scope="col">Jours</th>
                                <th scope="col">Horaires</th>
                                <th scope="col">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {repts.map((rept)=>{
                                    return(<tr onClick={(e)=>{
                                        e.preventDefault();
                                        handleDetails(rept)
                                    }} >
                                        <th scope="row">{rept.matiere}</th>
                                        <td>
                                            <div style={{display:"flex",alignItems:"center"}}>
                                                <div className="" style={{width:"30px",height:"30px",borderRadius:"40px",backgroundColor:"lightgray",background:"url('/template/etrain-master/img/author/author_1.png')",backgroundPosition:"center center"}}></div>
                                                <div className="ml-2"><b>{rept.auteur}</b> </div>
                                            </div>
                                        </td>
                                        <td>{rept.days}</td>
                                        <td>{rept.hours}</td>
                                        <td><a href=''>Participer</a></td>
                                    </tr>)
                                })}
                            
                            </tbody> 
                        </table>:<>Pas de cours </>}
                    </div>
                </div>
            </div>

        </div>
            <div className="my-4" style={{display:"flex",justifyContent:"center"}}>
           
                <button onClick={handleOnlineCours} className="btn_1 mr-2" style={{textAlign:"center"}}>Demander de cours en ligne </button>
                <button onClick={handleOfflineCours} className="btn_2 ml-5" style={{textAlign:"center"}}>Demander de cours à domicile </button>
            
        </div>
        
    </>
  )
}

export default Repetiteurs