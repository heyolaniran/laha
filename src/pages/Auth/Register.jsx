import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { checkCompte, register } from "../../reducers/modules/Auth/register";
import { useEffect } from "react";
import { SET_AUTH_MESSAGE, SET_AUTH_REGISTER_STEP, SET_AUTH_RESET } from "../../reducers/modules/Auth/mutation";

const Register = () => {
  const [item, setItem] = useState({});
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordError, setPasswordError] = useState({
    error: false,
    message: "",
    errorType: "",
  });
  const navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({ type: SET_AUTH_RESET });
  }, [""]);

  const { isLoading, message, messageType, isAuth, user,isRegister,registerStep } = useSelector(
    (state) => state.auth
  );

  const handleFirstSubmit = (e) => {
    e.preventDefault();

    if (confirmPassword === item.password && item.email) {
      if (confirmPassword.length > 5) {
        setPasswordError({ error: false });
        dispatch(checkCompte(item));
        
      } else {
        setPasswordError({
          error: true,
          message: "Votre mot de passe doit comporte au moins 5 caracteres",
          errorType: "confirm",
        });
      }
    } else {
      setPasswordError({
        error: true,
        message: "Mot de passe incorrect",
        errorType: "*",
      });
    }
  };
  const handleSecondSubmit = (e) => {
    e.preventDefault();
    dispatch({type:SET_AUTH_MESSAGE,payload:""})

    dispatch({type:SET_AUTH_REGISTER_STEP,payload:2})
    console.log(item)
     //dispatch(register(item))
  };
  const handleSubmit = async(e) => {
    e.preventDefault();
    
     dispatch(register(item))
     


    // dispatch(register(item))
  };
  if (isRegister == true) {
    
    navigate("/login")
  }
  return (
    <div className="container-xxl">
      <div className="authentication-wrapper authentication-basic container-p-y">
        {/* {JSON.stringify(item)} */}
        {registerStep !== 3 ? (<div className="authentication-inner ">
          <div className="card">
            <div className="card-body">
              <div className="app-brand justify-content-center">
                <Link to="/register"  className=" gap-2">
                  <img
                    src="template/etrain-master/img/favicon.png"
                    alt=""
                    style={{
                      width: "100px",
                      height: "100px",
                      objectFit: "contain",
                    }}
                  />
                  <span
                    className=""
                    style={{
                      color: "#bb8f47 ",
                      fontSize: "22px",
                      fontWeight: "800",
                    }}
                  >
                    LAHACADEMIA
                  </span>
                </Link>
              </div>
              <div className="justify-content-center mb-2 ">
                  
                  <span
                    className=""
                    style={{
                      color: "#bb8f47 ",
                      fontSize: "12px",
                      fontWeight: "200",
                    }}
                  >
                    Etape {registerStep+1 } / 4
                  </span>
                
              </div>
              {registerStep === 0 && (<h4 className="mb-2">L'aventure démarre ici 🚀</h4>)}
              {registerStep === 1 && (<h4 className="mb-2">Vos informations personnelles 😁</h4>)}
              {registerStep === 2 && (<h4 className="mb-2">Votre niveau d'etude</h4>)}
              {registerStep === 3 && (<h4 className="mb-2">Abonnements</h4>)}
              
              
              {/* <p className="mb-4">Make your app management easy and fun!</p> */}
              {message != "" && (
                <div className={"mb-2 alert alert-" + messageType}>
                  {message}
                </div>
              )}
              {/** Step 1 - Demarrage */}
              {!isLoading && (
                registerStep === 0  && (
                  <form
                    id="formAuthentication"
                    className="mb-3"
                    onSubmit={handleFirstSubmit}
                  >
                    <div className="row">
                      <div className="col-lg-12">
                        <div className="mb-3">
                          <label for="username" className="form-label">
                            Nom
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            id="username"
                            value={item.surname}
                            name="username"
                            onChange={(e) =>
                              setItem({ ...item, surname: e.target.value })
                            }
                            placeholder="Entrer votre nom"
                            autofocus
                          />
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <div className="mb-3">
                          <label for="username" className="form-label">
                            Prénoms
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            id="prenoms"
                            value={item.firstname}
                            onChange={(e) =>
                              setItem({ ...item, firstname: e.target.value })
                            }
                            name="prenoms"
                            placeholder="Entrer vos prénoms"
                            autofocus
                          />
                        </div>
                      </div>
                    </div>
                    <div className="mb-3">
                      <label for="email" className="form-label">
                        Email
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="email"
                        name="email"
                        placeholder="Entrer votre email"
                        value={item.email}
                        onChange={(e) =>
                          setItem({ ...item, email: e.target.value })
                        }
                      />
                    </div>
                    <div className="mb-3 form-password-toggle">
                      <label className="form-label" for="password">
                        Mot de passe
                      </label>
                      <div className="input-group input-group-merge">
                        <input
                          type="password"
                          id="password"
                          className="form-control"
                          name="password"
                          value={item.password}
                          onChange={(e) =>
                            setItem({ ...item, password: e.target.value })
                          }
                          placeholder="Entrer votre mot de passe"
                          aria-describedby="password"
                        />
                      </div>
                      {passwordError.error === true &&
                        (passwordError.errorType === "password" ||
                          passwordError.errorType == "*") && (
                          <p className="mt-2 text-danger">
                            <b>{passwordError.message} </b>
                          </p>
                        )}
                    </div>
                    <div className="mb-3 form-password-toggle">
                      <label className="form-label" for="confirm">
                        Confirmer mot de passe
                      </label>
                      <div className="input-group input-group-merge">
                        <input
                          type="password"
                          id="confirm"
                          value={confirmPassword}
                          onChange={(e) => setConfirmPassword(e.target.value)}
                          className="form-control"
                          name="password"
                          placeholder="Confirmer votre mot de passe"
                          aria-describedby="password"
                        />
                      </div>

                      {passwordError.error === true &&
                        (passwordError.errorType === "confirm" ||
                          passwordError.errorType == "*") && (
                          <p className="mt-2 text-danger">
                            <b>{passwordError.message} </b>
                          </p>
                        )}
                    </div>

                    <div className="mb-3">
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          id="terms-conditions"
                          name="terms"
                        />
                        <label
                          className="form-check-label"
                          for="terms-conditions"
                        >
                          J'accepte les
                          <a> conditions & termes d'utilisations</a>
                        </label>
                      </div>
                    </div>
                    <button
                      className="btn d-grid w-100"
                      style={{ background: "#bb8f47", color: "white" }}
                    >
                      S'Inscrire
                    </button>
                  </form>
                )
              )}

              {/* Step 2 - Plus d'info */}
              {!isLoading && (
                registerStep === 1  && (
                  <form
                    id="formAuthentication"
                    className="mb-3"
                    onSubmit={handleSecondSubmit}
                  >
                    
                    <div className="mb-3 mt-3">
                      <label for="exampleDataList" className="form-label">
                        Votre classe
                      </label>
                      <select
                        className="form-control"
                        list="datalistOptionss"
                        id="exampleDatsaList"
                        style={{cursor:"pointer"}}

                        onChange={e => setItem({...item,niveau:e.target.value})}
                        value={item.niveau}
                        placeholder="Taper pour rechercher">
                        <option value="1">CI</option>
                        <option value="2">CP</option>
                        <option value="3">CE1</option>
                        <option value="4">CM1</option>
                        <option value="5">CM2</option>
                        <option value="6">6eme</option>
                        <option value="7">5eme</option>
                        <option value="8">4eme</option>
                        <option value="9">3eme</option>
                        <option value="10">2nd</option>
                        <option value="11">1er</option>
                        <option value="12">Tle</option>
                      </select>
                    </div>

                    <div className="mb-3">
                      <label for="tel" className="form-label">
                        Numéro de téléphone
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="tel"
                        name="email"
                        onChange={e => setItem({...item,tel:e.target.value})}
                        value={item.tel}
                        placeholder="Entrer votre numéro de téléphone"
                      />
                    </div>
                    <div className="mb-3 mt-3">
                      <label for="exampleDataList" className="form-label">
                        Votre sexe
                      </label>
                      <select
                        className="form-control"
                        list="datalistOptionss"
                        id="exampleDatsaList"
                        style={{cursor:"pointer"}}

                        onChange={e => {
                          setItem({...item, sexe: e.target.value})
                        } }
                        value={item.sexe}
                        placeholder="Taper pour rechercher">
                        <option value="Homme">Homme</option>
                        <option value="Femme">Femme</option>
                      </select>
                    </div>
                    <div className="mb-3">
                      <label for="email" className="form-label">
                        Date de naissance
                      </label>

                      <input
                        className="form-control"
                        type="date"
                        onChange={e => setItem({...item,birthdate:e.target.value})}
                        value={item.birthdate}
                        id="html5-date-input"
                      />
                    </div>

                    <button
                      className="btn d-grid w-100"
                      style={{ background: "#bb8f47", color: "white" }}
                    >
                      Continuer
                    </button>
                  </form>
                )
                
              )}
              
              {/* Step 3 - Niveau */}
              {!isLoading && (
                registerStep === 2  && (
                  <form
                    id="formAuthentication"
                    className="mb-3"
                    onSubmit={handleSubmit}
                  >
                    <div className="mb-3 mt-3">
                      <label for="exampleDataList" className="form-label">
                        Votre Pays
                      </label>
                      <input
                        className="form-control"
                        list="datalistOptions"
                        id="exampleDataList"
                        onChange={e => setItem({...item,country_id:e.target.value})}
                        value={item.country}
                        style={{cursor:"pointer"}}
                        placeholder="Taper pour rechercher" />
                        <datalist
                       id="datalistOptions">
                        <option value="229">+229</option>
                        <option value="228">+228</option>
                        <option value="225">+225</option>
                        <option value="226">+226</option>
                        <option value="223">+223</option>
                      </datalist>
                    </div>
                    

                    <div className="mb-3">
                      <label for="tel" className="form-label">
                        Ville
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="tel"
                        name="city"
                        onChange={e => setItem({...item,city:e.target.value})}
                        value={item.city}

                      />
                    </div>
                    <div className="mb-3">
                      <label for="email" className="form-label">
                        Quartier
                      </label>

                      <textarea
                        className="form-control"
                        type="date"
                        onChange={e => setItem({...item,address:e.target.value})}
                        value={item.address}
                        id="html5-date-input"
                      ></textarea>
                    </div>

                    <button
                      className="btn d-grid w-100"
                      style={{ background: "#bb8f47", color: "white" }}
                    >
                      Enregistrer
                    </button>
                  </form>
                )
                
              )}

              
              {isLoading && (
                <div className="mb-3 offset-5 mt-4">
                  <div className="spinner-grow text-primary"></div>
                </div>
              )}

              <p className="text-center">
                <span>Vous avez déjà un compte?</span>
                <Link to="/login">
                  <span>Se connecter</span>
                </Link>
              </p>
            </div>
          </div>
        </div>):(
          <>Abonnement</>
        )}
        
      </div>
    </div>
  );
};

export default Register;
