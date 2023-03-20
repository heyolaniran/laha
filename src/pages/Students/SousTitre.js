import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import SousCour from "../../layouts/Students/SousCourCard";
import Bannerother from "../../layouts/Welcome/Bannerother";

const SousTitre = () => {
    const {sous_titre,id} = useParams();
    const [cour, setCour] = useState([]);
    const[sousTitre,setSousTitre] = useState([])
    const[sousTitres,setSousTitres] = useState([])

    useEffect(() => {
      getSousCour();
    }, [])
    const getSousCour = async()=>{
        axios.get('/db/sous_titre.json')
        .then(({data})=>{
            console.log('sous_titre', sous_titre)
            setSousTitres(data)
            var dl = data.filter((d)=>d.id == sous_titre)
            setSousTitre(dl[0]);
          
        })
        .catch((err)=>{
            console.log(err)
        })
        axios.get('/db/cours.json')
        .then(({data})=>{
            var dl = data.filter((d)=> d.id == id)
            setCour(dl[0])
        })
    }
  return (
    <>
        {sousTitre && <Bannerother previous={cour.titre} actu={sousTitre.titre} image="teache (3).svg" />}
        {sousTitre && <SousCour id={sousTitre.id} description={sousTitre.description} titre={sousTitre.titre} sous_titres={cour.sous_titres} cour={cour} qcm ={sousTitre.qcm} />}
    </>
  )
}

export default SousTitre