import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import LayoutStudent from "../../../layouts/Admin/Student/Layout";


const MesLivres = () => {
    useEffect(() => {
        getAllRepts()
      
       
      }, [""]);
      const [allCours, setAllRept] = useState([])
      const getAllRepts = async()=>{
          await axios.get('/db/books.json').then(({data})=>{
              setAllRept(data)
          })
      }
  return (
    <LayoutStudent actif='livres'>
    <div className="container-xxl flex-grow-1 container-p-y">
                  <h4 className="fw-bold py-3 mb-4"><span className="text-muted fw-light">Dashboard /</span> Livres</h4>
                  {allCours.length> 0 && (
        <div className="row row-cols-1 row-cols-md-3 g-4 mb-5">
          {allCours.map((cour) => {
            return (
              <div className="col">
                <div className="card h-100">
                  <img
                    className="card-img-top"
                    src="/template/etrain-master/img/books (1).svg"
                    alt="Card image cap"
                  />
                  <div className="card-body">
                    <span className="badge bg-label-primary me-1 mb-4">
                      {cour.type}
                    </span>
                    <Link to={"/livres/" + cour.id}>
                      <h5 className="card-title" style={{ color: "#007cff" }}>
                        {cour.titre}
                      </h5>
                    </Link>

                    <p className="card-text">
                      {cour.resumer.split(" ").slice(0, 15).join(" ") + "..."}
                    </p>
                    <hr />
                    <div className="row">
                      <div className="col-3">
                        <img
                          src="/template/snaet/assets/img/avatars/5.png"
                          alt="Avatar"
                          className="rounded-circle"
                          style={{ width: "100%" }}
                        />
                      </div>
                      <div className="col-8">
                        <div className="">
                          <b>{cour.auteur}</b>
                        </div>
                        <div className="">
                          <i>Professeur</i>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>)}
                </div>
    </LayoutStudent>
  )
}

export default MesLivres