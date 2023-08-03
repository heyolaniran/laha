import { Link,useNavigate } from "react-router-dom";


const Registersecond = () => {
    const navigate = useNavigate();
  const handleSubmit = (e)=>{
    e.preventDefault();
    navigate('/login')
  }
  return (
    <div className="container-xxl">
        <div className="authentication-wrapper authentication-basic container-p-y">
        <div className="authentication-inner ">
            
            <div className="card">
            <div className="card-body">
            
                <div className="app-brand justify-content-center">
                <Link to="/register" href="index.html" className=" gap-2">
                <img src="template/etrain-master/img/favicon.png" alt="" style={{width:"100px",height:"100px",objectFit:"contain"}}/>
                    <span className="" style={{color:"#1E90FF ",fontSize:"22px",fontWeight:"800"}}>EDUTECH</span>
                    
                </Link>
                </div>
                <h4 className="mb-2">Vos informations personnelles 😁</h4>
                {/* <p className="mb-4">Make your app management easy and fun!</p> */}

                <form id="formAuthentication" className="mb-3" onSubmit={handleSubmit}>
                    <div className="mb-3 mt-3">
                        <label for="exampleDataList" className="form-label">Votre Pays</label>
                        <input
                          className="form-control"
                          list="datalistOptions"
                          id="exampleDataList"
                          placeholder="Taper pour rechercher"
                        />
                        <datalist id="datalistOptions">
                          <option value="Bénin">+229</option>
                          <option value="Togo">+228</option>
                          <option value="Cote d'Ivoire">+225</option>
                          <option value="Burkina-faso">+226</option>
                          <option value="Sénégal">+223</option>
                        </datalist>
                    </div>
                    <div className="mb-3 mt-3">
                        <label for="exampleDataList" className="form-label">Votre classe</label>
                        <input
                          className="form-control"
                          list="datalistOptionss"
                          id="exampleDatsaList"
                          placeholder="Taper pour rechercher"
                        />
                        <datalist id="datalistOptionss">
                          <option value="CI">CI</option>
                          <option value="CP">CP</option>
                          <option value="CE1">CE1</option>
                          <option value="CM1">CM1</option>
                          <option value="CM2">CM2</option>
                          <option value="Sixiéme">6eme</option>
                          <option value="Cinquieme">5eme</option>
                          <option value="Quatrieme">4eme</option>
                          <option value="Troisieme">3eme</option>
                          <option value="Seconde">2nd</option>
                          <option value="Premier">1er</option>
                          <option value="Terminale">Tle</option>
                        </datalist>
                    </div>
               
                <div className="mb-3">
                    <label for="email" className="form-label">Numéro de téléphone</label>
                    <input type="text" className="form-control" id="email" name="email" placeholder="Entrer votre numéro de téléphone" />
                </div>
                <div className="mb-3">
                    <label for="email" className="form-label">Date d'anniversaire</label>
                  
                          <input className="form-control" type="date"  id="html5-date-input" />
                   
                </div>
                
                

                
                <button className="btn d-grid w-100" style={{background:"#1E90FF",color:"white"}}>Enregistrer</button>
                </form>

                <p className="text-center">
                <span>Vous avez déjà un compte?</span>
                <Link to="/login">
                    <span>Se connecter</span>
                </Link>
                </p>
            </div>
            </div>
        </div>
        </div>
    </div>
  )
}

export default Registersecond