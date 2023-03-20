import LayoutStudent from "../../../layouts/Admin/Student/Layout";
import axios from "axios";
import { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

const Livre = () => {
  const { id } = useParams();
  const [book, setBook] = useState(null);
  const navigate = useNavigate();
  useEffect(() => {
    getBook();
  }, [""]);
  const getBook = async () => {
    await axios.get("/db/books.json").then(({ data }) => {
      var result = data.filter((d) => d.id == id);

      if (result.length == 1) {
        setBook(result[0]);
      } else {
        navigate("/livres");
      }
    });
  };
  return (
    <LayoutStudent actif="livres">
      <div className="container-xxl flex-grow-1 container-p-y">
        <h4 className="fw-bold py-3 mb-4">
          <span className="text-muted fw-light">Dashboard /</span>
          <Link to={"/livres"} className="text-muted fw-light">
            Livres /
          </Link>
          La vie
        </h4>
        {book && (
          <>
            <div className="row mt-3">
              <h1 className="text-muted mb-2">
                {book.titre} ( {book.auteur})
              </h1>

              <div className="col-md-12 mt-2">
                <div className="card">
                  <div className="card-body">
                    <b>
                      <h4 className="text-muted mb-2">Resumer </h4>
                    </b>
                    {book.descriptions}
                  </div>
                </div>
              </div>
            </div>
            <div className="row mt-3">
              <div className="col-md-12 mt-2">
                <div className="card">
                  <div className="card-body">
                    <b>
                      <h4 className="text-muted mb-2">Livre </h4>
                    </b>
                    <div className="mt-3">
                      <embed
                        src="/template/etrain-master/img/books.pdf"
                        type=""
                        style={{ width: "100%", height: "800px" }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}{" "}
      </div>
    </LayoutStudent>
  );
};

export default Livre;
