import axios from 'axios'
import React, { useState } from 'react'
import { useEffect } from 'react'
import Bannerother from '../../layouts/Students/Bannerother'
import CoursCard from '../../layouts/Students/Cours'

const Cours = () => {
    const [cours, setCours] = useState([])

    const allCours = async()=>{
    await axios.get('../db/cours.json')
    .then(({data})=>{
        setCours(data);
    }).catch((err)=>{
        console.log('err', err)
    })
    }
    useEffect(() => {
      allCours();
    }, [])
    
    // useEffect(, []);

    
  return (
    <>
        <Bannerother previous='Accueil' actu='Cours' image='teache (4).svg'/>
        <div className='mt-5'>
            <CoursCard data={cours} dynamic={true} classe={localStorage.getItem("classe")} />
        </div>
                                
 
    </>
  )
}

export default Cours