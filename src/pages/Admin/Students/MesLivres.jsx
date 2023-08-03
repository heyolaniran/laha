
import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import LayoutStudent from "../../../layouts/Admin/Student/Layout";
import { useDispatch, useSelector } from "react-redux";
import { getBooks, resetBooks,getBookFiltre } from "../../../reducers/modules/Book/list";
import { getBookFav,getBookFavs,resetBookFavs } from "../../../reducers/modules/BookFav/list";
import { createBookFav} from "../../../reducers/modules/BookFav/create";
import { deleteBookFav} from "../../../reducers/modules/BookFav/delete";
import { getBookTypes } from "../../../reducers/modules/BookType/list";
import { createBook } from "../../../reducers/modules/Book/create";
import { filterList, findById, findList } from "../../../utils";
import { getSubjects } from "../../../reducers/modules/Subject/list";
import { SET_BOOKFAVS_LIST_SEARCH_ITEMS } from "../../../reducers/modules/BookFav/list/mutation";

const MesLivres = () => {
  const dispatch = useDispatch();
  const [reload, setReload] = useState(false);
  const [showFiltre, setShowFiltre] = useState(false)
  const [isSearch, setIsSearch] = useState(false)
  const [myFav, setMyFav] = useState(false)

  useEffect(() => {
    dispatch(getBooks());
    dispatch(getBookFavs());
    dispatch(getSubjects());
    dispatch(getBookTypes());
    return () => {
      dispatch(resetBooks());
    };
  }, [reload]);


  const booksReduce = useSelector((state) => state.books.list);
  const subjectReduce = useSelector((state) => state.subjects.list);
  const favReduce = useSelector((state) => state.booksFavs.list);
  const typeReduce = useSelector((state) => state.booksTypes.list);
  const auth = useSelector((state)=>state.auth);

  const { items, isLoading,searchItems } = booksReduce;
  const books = items;

  const isFav = (id)=>{
    if(favReduce){
      const firstFiltre =  filterList(favReduce.items,"bookId",id);
      return filterList(firstFiltre,"userId",auth.user.id).length == 0 ? false:true
    }
  }
  
  const addToFav = (id)=>{
    console.log('dddd')
    dispatch(createBookFav({"bookId":id,"userId":auth.user.id}))
    setReload(!reload)
  }
  const removeToFav = (id)=>{
    console.log('aaaa')
    const firstFiltre =  filterList(favReduce.items,"bookId",id);
    console.log('firstFiltre', firstFiltre)
    const secondeFiltre = filterList(firstFiltre,"userId",auth.user.id);
    console.log('secondeFiltre', secondeFiltre)

    if (secondeFiltre.length > 0) {
      secondeFiltre.forEach(f => {
        
      dispatch(deleteBookFav(f.id))
     
      });
      setReload(!reload);
    }
    
    setReload(!reload)
  }
  const search =(param)=>{
    setMyFav(false)
    if(param.length == 0){
      setIsSearch(false)
    }else{
      setIsSearch(true)
      dispatch(getBookFiltre(param));
      setReload(!reload)
    }
  }
  return (
    <LayoutStudent actif="livres">
      <div
      onClick={(e)=>setMyFav(true)}
        className=""
        style={{
          position: "fixed",
          bottom: "70px",
          right: "20px",
          padding: "10px",
          borderRadius: "60px",
          zIndex: 5,
          backgroundColor: "#c6c6ddb0",
          cursor: "pointer"
        }}
      >
        <i
          className="bx bxs-heart"
          style={{ fontSize: "25px", color: "#7777ff" }}
        ></i>
        <b style={{ paddingLeft: "10px", paddingRight: "5px" }}>Mes favoris</b>
      </div>
      {/* <div className="" onClick={(e)=>{setModale(true);setUpdate(false);setFormQuiz({})}} style={{position:"fixed",bottom:"70px",right:"20px",padding:"10px",borderRadius:"60px",zIndex:5,backgroundColor:'#ebddc8b8',cursor:"pointer"}}><i className='bx bx-plus' style={{fontSize:"25px",color:"#32CD32"}}></i> <b style={{paddingLeft:"10px",paddingRight:"5px"}}>Poser une question</b></div> */}
      <div className="container-xxl flex-grow-1 container-p-y">
        <h4 className="fw-bold py-3 mb-4">
          <span className="text-muted fw-light">Dashboard /</span> Livres
        </h4>
     <h5 className='text-muted cursor-pointer' onClick={(e)=>setShowFiltre(!showFiltre)}>Filtre <i className='bx bx-filter' style={{fontSize:"25px"}}></i></h5>
        <hr />
        
        {showFiltre && (<div className="">
        <span style={{fontWeight:800}}>Matieres</span>
        {showFiltre && (<div className="row">
     <div onClick={(e)=>search([])} className='cursor-pointer' style={{padding:"4px 15px 4px 2px",margin:"5px 10px",backgroundColor:"#32CD325c",width:"max-content",borderRadius:"20px",display:"flex",alignItems:"center"}}> <div className="" style={{padding:"4px 14px",backgroundColor:"white",borderRadius:"15px",fontWeight:"bolder",color:"#32CD32"}}>{books.length}</div><span style={{margin:"0px 5px"}}>Tout</span> </div>
     {subjectReduce.items && (subjectReduce.items.map((sub)=>{
     return <div className='cursor-pointer' onClick={(e)=>search([{name:"subjectId",value:sub.id}])} style={{padding:"4px 15px 4px 2px",margin:"5px 10px",backgroundColor:"#32CD325c",width:"max-content",borderRadius:"20px",display:"flex",alignItems:"center"}}> <div className="" style={{padding:"4px 14px",borderRadius:"15px",fontWeight:"bolder",color:"#32CD32"}}>{filterList(books,'subjectId',sub.id)?.length}</div><span style={{margin:"0px 5px"}}>{sub.name}</span> </div>
     }))}
    
     </div>)}
        </div>
        )}

        {showFiltre && (<div className="">
        <span style={{fontWeight:800}}>Types</span>
        {showFiltre && (<div className="row">
        <hr />

     <div onClick={(e)=>search([])} className='cursor-pointer' style={{padding:"4px 15px 4px 2px",margin:"5px 10px",backgroundColor:"#32CD325c",width:"max-content",borderRadius:"20px",display:"flex",alignItems:"center"}}> <div className="" style={{padding:"4px 14px",backgroundColor:"white",borderRadius:"15px",fontWeight:"bolder",color:"#32CD32"}}>{books.length}</div><span style={{margin:"0px 5px"}}>Tout</span> </div>
     {typeReduce.items && (typeReduce.items.map((sub)=>{
     return <div className='cursor-pointer' onClick={(e)=>search([{name:"typeId",value:sub.id}])} style={{padding:"4px 15px 4px 2px",margin:"5px 10px",backgroundColor:"#32CD325c",width:"max-content",borderRadius:"20px",display:"flex",alignItems:"center"}}> <div className="" style={{padding:"4px 14px",borderRadius:"15px",fontWeight:"bolder",color:"#32CD32"}}>{filterList(books,'typeId',sub.id)?.length}</div><span style={{margin:"0px 5px"}}>{sub.name}</span> </div>
     }))}
        <hr />
    
     </div>)}

       
       
        </div>
        )}
        {!isSearch ? ( !isLoading ? (
          books.length > 0 ? (
            <div className="row row-cols-1 row-cols-md-3 g-4 mb-5">
              {books.map((book) => {
                if(myFav && !isFav(book.id)){
                  return <></>
                }
                return (
                  <div className="col">
                    <div className="card h-100">
                     {isFav(book.id) && ( <div
                        className="mx-2 my-2"
                        style={{ display: "flex", justifyContent: "flex-end" }}
                      >
                        <div
                          className="cursor-pointer"
                          onClick={(e)=>removeToFav(book.id)}
                          style={{
                            backgroundColor: "#c6c6ddb0",
                            padding: "5px",
                            borderRadius: "10px",
                          }}
                        >
                          <i
                            className="bx bxs-heart"
                            style={{ color: "#7777ff", fontWeight: "900" }}
                          ></i>
                        </div>
                      </div>)}
                     {!isFav(book.id) && ( <div
                        className="mx-2 my-2"
                        style={{ display: "flex", justifyContent: "flex-end" }}
                      >
                        <div
                          className="cursor-pointer"
                          style={{
                            backgroundColor: "",
                            padding: "5px",
                            borderRadius: "10px",
                          }}
                          onClick={(e)=> addToFav(book.id)}
                        >
                          <i
                            className="bx bx-heart"
                            style={{ color: "#7777ff", fontWeight: "900" }}
                          ></i>
                        </div>
                      </div>)}
                      <img
                        className="card-img-top"
                        src="/template/etrain-master/img/books (1).svg"
                        alt="Card image cap"
                      />
                      <div className="card-body">
                        <span className="badge bg-label-primary me-1 mb-4">
                        {findById(subjectReduce.items,book.subjectId)?.name +" ~ "+findById(typeReduce.items,book.typeId)?.name  }
                        </span>
                        <Link to={"/livres/" + book.id}>
                          <h5
                            className="card-title"
                            style={{ color: "#007cff" }}
                          >
                            {book.titre}
                          </h5>
                        </Link>

                        <p className="card-text">
                          {book.resumer.split(" ").slice(0, 15).join(" ") +
                            "..."}
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
                              <b>{book.auteur}</b>
                            </div>
                            <div className="">
                              <i>Auteur</i>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            <div>Vous navez pas de livre</div>
          )
        ) : (
          <div className="my-5">
            <div className="spinner-grow text-primary" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
        )):(<></>)}
        {isSearch ? ( !isLoading ? (
          searchItems.length > 0 ? (
            <div className="row row-cols-1 row-cols-md-3 g-4 mb-5">
              {searchItems.map((book) => {
                if(myFav && !isFav(book.id)){
                  return <></>
                }
                return (
                  <div className="col">
                    <div className="card h-100">
                     {isFav(book.id) && ( <div
                        className="mx-2 my-2"
                        style={{ display: "flex", justifyContent: "flex-end" }}
                      >
                        <div
                          className="cursor-pointer"
                          onClick={(e)=>removeToFav(book.id)}
                          style={{
                            backgroundColor: "#c6c6ddb0",
                            padding: "5px",
                            borderRadius: "10px",
                          }}
                        >
                          <i
                            className="bx bxs-heart"
                            style={{ color: "#7777ff", fontWeight: "900" }}
                          ></i>
                        </div>
                      </div>)}
                     {!isFav(book.id) && ( <div
                        className="mx-2 my-2"
                        style={{ display: "flex", justifyContent: "flex-end" }}
                      >
                        <div
                          className="cursor-pointer"
                          style={{
                            backgroundColor: "",
                            padding: "5px",
                            borderRadius: "10px",
                          }}
                          onClick={(e)=> addToFav(book.id)}
                        >
                          <i
                            className="bx bx-heart"
                            style={{ color: "#7777ff", fontWeight: "900" }}
                          ></i>
                        </div>
                      </div>)}
                      <img
                        className="card-img-top"
                        src="/template/etrain-master/img/books (1).svg"
                        alt="Card image cap"
                      />
                      <div className="card-body">
                        <span className="badge bg-label-primary me-1 mb-4">
                        {findById(subjectReduce.items,book.subjectId)?.name +" ~ "+findById(typeReduce.items,book.typeId)?.name  }
                        </span>
                        <Link to={"/livres/" + book.id}>
                          <h5
                            className="card-title"
                            style={{ color: "#007cff" }}
                          >
                            {book.titre}
                          </h5>
                        </Link>

                        <p className="card-text">
                          {book.resumer.split(" ").slice(0, 15).join(" ") +
                            "..."}
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
                              <b>{book.auteur}</b>
                            </div>
                            <div className="">
                              <i>Auteur</i>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            <div>Vous navez pas de livre</div>
          )
        ) : (
          <div className="my-5">
            <div className="spinner-grow text-primary" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
        )):(<div></div>)}
      </div>
    </LayoutStudent>
  );
};

export default MesLivres;
