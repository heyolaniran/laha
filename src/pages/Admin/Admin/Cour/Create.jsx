import { useEffect, useState } from "react";
import LayoutAdmin from "../../../../layouts/Admin/Admin/Layouts";
import {
  getCours,
  resetCours,
} from "../../../../reducers/modules/Cour/list";
import {
  createCour
} from "../../../../reducers/modules/Cour/create";
import { useDispatch, useSelector } from "react-redux";
import { Tooltip } from "react-tooltip";
import { getSubjects } from "../../../../reducers/modules/Subject/list";
import { getClassrooms } from "../../../../reducers/modules/Classroom/list";
import { Link, useNavigate } from "react-router-dom";
import moment from "moment";
import FileBase64 from 'react-file-base64';

const CreateCourAdmin = () => {
  const dispatch = useDispatch();
  const [courForm, setCourForm] = useState({});
  const [secondEtapeForm, setSecondEtapeForm] = useState({});
  const [threeEtapeForm, setThreeEtapeForm] = useState({});
  const navigate = useNavigate();
  useEffect(() => {
    dispatch(getCours());
    dispatch(getSubjects());
    dispatch(getClassrooms());

    return () => {
      dispatch(resetCours());
    };
  }, [""]);

  const subjectReduce = useSelector((state) => state.subjects.list);
  const classroomReduce = useSelector((state) => state.classrooms.list);

  const handleSubmit = async (e)=>{
    e.preventDefault();
    let itemsForm = {isPublic:false,createdAt:moment(),picture: "/template/etrain-master/img/teache (4).svg",level:"medium",...courForm}
    await dispatch(createCour(itemsForm));
    navigate("/admin/cours")
  }

  return (
   
      <LayoutAdmin actif="cours">
        <div className="container-xxl flex-grow-1 container-p-y">
          <h4 className="fw-bold py-3 mb-4">
            <span className="text-muted fw-light">Dashboard / </span>
            <Link to={"/admin/cours"}><span className="text-muted fw-light"> Cours / </span></Link>
            Enregistrement
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
                        <h5>Enregistrer un cour</h5>
                        <div class="form-check form-switch mb-2">
                        <input class="form-check-input" type="checkbox" id="flexSwitchCheckDefault"  onChange={(e)=>{setCourForm({...courForm,isPublic:e.target.checked})}} />
                        <label class="form-check-label" htmlFor="flexSwitchCheckDefault" >Rendre public le cour</label>
                      </div>
                      </div>
                    </div>
                    
                    <div className="row">
                      <div className="col-12">
                        <form  onSubmit={handleSubmit}>
                        <div className="row my-2">
                        <div className="col-12">
                            <label htmlFor="subject">Matiere</label>
                        <select name="" id="subject" className="form-control" required value={courForm.subjectId} onChange={(e)=>setCourForm({...courForm,subjectId:e.target.value})}>
                            <option value="" disabled selected>Il s'agit de quelle matiere</option>
                            {subjectReduce.items.map((matiere)=>{
                                return <option value={matiere.id} className="s">{matiere.name}</option>
                            })}
                        </select>
                        </div>
                    </div>
                    <div className="row my-2">
                        <div className="col-12">
                            <label htmlFor="classroom">Classe</label>
                        <select name="classroom" id="" className="form-control" required value={courForm.classroomId} onChange={(e)=>setCourForm({...courForm,classroomId:e.target.value})}>
                            <option value="" disabled selected>Il s'agit de quelle classe</option>
                            {classroomReduce.items.map((classroom)=>{
                                return <option value={classroom.id} className="s">{classroom.abbrv}</option>
                            })}
                        </select>
                        </div>
                    </div>
                          <div className="row my-2">
                            <div className="col-12">
                              <label htmlFor="">Titre</label>
                              <input
                                type="text"
                                className="form-control"
                                placeholder="Titre du cour"
                                required
                                value={courForm.titre}
                                onChange={(e) =>
                                  setCourForm({
                                    ...courForm,
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
                                value={courForm.resumer}
                                onChange={(e) =>
                                  setCourForm({
                                    ...courForm,
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
                                value={courForm.description}
                                onChange={(e) =>
                                  setCourForm({
                                    ...courForm,
                                    description: e.target.value,
                                  })
                                }
                              ></textarea>
                            </div>
                          </div> 
                          <div className="row my-2">
                            {/* <div class="form-check form-switch mb-2">
                        <input class="form-check-input" type="checkbox" id="flexSwitchCheckDefault"  onChange={(e)=>{setCourForm({...courForm,isCheck:e.target.checked})}} />
                        <label class="form-check-label" htmlFor="flexSwitchCheckDefault" >Une video</label>
                      </div> */}
                            <div className="col-12">
                              <label htmlFor="">Image</label> <br />

                    
                              <FileBase64  multiple={false} onDone={({base64})=>{setCourForm({...courForm,picture:base64})}}   /> 
                            </div>
                          </div>
                          <div className="row my-2">
                           
                            <div className="my-2" style={{display:"flex",justifyContent:"center"}}>
                        <button className="btn btn-primary" type="submit">Enregistrer le cour</button>
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
        <Tooltip anchorSelect=".my-tooltip" />
      </LayoutAdmin>

  );
};

export default CreateCourAdmin;
