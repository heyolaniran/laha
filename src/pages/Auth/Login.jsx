import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../../reducers/modules/Auth/login";
import { SET_AUTH_RESET } from "../../reducers/modules/Auth/mutation";

const Login = ()=>{
  useEffect(() => {
  // dispatch({type:SET_AUTH_RESET})
  }, [])
  
  const dispatch =  useDispatch();
    const navigator = useNavigate();
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    // const [error, setError] = useState(false)
    const {isLoading,message,messageType,isAuth,user} = useSelector((state)=>state.auth);

    const handleSubmit=(e)=>{
        e.preventDefault();
        dispatch(login({email,password}))
    }
    useEffect(()=>{
      if(isAuth === true){
        navigator("/mon_compte")
      }
    },[isAuth])
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
                  {message != "" && (<div className={"mb-2 alert alert-"+messageType} >{message}</div>) }
    
                  <form id="formAuthentication" onSubmit={handleSubmit} className="mb-3" >
                  {!isLoading ?(<><div className="mb-3">
                      <label htmlFor="email" className="form-label">Email ou Numéro de téléphone</label>
                      <input
                        type="text"
                        className="form-control"
                        id="email"
                        value={email}
                        name="email-username"
                        placeholder="Entrer votre email ou numéro de téléphone"
                        autofocus
                        required
                        onChange={(e)=>setEmail(e.target.value)}
                      />
                    </div>
                    <div className="mb-3 form-password-toggle">
                      <div className="d-flex justify-content-between">
                        <label className="form-label" htmlFor="password">Mot de passe</label>
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
                          required
                          placeholder="Votre mot de passe"
                          aria-describedby="password"
                          onChange={(e)=>setPassword(e.target.value)}
                        />
                        {/* <span className="input-group-text cursor-pointer"><i className="bx bx-hide"></i></span> */}
                      </div>
                    </div>
                    
                    <div className="mb-3">
                      <button className="btn btn-primary d-grid w-100" style={{background:"#32CD32",border:"none"}} type="submit">Connexion</button>
                    </div></>):(<div className="mb-3 offset-5 mt-4">
                      <div className="spinner-grow text-primary"></div>
                    </div>)}
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
export default Login;