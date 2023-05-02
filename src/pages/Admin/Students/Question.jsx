import { Link, useNavigate, useParams } from "react-router-dom";
import LayoutStudent from "../../../layouts/Admin/Student/Layout";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getQuiz, resetQuizs } from "../../../reducers/modules/Quiz/list";
import { getUsers } from "../../../reducers/modules/User/list";

const Question = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getQuiz(id));
    dispatch(getUsers());
    return ()=>{
      dispatch(resetQuizs());
    }
  }, [""]);
  const {items,isLoading} = useSelector((state)=>state.quizs.list);
  const userReduce = useSelector((state)=>state.users.list);
  const quiz = items;
  const users =userReduce.items;

  const findUser = (id)=>{
    return users.find((user)=>user.id == id );
  }
  
  return (
    <LayoutStudent actif="qr">
      <div className="container-xxl flex-grow-1 container-p-y">
        <h4 className="fw-bold py-3 mb-4">
          <span className="text-muted fw-light">Dashboard /</span>
          <Link to={"/question-reponse"} className="text-muted">
            Question-Reponses 
          </Link>
        </h4>

        <div className="row mt-3">
          <div className="col-md-10  mt-4">
            <h4 className="text-muted mb-2">Questions </h4>

            <div className="card">
              <div className="card-body py-5">
                <h2 className=" mb-4 text-primary"> {quiz.titre} </h2>

                <span>
                 {quiz.resumer}
                </span>
                
                <br />
              </div>
              
              <div className="my-3 mx-4 cursor-pointer">
              <div className="" style={{justifyContent:"flex-end",width:"100%",display:"flex",alignItems:"center"}}>
              <div className="" style={{width:"40px",height:"40px",borderRadius:"100px",backgroundColor:"white",marginRight:"10px",boxShadow:"2px  0.4px 25px lightgray"}}
                  ><img src="/template/snaet/assets/img/avatars/1.png" alt="" style={{width:"100%",borderRadius:"100px",}} /></div>
                  <b>{findUser(quiz.userId)?.surname +" "+findUser(quiz.userId)?.firstname}</b>
            
              </div>
              </div>
            </div>
          </div>
        </div>
        <h4 className="text-muted mb-2 mt-4 ">Reponses </h4>
        {quiz.reponses && (quiz.reponses.length == 0 ? (<h3 className="text-muted">Pas de reponse pour l'instant</h3>):(quiz.reponses.map((res)=>{
          return (<div className=" mt-4" style={{display:"flex",width:"100%",}}>
          <div className="">
            <img src="/template/snaet/assets/img/avatars/1.png" alt="" style={{width:"50px",borderRadius:"100px",marginRight:"15px"}} />
          </div>
          <div className="py-3 px-3" style={{maxWidth:"50%",backgroundColor:"white",borderRadius:"10px",minWidth:"30%"}} >
            <div className="row mb-3">
              <div className="col-lg-6"><b>{findUser(res.by)?.surname[0] +" "+findUser(res.by)?.firstname}</b></div>
              <div className="col-lg-6 text-end"><i>{res.comment}</i></div>
            </div>
            {res.reponse}
          </div>
        </div>);
        })))}
        
        {/* <div className="mt-4" style={{display:"flex",width:"85%",justifyContent:"flex-end"}}>
          
          <div className="py-3 px-3" style={{maxWidth:"50%",backgroundColor:"#fff0d7fa",borderRadius:"10px",}} >
            <div className="row mb-3">
              <div className="col-lg-6"><b>Vous</b></div>
              <div className="col-lg-6 text-end"><i>12 Janvier 2022</i></div>
            </div>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus atque sequi quasi unde, molestias maxime. Expedita explicabo, corporis minus, similique animi adipisci maxime delectus repellat est harum voluptate quisquam dignissimos.
          </div>
          <i className="bx bx-trash"  ></i>
          <div className="">
            <img src="/template/snaet/assets/img/avatars/1.png" alt="" style={{width:"50px",borderRadius:"100px",marginLeft:"15px"}} />
          </div>
        </div> */}
      </div>
    </LayoutStudent>
  );
};

export default Question;
