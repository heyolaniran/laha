import { Link,useNavigate } from "react-router-dom"

const Registercard = () => {
    const navigate = useNavigate()
    const handleSubmit = (e)=>{
        e.preventDefault();
        
        // navigator.push('ds')
        navigate('/pass')
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
                    <span className="" style={{color:"#bb8f47 ",fontSize:"22px",fontWeight:"800"}}>LAHACADEMIA</span>
                    
                </Link>
                </div>
                <h4 className="mb-2">L'aventure démarre ici 🚀</h4>
                {/* <p className="mb-4">Make your app management easy and fun!</p> */}

                <form id="formAuthentication" className="mb-3" onSubmit={handleSubmit}>
                <div className="row">
                    <div className="col-lg-6">
                    <div className="mb-3">
                    <label for="username" className="form-label">Nom</label>
                    <input
                    type="text"
                    className="form-control"
                    id="username"
                    name="username"
                    placeholder="Entrer votre nom"
                    autofocus
                    />
                </div>
                
                    </div>
                    <div className="col-lg-6">
                    <div className="mb-3">
                    <label for="username" className="form-label">Prénoms</label>
                    <input
                    type="text"
                    className="form-control"
                    id="prenoms"
                    name="prenoms"
                    placeholder="Entrer vos prénoms"
                    autofocus
                    />
                </div>
                    </div>
                </div>
                <div className="mb-3">
                    <label for="email" className="form-label">Email</label>
                    <input type="text" className="form-control" id="email" name="email" placeholder="Enter votre email" />
                </div>
                <div className="mb-3 form-password-toggle">
                    <label className="form-label" for="password">Mot de passe</label>
                    <div className="input-group input-group-merge">
                    <input
                        type="password"
                        id="password"
                        className="form-control"
                        name="password"
                        placeholder="Entrer votre mot de passe"
                        aria-describedby="password"
                    />
                    </div>
                </div>
                <div className="mb-3 form-password-toggle">
                    <label className="form-label" for="password">Confirmer mot de passe</label>
                    <div className="input-group input-group-merge">
                    <input
                        type="password"
                        id="password"
                        className="form-control"
                        name="password"
                        placeholder="Confirmer votre mot de passe"
                        aria-describedby="password"
                    />
                    </div>
                </div>

                <div className="mb-3">
                    <div className="form-check">
                    <input className="form-check-input" type="checkbox" id="terms-conditions" name="terms" />
                    <label className="form-check-label" for="terms-conditions">
                        J'accepte les 
                        <a > conditions & termes d'utilisations</a>
                    </label>
                    </div>
                </div>
                <button className="btn d-grid w-100" style={{background:"#bb8f47",color:"white"}}>S'Inscrire</button>
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

export default Registercard