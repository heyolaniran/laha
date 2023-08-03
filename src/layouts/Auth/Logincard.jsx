import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const LoginCard = ()=>{
    const navigator = useNavigate();
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState(false)

    
    const handleSubmit=(e)=>{
        e.preventDefault()

        setError(false);
        if(password.length != 0 && email.length != 0 && password != " " && email != " "){
            if(email == "admin@test.com"){
                localStorage.setItem("isAuth",true);
                localStorage.setItem("firstname","Admin");
                localStorage.setItem("email","admin@test.com");
                localStorage.setItem("lastname","Test");
                localStorage.setItem("role","admin");
                
            }else if(email =="etu@test.com"){
                localStorage.setItem("isAuth",true);
                localStorage.setItem("firstname","Etudiant");
                localStorage.setItem("email","etu@test.com");
                localStorage.setItem("lastname","Test");
                localStorage.setItem("classe","2nd");
                localStorage.setItem("birthday","2001-04-05");
                localStorage.setItem("country","Bénin");
                localStorage.setItem("password",password);
                localStorage.setItem("role","student");
            }
            else if(email =="prof@test.com"){
                localStorage.setItem("isAuth",true);
                localStorage.setItem("firstname","Professeur");
                localStorage.setItem("email","prof@test.com");
                localStorage.setItem("lastname","Test");
                localStorage.setItem("matiere","Mathématique");
                localStorage.setItem("birthday","1991-04-05");
                localStorage.setItem("country","Bénin");
                localStorage.setItem("password",password);
                localStorage.setItem("role","prof");
            
            }
            else if(email =="super@test.com"){
                localStorage.setItem("isAuth",true);
                localStorage.setItem("firstname","Super");
                localStorage.setItem("email","super@test.com");
                localStorage.setItem("lastname","Admin");
                // localStorage.setItem("matiere","Mathématique");
                localStorage.setItem("birthday","1987-04-05");
                localStorage.setItem("country","Bénin");
                localStorage.setItem("password",password);
                localStorage.setItem("role","super");
            }else{
                setError(true)
            }
            if(!error ){
                navigator("/mon_compte");
            }
        } else{
            setError(true)
        }
       
    }
    return(
        <div className="container-xxl">
          <div className="authentication-wrapper authentication-basic container-p-y">
            <div className="authentication-inner">
              <div className="card">
                <div className="card-body">
                  <div className="app-brand justify-content-center">
                    <a  className="app-brand-link gap-2">
                      <img src="/template/etrain-master/img/favicon.png" alt="" style={{width:"100px",height:"100px",objectFit:"contain"}}/>
                      <span className=" " style={{color:"#32CD32 ",fontSize:"22px",fontWeight:"800"}}>GESCO</span>
                    </a>
                  </div>
                  <h4 className="mb-2">Bienvenu(e) 👋</h4>
                  <p className="mb-4">Connectez-vous à votre compte pour apprendre</p>
                  {error && (<p className="mb-2 " style={{fontWeight:"900",color:"red"}}>Email ou mot de passe incorrecte</p>) }
    
                  <form id="formAuthentication" onSubmit={handleSubmit} className="mb-3" >
                    <div className="mb-3">
                      <label for="email" className="form-label">Email ou Numéro de téléphone</label>
                      <input
                        type="text"
                        className="form-control"
                        id="email"
                        value={email}
                        name="email-username"
                        placeholder="Entrer votre email ou numéro de téléphone"
                        autofocus
                        onChange={(e)=>setEmail(e.target.value)}
                      />
                    </div>
                    <div className="mb-3 form-password-toggle">
                      <div className="d-flex justify-content-between">
                        <label className="form-label" for="password">Mot de passe</label>
                        <Link to="/forget-password" href="auth-forgot-password-basic.html">
                          <small>Mot de passe oublié?</small>
                        </Link>
                      </div>
                      <div className="input-group input-group-merge">
                        <input
                          type="password"
                          id="password"
                          value={password}
                          className="form-control"
                          name="password"
                          placeholder="Votre mot de passe"
                          aria-describedby="password"
                          onChange={(e)=>setPassword(e.target.value)}
                        />
                        {/* <span className="input-group-text cursor-pointer"><i className="bx bx-hide"></i></span> */}
                      </div>
                    </div>
                    
                    <div className="mb-3">
                      <button className="btn btn-primary d-grid w-100" style={{background:"#32CD32",border:"none"}} type="submit">Connexion</button>
                    </div>
                  </form>
    
                  <p className="text-center">
                    <span>Vous etes nouveau ?</span>
                    <Link to="/register" href="auth-register-basic.html">
                      <span>Créer un compte</span>
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>)
}
export default LoginCard;