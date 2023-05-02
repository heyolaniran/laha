import LayoutStudent from "../../../layouts/Admin/Student/Layout";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import { getBook, resetBooks } from "../../../reducers/modules/Book/list";

const Livre = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getBook(id));
    return ()=>{
      dispatch(resetBooks());
    }
  }, [""]);
  const {items,isLoading} = useSelector((state)=>state.books.list);
  const book = items;
  
  return (
    <LayoutStudent actif="livres">
      {isLoading ? (<><div className="my-5" ><div className="spinner-grow text-primary" role="status" ><span className="visually-hidden">Loading...</span></div></div></>):(
      <div className="container-xxl flex-grow-1 container-p-y">
        <h4 className="fw-bold py-3 mb-4">
          <span className="text-muted fw-light">Dashboard /</span>
          <Link to={"/livres"} className="text-muted fw-light">
            Livres /
          </Link>
          {book.titre}
        </h4>
        {book && (
          <>
            <div className="row mt-3">
              <h1 className="text-muted mb-2">
                {book.titre} ({book.auteur})
              </h1>

              <div className="col-md-12 mt-2">
                <div className="card">
                  <div className="card-body">
                    <b>
                      <h4 className="text-muted mb-2">Introduction </h4>
                    </b>
                    {book.resumer}
                  </div>
                </div>
              </div>
              <div className="col-md-12 mt-2">
                <div className="card">
                  <div className="card-body">
                    <b>
                      <h4 className="text-muted mb-2">Présentation </h4>
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
                        // src="/template/etrain-master/img/books.pdf"
                        src={book.pdf ?? book.linkPdf}
                        contentEditable={false}
                        
                        type=""
                        style={{ width: "100%", height: "800px" }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </div>)}

    </LayoutStudent>
  );
};

export default Livre;
