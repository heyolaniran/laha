import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import LayoutStudent from "../../../layouts/Admin/Student/Layout";

const MesCours = () => {
  const [allCours, setAllCours] = useState([]);
  useEffect(() => {
    getAllCours();
  }, [""]);
  const getAllCours = async () => {
    await axios.get("/db/cours.json").then(({ data }) => {
      setAllCours(data);
    });
  };

  return (
    <LayoutStudent actif="cours">
      <div className="container-xxl flex-grow-1 container-p-y">
        <h4 className="fw-bold py-3 mb-4">
          <span className="text-muted fw-light">Dashboard /</span> Cours
        </h4>
        {allCours.length> 0 && (
        <div className="row row-cols-1 row-cols-md-3 g-4 mb-5">
          {allCours.map((cour) => {
            return (
              <div className="col">
                <div className="card h-100">
                  <img
                    className="card-img-top"
                    src="/template/etrain-master/img/teache (4).svg"
                    alt="Card image cap"
                  />
                  <div className="card-body">
                    <span className="badge bg-label-primary me-1 mb-4">
                      {cour.matiere}
                    </span>
                    <Link to={"/cours/" + cour.id}>
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
  );
};

export default MesCours;
