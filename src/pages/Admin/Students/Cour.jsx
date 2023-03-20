import axios from "axios";
import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import LayoutStudent from "../../../layouts/Admin/Student/Layout";

const Cour = () => {
  const { id } = useParams();
  const [cour, setCour] = useState(null);

  const [allSousTitre, setAllSousTitre] = useState([]);
  useEffect(() => {
    console.log("id", id);
    getCour();
  }, []);
  const getSousTitres = async (sous_titres) => {
    axios.get("/db/sous_titre.json").then(({ data }) => {
      var sous = data.filter((sous_tit) => sous_titres.includes(sous_tit.id));
      // console.log('sous', sous)
      setAllSousTitre(sous);
    });
  };

  const getCour = async () => {
    axios
      .get("/db/cours.json")
      .then(({ data }) => {
        var fil = data.filter((cour) => cour.id == id);
        setCour(fil[0]);
        getSousTitres(fil[0].sous_titres);
      })
      .catch((err) => {
        console.log("err", err);
      });
  };

  return (
    <LayoutStudent actif="cours">
      {cour && (
        <div className="container-xxl flex-grow-1 container-p-y">
          <h4 className="fw-bold py-3 mb-4">
            <Link to="/cours">
              <span className="text-muted fw-light"> Cours </span>
            </Link>
            / {cour.titre}
          </h4>
          <div className="row">
            <div className="col-12 col-sm-9 ">
              <div className="row">
                <h1 className="text-muted mb-2">{cour.titre}</h1>

                <div className="col-md-12">
                  <div className="card">
                    <div className="card-body">
                      <iframe
                        width="100%"
                        height="450"
                        style={{ borderRadius: "15px" }}
                        src="https://www.youtube.com/embed/1Er8c6xikcA"
                        title="YouTube video player"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowfullscreen
                      ></iframe>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row mt-3">
              <h1 className="text-muted mb-2">Résumer</h1>
               
                <div className="col-md-12">
                  <div className="card">
                    <div className="card-body">{cour.resumer}</div>
                  </div>
                </div>
              </div>
              <div className="row mt-3">
              <h1 className="text-muted mb-2">Présentation</h1>

                <div className="col-md-12">
                  <div className="card">
                    <div className="card-body">{cour.description}</div>
                    <div className="card-footer"></div>
                  </div>
                </div>
              </div>
              <div className="row mt-4">
                <div className="col-lg-12">
                  <div className="demo-inline-spacing">
                    <nav aria-label="Page navigation">
                      <ul className="pagination justify-content-end">
                        <li className="page-item active">
                          <Link
                            className="page-link"
                            to={"/cours/" + cour.id}
                            href="javascript:void(0);"
                          >
                            Présentation
                          </Link>
                        </li>
                        {allSousTitre &&
                          allSousTitre.map((sous_titre) => {
                            return (
                              <li className="page-item">
                                <Link to={'/cours/'+cour.id+'/sous_titres/'+sous_titre.id}
                                  className="page-link "
                                  href="javascript:void(0);"
                                >
                                  {sous_titre.titre}
                                </Link>
                              </li>
                            );
                          })}

                        <li className="page-item next">
                          <Link to={"/cours/"+cour.id+"/sous_titres/1"} className="page-link" href="javascript:void(0);">
                          Suivant<i className="tf-icon bx bx-chevrons-right"></i>
                          </Link>
                        </li>
                      </ul>
                    </nav>
                  </div>
                </div>
              </div>
            </div>
            <div className=" col-12 col-sm-3 d-none d-sm-block mt-5">
              <div className="row">
                <div className="col-xl-12 card">
                  <h2 className="text-muted my-3 mx-3">Sous Titres</h2>
                  <div className="nav-align-top mb-4">
                    {allSousTitre &&
                      allSousTitre.map((sous_titre) => {
                        return (
                          <div className="nav-item mx-3 my-1">
                            <hr />
                            <Link
                              to={
                                "/cours/" +
                                cour.id +
                                "/sous_titres/" +
                                sous_titre.id
                              }
                            >
                              {sous_titre.titre}
                            </Link>
                          </div>
                        );
                      })}
                    <hr />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </LayoutStudent>
  );
};

export default Cour;
