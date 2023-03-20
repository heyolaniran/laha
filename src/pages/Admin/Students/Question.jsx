import { Link } from "react-router-dom";
import LayoutStudent from "../../../layouts/Admin/Student/Layout";

const Question = () => {
  return (
    <LayoutStudent actif="qr">
      <div className="container-xxl flex-grow-1 container-p-y">
        <h4 className="fw-bold py-3 mb-4">
          <span className="text-muted fw-light">Dashboard /</span>
          <Link to={"/question-reponse"} className="text-muted fw-light">
            Question-Reponses 
          </Link>
        </h4>

        <div className="row mt-3">
          <div className="col-md-10  mt-4">
            <h4 className="text-muted mb-2">Questions </h4>

            <div className="card " style={{ backgroundColor: "#fff8ed9c" }}>
              <div className="card-body ">
                <h2 className="text-muted mb-4"> Difference entre ce et se </h2>

                <b>
                  J'aimerais savoir quand faut il utiliser "ce" ou "se" dans une
                  phrase
                </b>
                <br />
              </div>
            </div>
          </div>
        </div>
        <div className="row mt-4  ">
          <h4 className="text-muted mb-2">Reponses </h4>

          <div className="col-md-12 mt-2">
            <div class="col-sm-6 col-lg-10 mb-4">
              <div class="card p-3 text-end">
                <figure class="mb-0">
                  <blockquote class="blockquote">
                    <p>
                      A well-known quote, contained in a blockquote element.
                    </p>
                  </blockquote>
                  <figcaption class="blockquote-footer mb-0 text-muted">
                    Professeur<cite title="Source Title"> K.Albericq</cite>
                  </figcaption>
                </figure>
              </div>
            </div>
          </div>
          <div className="col-md-12 mt-2">
            <div class="col-sm-6 col-lg-10 mb-4">
              <div class="card p-3 text-end">
                <figure class="mb-0">
                  <blockquote class="blockquote">
                    <p>
                      A well-known quote, contained in a blockquote element.
                    </p>
                  </blockquote>
                  <figcaption class="blockquote-footer mb-0 text-muted">
                    Professeur<cite title="Source Title"> K.Albericq</cite>
                  </figcaption>
                </figure>
              </div>
            </div>
          </div>
          <div className="col-md-12 mt-2">
            <div class="col-sm-6 col-lg-10 mb-4">
              <div class="card p-3 text-end">
                <figure class="mb-0">
                  <blockquote class="blockquote">
                    <p>
                      A well-known quote, contained in a blockquote element.
                    </p>
                  </blockquote>
                  <figcaption class="blockquote-footer mb-0 text-muted">
                    Professeur<cite title="Source Title"> K.Albericq</cite>
                  </figcaption>
                </figure>
              </div>
            </div>
          </div>
          <div className="col-md-12 mt-2">
            <div class="col-sm-6 col-lg-10 mb-4">
              <div class="card p-3 text-end">
                <figure class="mb-0">
                  <blockquote class="blockquote">
                    <p>
                      A well-known quote, contained in a blockquote element.
                    </p>
                  </blockquote>
                  <figcaption class="blockquote-footer mb-0 text-muted">
                    Professeur<cite title="Source Title"> K.Albericq</cite>
                  </figcaption>
                </figure>
              </div>
            </div>
          </div>
        </div>
      </div>
    </LayoutStudent>
  );
};

export default Question;
