
const FirstStep = (item,fan) => {
  return (
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
                        placeholder="Enter votre email"
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
                      style={{ background: "#32CD32", color: "white" }}
                    >
                      S'Inscrire
                    </button>
                  </form>
  )
}

export default FirstStep