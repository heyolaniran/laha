import axios from "axios";
import { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import LayoutStudent from "../../../layouts/Admin/Student/Layout";

const Details = () => {
    const navigator = useNavigate();
    const { id, sous_titre } = useParams();
    const [cour, setCour] = useState(null);
    const [sousTitre, setSousTitre] = useState(null);
    const [allSousTitre, setAllSousTitre] = useState([]);

    useEffect(() => {
        getCour();
        getSousTitre();
      }, [sous_titre]);
      const getSousTitres = async (sous_titres) => {
        axios.get("/db/sous_titre.json").then(({ data }) => {
          var sous = data.filter((sous_tit) => sous_titres.includes(sous_tit.id));
    
          setAllSousTitre(sous);
        });
      };
      const getSousTitre = async () => {
        axios.get("/db/sous_titre.json").then(({ data }) => {
          var sous = data.filter((sous_tit) => sous_tit.id == sous_titre);
          // console.log('sous', sous)
    
          setSousTitre(sous[0]);
        });
      };
    
      const getCour = async () => {
        axios
          .get("/db/cours.json")
          .then(({ data }) => {
            var fil = data.filter((cour) => cour.id == id);
            console.log("fil[0]", fil[0]);
            setCour(fil[0]);
            getSousTitres(fil[0].sous_titres);
          })
          .catch((err) => {
            console.log("err", err);
          });
      };
    
    //   const sendQcm = async () => {
    //     setLoading(true);
    //     await new Promise((resolve) => setTimeout(resolve, 3000));
    //     setCheck(true);
    
    //     setResultForm(Boolean(Math.round(Math.random())));
    //     setLoading(false);
    //   };
    
  return (
    <LayoutStudent actif='cours'>

        {cour    && (
         <div className='row'>
        <div className="col-lg-10 offset-1 mt-2 py-4">
                <div className="card pt-5 px-5">
                    <div className="card-title">
                        <h4><u>Detail de votre teste {sousTitre.titre}</u></h4>
                    </div>
                   
                  
                    <div className="">
                        <p className='mt-2'>Les reponses attendus</p>
                        <ol>
                        {sousTitre.qcm.map((q,index) => {
                        return (
                          <>
                          <u className="mb-5">Question {index+1}:</u>
                   
                            <b> {q.quiz}</b>
                            <div className="mt-2">
                              <div className="row mt-2 mb-4">
                                {q.proposition.map((pop,index) => {
                                  return (
                                    <>
                                      <div className="col-lg-1">
                                        <input type="checkbox"  className="form-check-input" disabled={index == q.good[0] ? false:true} checked={index == q.good[0] ? true:false} />
                                      </div>
                                      <div className="col-lg-5">{pop}</div>
                                    </>
                                  );
                                })}
                              </div>
                            </div>
                          </>
                        );
                      })}
                        </ol>

                    </div>
                    
                </div>
            </div>
        </div>)}
    </LayoutStudent>
  )
}

export default Details