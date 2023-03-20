import axios from 'axios';
import React, { useState } from 'react'
import { useEffect } from 'react';
import { useParams } from 'react-router-dom'
import CourCard from '../../layouts/Students/Cour';
import Bannerother from '../../layouts/Welcome/Bannerother';

const Cour = () => {
    const {id} = useParams();
    const [cour, setCour] = useState(null)
    const [cours, setCours] = useState(null)
    useEffect(()=>{
        console.log('id', id)
        getCour()
    }, []);
    const getCour = async()=>{
        axios.get('/db/cours.json')
        .then(({data})=>{
           var fil =  data.filter((cour)=> cour.id == id);
           setCour(fil[0]);
           var fil =  data.filter((cour)=> cour.id != id);
           setCours(fil.slice(0,5));

        }).catch((err)=>{
            console.log('err', err)
        })
    }
    
    
    return (
        <>
            {cour && <Bannerother actu={cour.titre} previous="Cours" image='teache (1).svg' /> }
            {cour && <CourCard id={cour.id} sous_titres={cour.sous_titres} cours={cours} image="teache (2).svg" auteur={cour.auteur}  titre={cour.titre} description={cour.description} heures={cour.times} />}
        </>
    )
}

export default Cour