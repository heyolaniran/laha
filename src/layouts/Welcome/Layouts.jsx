
import { useEffect,useState, } from "react"
import { Outlet, useNavigate } from "react-router-dom"
import ScrollToTop from "../../components/ScroolToTop"
import Footer from "./Footer"
import NavBar from "./NavBar"
import { useSelector } from "react-redux"


const Layouts = ({children}) => {
  const {isAuth,user} = useSelector((state)=> state.auth)
// const [scripts, setScripts] = useState(null)
const navigator = useNavigate();
useEffect(() => {
  // console.log('localStorage.getItem("isAuth")', localStorage.getItem("classe")) 
  if(isAuth){
    console.log('ooo')
    navigator("/mon_compte")
  }

}, [""])

  return (
    <>
    
    <link rel="stylesheet" href="template/etrain-master/css/bootstrap.min.css" />
    <link rel="stylesheet" href="template/etrain-master/css/themify-icons.css" />
    <link rel="stylesheet" href="template/etrain-master/css/style.css"/>
        <ScrollToTop />
        <NavBar />
      
        {/* {children} */}
        
        <Outlet />
        
        <Footer />

        
    </>
  )
}

export default Layouts