import { useEffect, useState } from "react";
import LayoutAdmin from "../../../../layouts/Admin/Admin/Layouts";

import { updateBook } from "../../../../reducers/modules/Book/update";
import { useDispatch, useSelector } from "react-redux";
import { Tooltip } from "react-tooltip";

import { Link, useNavigate, useParams } from "react-router-dom";
import moment from "moment";
import FileBase64 from "react-file-base64";
import { getBook, resetBooks } from "../../../../reducers/modules/Book/list";

const ShowBookAdmin = () => {
  const dispatch = useDispatch();
  const [bookForm, setBookForm] = useState({});
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    dispatch(getBook(id));

    return () => {
      dispatch(resetBooks());
    };
  }, [""]);

  const { items, isLoading } = useSelector((state) => state.books.list);

  const book = items
  

  return (
    <LayoutAdmin actif="livres">
      {!isLoading ? (
       <div className="container-xxl flex-grow-1 container-p-y">
       <h4 className="fw-bold py-3 mb-4">
         <span className="text-muted fw-light">Dashboard /</span>
         <Link to={"/admin/livres"} className="text-muted fw-light">
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
                 <div className="d-flex" style={{justifyContent:"space-between",alignItems:'center',}}>
                   <b>
                     <h4 className="text-muted mb-2">Introduction </h4>
                   </b>
                   <div className="d-flex" style={{alignItems:'center',}}>
                        <Link to={"/admin/livres/"+book.id+"/edit"}>
                        <i className="bx bx-pencil"></i>
                        <span>Modifier</span>
                        </Link>
                   </div>
                   </div>
                   {book.resumer}
                 </div>
               </div>
             </div>
             <div className="col-md-12 mt-2">
               <div className="card">
                 <div className="card-body">
                   <div className="d-flex" style={{justifyContent:"space-between",alignItems:'center',}}>
                   <b>
                     <h4 className="text-muted mb-2">Présentation </h4>
                   </b>
                   <div className="d-flex" style={{alignItems:'center',}}>
                        <Link to={"/admin/livres/"+book.id+"/edit"}>
                        <i className="bx bx-pencil"></i>
                        <span>Modifier</span>
                        </Link>
                   </div>
                   </div>
                   {book.descriptions}
                 </div>
               </div>
             </div>
           </div>
           <div className="row mt-3">
             <div className="col-md-12 mt-2">
               <div className="card">
                 <div className="card-body">
                 <div className="d-flex" style={{justifyContent:"space-between",alignItems:'center',}}>
                   <b>
                     <h4 className="text-muted mb-2">Livre </h4>
                   </b>
                   <div className="d-flex" style={{alignItems:'center',}}>
                        <Link to={"/admin/livres/"+book.id+"/edit"}>
                        <i className="bx bx-pencil"></i>
                        <span>Modifier</span>
                        </Link>
                   </div>
                   </div>
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
     </div>
      ) : (
        <>Is Loading</>
      )}
      <Tooltip anchorSelect=".my-tooltip" />
    </LayoutAdmin>
  );
};

export default ShowBookAdmin;
