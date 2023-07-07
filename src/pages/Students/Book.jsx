
import axios from 'axios';
import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom'
import Bannerother from '../../layouts/Students/Bannerother'

const Book = () => {
  const {id} = useParams();
  const [book, setBook] = useState(null)
  const navigate = useNavigate();
  useEffect(() => {
    getBook();
  }, [""])
  const getBook = async()=>{
    await axios.get('/db/books.json').then(({data})=>{
      var result = data.filter((d)=> d.id === id);

      if(result.length == 1){
        setBook(result[0]);
      }else{
        navigate("/livres");
      }
    })
  }
  
  return (
    <>
      {book && <> <Bannerother actu={book.titre} previous="Livres" image='books (1).svg' />
      <div className='row'>
        <div className="col-lg-8 offset-lg-2 mt-5 py-4">
                <div className="card pt-5 px-5">
                    {/* <div className="card-title">
                        <h4><u>Exercice de {exo.matiere}</u></h4>
                    </div> */}
                    <div className="row my-5">
                        <div className="col-lg-9">
                            <h3>Titre: {book.titre}</h3>
                        </div>
                        <div className="col-lg-3 " style={{textAlign:"end"}}> <b>Par:</b> {book.auteur}</div>
                        
                    </div>
                    <div className="mb-2">
                      <b>Résumer:</b>
                    </div>
                    <div className="mb-5 px-4">
                      <p>{book.descriptions}</p>
                    </div>
                    <div className="mb-2">
                      <b>Livre:</b>
                    </div>
                  <div className="mt-3">
                    <embed src="/template/etrain-master/img/books.pdf" type="" style={{width:"100%",height:"800px"}} />
                  </div>
                    
                   
                    {/* <button className='btn_1 mx-4 my-5' onClick={handleSubmit}>Soumettre</button> */}
                </div>
            </div>
        </div>
      </>}
    </>
  )
}

export default Book