import { useEffect, useState } from "react";
import LayoutAdmin from "../../../../layouts/Admin/Admin/Layouts";

import { updateBook } from "../../../../reducers/modules/Book/update";
import { useDispatch, useSelector } from "react-redux";
import { Tooltip } from "react-tooltip";
import {
  getSubjects,
  resetSubjects,
} from "../../../../reducers/modules/Subject/list";
import {
  getClassrooms,
  resetClassrooms,
} from "../../../../reducers/modules/Classroom/list";
import { Link, useNavigate, useParams } from "react-router-dom";
import moment from "moment";
import FileBase64 from "react-file-base64";
import {
  getBookTypes,
  resetBookTypes,
} from "../../../../reducers/modules/BookType/list";
import { getBook, resetBooks } from "../../../../reducers/modules/Book/list";

const UpdateBookAdmin = () => {
  const dispatch = useDispatch();
  const [bookForm, setBookForm] = useState({});
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    dispatch(getBook(id));
    dispatch(getSubjects());
    dispatch(getClassrooms());
    dispatch(getBookTypes());

    return () => {
      dispatch(resetSubjects());
      dispatch(resetBookTypes());
      dispatch(resetClassrooms());
      dispatch(resetBooks());
    };
  }, [""]);

  const { items, isLoading } = useSelector((state) => state.books.list);
  const subjectReduce = useSelector((state) => state.subjects.list);
  const classroomReduce = useSelector((state) => state.classrooms.list);
  const typeReduce = useSelector((state) => state.booksTypes.list);

  useEffect(() => {
    setBookForm(items);
  }, [items]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    let itemsForm = { createdAt: moment(), ...bookForm };
    await dispatch(updateBook(itemsForm));
    navigate("/admin/livres");
  };

  return (
    <LayoutAdmin actif="livres">
      {!isLoading ? (
        <div className="container-xxl flex-grow-1 container-p-y">
          <h4 className="fw-bold py-3 mb-4">
            <span className="text-muted fw-light">Dashboard / </span>
            <Link to={"/admin/livres"}>
              <span className="text-muted fw-light"> Livres / </span>
            </Link>
            Modifier
          </h4>

          <div className="row">
            <div className="col-lg-12">
              <div className="card">
                <div className="card-body">
                  <>
                    <div className="card-title my-2">
                      <div
                        className="my-0"
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                        }}
                      >
                        <h5>Enregistrer un livre</h5>
                        {/* <div class="form-check form-switch mb-2">
                        <input class="form-check-input" type="checkbox" id="flexSwitchCheckDefault"  onChange={(e)=>{setBookForm({...bookForm,isPublic:e.target.checked})}} />
                        <label class="form-check-label" htmlFor="flexSwitchCheckDefault" >Rendre public le cour</label>
                      </div> */}
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-12">
                        <form onSubmit={handleSubmit}>
                          <div className="row my-2">
                            <div className="col-12">
                              <label htmlFor="subject">Matiere</label>
                              <select
                                name=""
                                id="subject"
                                className="form-control"
                                required
                                value={bookForm.subjectId}
                                onChange={(e) =>
                                  setBookForm({
                                    ...bookForm,
                                    subjectId: e.target.value,
                                  })
                                }
                              >
                                <option value="" disabled selected></option>
                                {subjectReduce.items.map((matiere) => {
                                  return (
                                    <option value={matiere.id} className="s">
                                      {matiere.name}
                                    </option>
                                  );
                                })}
                              </select>
                            </div>
                          </div>
                          <div className="row my-2">
                            <div className="col-12">
                              <label htmlFor="classroom">Classe</label>
                              <select
                                name="classroom"
                                id=""
                                className="form-control"
                                required
                                value={bookForm.classroomId}
                                onChange={(e) =>
                                  setBookForm({
                                    ...bookForm,
                                    classroomId: e.target.value,
                                  })
                                }
                              >
                                <option value="" disabled selected>
                                  Il s'agit de quelle classe
                                </option>
                                {classroomReduce.items.map((classroom) => {
                                  return (
                                    <option value={classroom.id} className="s">
                                      {classroom.abbrv}
                                    </option>
                                  );
                                })}
                              </select>
                            </div>
                          </div>
                          <div className="row my-2">
                            <div className="col-12">
                              <label htmlFor="classroom">Type du livre</label>
                              <select
                                name="classroom"
                                id=""
                                className="form-control"
                                required
                                value={bookForm.bookTypeId}
                                onChange={(e) =>
                                  setBookForm({
                                    ...bookForm,
                                    bookTypeId: e.target.value,
                                  })
                                }
                              >
                                <option value="" disabled selected></option>
                                {typeReduce.items.map((type) => {
                                  return (
                                    <option value={type.id} className="s">
                                      {type.name}
                                    </option>
                                  );
                                })}
                              </select>
                            </div>
                          </div>
                          <div className="row my-2">
                            <div className="col-12">
                              <label htmlFor="">Auteur</label>
                              <input
                                type="text"
                                className="form-control"
                                placeholder="L'auteur du livre"
                                required
                                value={bookForm.auteur}
                                onChange={(e) =>
                                  setBookForm({
                                    ...bookForm,
                                    auteur: e.target.value,
                                  })
                                }
                              />
                            </div>
                          </div>
                          <div className="row my-2">
                            <div className="col-12">
                              <label htmlFor="">Titre</label>
                              <input
                                type="text"
                                className="form-control"
                                placeholder="Titre du livre"
                                required
                                value={bookForm.titre}
                                onChange={(e) =>
                                  setBookForm({
                                    ...bookForm,
                                    titre: e.target.value,
                                  })
                                }
                              />
                            </div>
                          </div>
                          <div className="row my-3">
                            <div className="col-12">
                              <label htmlFor="">Introduction</label>
                              <textarea
                                type="text"
                                placeholder="Introduction au cour"
                                className="form-control"
                                required
                                value={bookForm.resumer}
                                onChange={(e) =>
                                  setBookForm({
                                    ...bookForm,
                                    resumer: e.target.value,
                                  })
                                }
                              ></textarea>
                            </div>
                          </div>
                          <div className="row my-2">
                            <div className="col-12">
                              <label htmlFor="">Présentation du cour</label>
                              <textarea
                                className="form-control"
                                type="text"
                                rows={10}
                                required
                                value={bookForm.description}
                                onChange={(e) =>
                                  setBookForm({
                                    ...bookForm,
                                    description: e.target.value,
                                  })
                                }
                              ></textarea>
                            </div>
                          </div>
                          <div className="row my-2">
                            {/* <div class="form-check form-switch mb-2">
                        <input class="form-check-input" type="checkbox" id="flexSwitchCheckDefault"  onChange={(e)=>{setBookForm({...bookForm,isCheck:e.target.checked})}} />
                        <label class="form-check-label" htmlFor="flexSwitchCheckDefault" >Une video</label>
                      </div> */}
                            <div className="col-12">
                              <label htmlFor="">Ouvrage PDF</label> <br />
                              <FileBase64
                                multiple={false}
                                onDone={({ base64 }) => {
                                  setBookForm({ ...bookForm, pdf: base64 });
                                }}
                              />
                            </div>
                          </div>
                          <div className="row my-2">
                            <div
                              className="my-2"
                              style={{
                                display: "flex",
                                justifyContent: "center",
                              }}
                            >
                              <button className="btn btn-primary" type="submit">
                                Modifier le livre
                              </button>
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                  </>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <>Is Loading</>
      )}
      <Tooltip anchorSelect=".my-tooltip" />
    </LayoutAdmin>
  );
};

export default UpdateBookAdmin;
