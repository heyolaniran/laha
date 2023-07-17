import axios from "axios";
import { useState } from "react"
import { useEffect } from "react"
import { useNavigate } from "react-router-dom";

const Tarifications = () => { 
    const [packs, setPacks] = useState([]) ; 
    const [item, setItems] = useState({}) ; 
    const navigate = useNavigate() ; 
    const handlePack = () => {
        axios.get(`${process.env.REACT_APP_SANCTUM}/sanctum/csrf-cookie`)
        .then((response) =>{
        axios.get(`${process.env.REACT_APP_BACKEND_SOURCE}/admin/payments`).then((data) => {
            setPacks(data.data)
        })
        })
    }

    const handleSubmit = () => { 
        setItems({...item, callback_url : ""}) ; 
       axios.get(`${process.env.REACT_APP_SANCTUM}/sanctum/csrf-cookie`).then((response) => { 
        axios.post(`${process.env.REACT_APP_BACKEND_SOURCE}/payments`,  item).then((data) => { 
            if(data.data.status) { 
                navigate("/admin/cours") ; 
            }
        })
       })
    }
    useEffect(() => {
        handlePack()  ; 
    }, [])
    return (
        <>
             <div className="layout-wrapper layout-content-navbar">
                    <form onSubmit={handleSubmit}>
                        <div className="row my-2">
                            <div className="col-12">
                                <label htmlFor="pack">Pack à choisir</label>
                                <select name="" id="pack" className="form-control" required  onChange={(e)=>setItems({...item,montant:e.target.value})}>
                                    {packs.map((pack)=>{
                                        return <option value={pack.montant} className="s">{pack.pack + "-" + pack.montant + " XOF"}</option>
                                    })}
                                </select>
                            </div>
                        </div>
                        <div className="row my-2">
                            <div className="col-12">
                                <label htmlFor="description">Description </label>
                                <div class="form-group">
                                  <label for="">Description </label>
                                  <textarea class="form-control"  rows="3" defaultValue={""} 
                                  onChange={(e) => setItems({...item , description: e.target.value})}>
                                  </textarea>
                                </div>

                            </div>
                        </div>
                        <button type="submit" className="btn btn-primary"> Payer  </button>
                    </form>
             </div>
        </>
    )
}

export default Tarifications ; 