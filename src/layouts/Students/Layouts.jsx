import { useEffect } from "react"
import { Outlet, useNavigate } from "react-router-dom"
import ScrollToTop from "../../components/ScroolToTop"
import Footer from "./Footer"
import NavBar from "./NavBar"


const StudentLayouts = ({children}) => {
  const navigate = useNavigate();
  useEffect(() => {
    if (!localStorage.getItem("isAuth")) {
      navigate("/login")
    }
  
  }, [""])
  
  return (
    <>
    <link rel="stylesheet" href="/template/etrain-master/css/bootstrap.min.css" />
    
    <link rel="stylesheet" href="/template/etrain-master/css/animate.css" />
    <link rel="stylesheet" href="/template/etrain-master/css/owl.carousel.min.css" />
    <link rel="stylesheet" href="/template/etrain-master/css/themify-icons.css" />
    <link rel="stylesheet" href="/template/etrain-master/css/flaticon.css" />
    <link rel="stylesheet" href="/template/etrain-master/css/magnific-popup.css" />
    <link rel="stylesheet" href="/template/etrain-master/css/slick.css" />
    <link rel="stylesheet" href="/template/etrain-master/css/style.css"/>
    <ScrollToTop />
        <NavBar />
      
        {/* {children} */}
        <Outlet />
        <Footer />
    </>
  )
}

export default StudentLayouts