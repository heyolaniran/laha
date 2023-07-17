import axios from "axios";
import { useState } from "react"
import { useNavigate } from "react-router-dom";


const Packs = () => { 

    const [item,  setItem] = useState({}) ; 
    const navigate = useNavigate() 
    const handleSubmit = () => { 
        axios.get(`${process.env.REACT_APP_SANCTUM}/sanctum/csrf-cookie`).then((response) => { 
            axios.get(`${process.env.REACT_APP_BACKEND_SOURCE}/packs`, item).then((data) => { 
                if(data.data.status)
                navigate("/admin/cours") ; 
            })
        })
    }
    return (
        <>
            <div className="layout-wrapper layout-content-navbar">
                    <form onSubmit={handleSubmit}>
                        <div className="row my-2">
                           <div class="form-group">
                             <label for=""></label>
                             <input type="text"  class="form-control" defaultValue={""} onChange={(e) => {
                                setItem({...item, name: e.target.value})
                               }} aria-describedby="helpId" placeholder=""/>
                             <small id="helpId" class="form-text text-muted">Help text</small>
                           </div>
                        </div>
                        <div class="form-group">
                          <label for="">Montant </label>
                          <input type="number"
                            class="form-control" defaultValue={0} onChange={(e) => { 
                                setItem({...item, amount : e.target.value})
                            }} aria-describedby="helpId" placeholder="" />
                          <small id="helpId" class="form-text text-muted">Help text</small>
                        </div>
                        <button type="submit" className="btn btn-primary"> Créer  le pack </button>
                    </form>
             </div>
        </>
    )
}


export default Packs; 