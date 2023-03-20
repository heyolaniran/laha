import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import LayoutStudent from "../../../layouts/Admin/Student/Layout";

const MesExercices = () => {
  useEffect(() => {
    getAllExo();
  }, [""]);
  const [allExo, setAllExo] = useState([]);

  const getAllExo = async () => {
    await axios.get("/db/exercices.json").then(({ data }) => {
      setAllExo(data);
    });
  };

  return (
    <LayoutStudent actif="exos">
      <div className="container-xxl flex-grow-1 container-p-y">
        <h4 className="fw-bold py-3 mb-4">
          <span className="text-muted fw-light">Dashboard /</span> Exercices
        </h4>
        <div className="row row-cols-1 row-cols-md-3 g-4 mb-5">
          {allExo.map((cour) => {
            return (
              <div className="col">
                <div className="card h-100">
                  <img
                    className="card-img-top"
                    src="/template/etrain-master/img/teache (3).svg"
                    alt="Card image cap"
                  />
                  <div className="card-body my-3">
                    <span className="badge bg-label-primary me-1 mb-4">
                      {cour.matiere}
                    </span>
                    <Link to={"/exercices/1"}>
                      <h5 className="card-title" style={{ color: "#007cff" }}>
                        {cour.titre}
                      </h5>
                    </Link>

                    <p className="card-text">
                      {cour.resumer.split(" ").slice(0, 15).join(" ") + "..."}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
          /
        </div>
      </div>
    </LayoutStudent>
  );
};

export default MesExercices;
