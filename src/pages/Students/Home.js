import React from 'react'
import Advance from '../../layouts/Students/Advance'
import Banner from '../../layouts/Students/Banner'
import Blogs from '../../layouts/Students/Blogs'
import Cours from '../../layouts/Students/Cours'
import CoursHome from '../../layouts/Students/CoursHome'
// import Feature from '../../layouts/Feature'
import Footer from '../../layouts/Students/Footer'
import Layouts from '../../layouts/Students/Layouts'
import Learning from '../../layouts/Students/Learning'
import Membre from '../../layouts/Students/MembreCounter'
import NavBar from '../../layouts/Students/NavBar'
// import Temoignage from '../../layouts/Temoignage'

const HomeStudent = () => {
  return (
    <>
        <Banner />
        <Learning />
        {/* <Feature /> */}
        <Membre />
        <CoursHome/>
        <Advance/>
        {/* <Temoignage/> */}
        <Blogs />

    </>
  )
}

export default HomeStudent