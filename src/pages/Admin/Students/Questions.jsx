import axios from 'axios'
import { useEffect,useState } from 'react'
import { Link } from 'react-router-dom'
import LayoutStudent from '../../../layouts/Admin/Student/Layout'

const Questions = () => {

    useEffect(() => {
        getAllExo()
      
        
      }, [""])
    
      const getAllExo = async()=>{
        axios.get('/db/questions.json').then(({data})=>{
          setBook(data);
          setInitiale(data);
        })
      }
      
      const [books, setBook] = useState([]);
      const [initiale, setInitiale] = useState([]);
      
      const  handleSearch = async(tag)=>{
        setBook(initiale)
      if (tag.length > 0) {
        const data = initiale.filter((book)=> book.titre.includes(tag));
        setBook(data);
      }}
  return (
    <LayoutStudent actif="qr">
    <div className="container-xxl flex-grow-1 container-p-y">
      <h4 className="fw-bold py-3 mb-4">
        <span className="text-muted fw-light">Dashboard /</span> Questions
      </h4>
      <div className="row">
                      {books.length == 0?
                          <h2>Aucune questions disponible pour <b>{localStorage.getItem("classe")}</b> </h2>
                      :books.map((livre)=>{
                          return (<div className="col-sm-6 col-lg-4 mt-2 mb-5  ">
                          <div className="single_special_cource card px-4 py-5">
                              <img src="/template/etrain-master/img/quiz.svg" className="special_img" alt="" />
                              <div className="special_cource_text" >
                                  <Link to={"/questions/"+livre.id} className=" mb-5" ><b style={{color:"#bb8f47"}} className="mb-2">{livre.by}</b> </Link>
                                  <Link to={"/questions/"+livre.id} className=" mb-5 " ><i  className="mb-2 ml-1">~   {livre.type}</i> </Link>
                                  <Link to={"/questions/"+livre.id}><h3>{livre.titre}</h3></Link>
                                  <p className='mt-3'>{livre.resumer}</p>
                                  
                              </div>
      
                          </div>
                      </div>);
                      })}
                      
                      
                      
                  </div>
    </div>
  </LayoutStudent>
  )
}

export default Questions