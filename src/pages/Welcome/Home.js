import React from 'react'
import Advance from '../../layouts/Welcome/Advance'
import Banner from '../../layouts/Welcome/Banner'
import Blogs from '../../layouts/Welcome/Blogs'
import Cours from '../../layouts/Welcome/Cours'
// import Feature from '../../layouts/Feature'
import Footer from '../../layouts/Welcome/Footer'
import Layouts from '../../layouts/Welcome/Layouts'
import Learning from '../../layouts/Welcome/Learning'
import Membre from '../../layouts/Welcome/MembreCounter'
import NavBar from '../../layouts/Welcome/NavBar'
// import Temoignage from '../../layouts/Temoignage'

const Home = () => {
  return (
    <>
        <Banner />
        <Learning />
        {/* <Feature /> */}
        <Membre />
        <Cours/>
        <Advance/>
        {/* <Temoignage/> */}
        <Blogs />

    </>
  )
}

export default Home