import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Outlet, useNavigate } from 'react-router-dom'

const AuthLayouts = () => {
  const navigate = useNavigate()
  const {isAuth,user} = useSelector((state)=> state.auth)

  useEffect(() => {
    
      localStorage.clear()
    
  }, [""])
  
  return (
    <>
      <link rel="stylesheet" href="/template/snaet/assets/vendor/fonts/boxicons.css" />

<link rel="stylesheet" href="/template/snaet/assets/vendor/css/core.css" className="template-customizer-core-css" />
<link rel="stylesheet" href="/template/snaet/assets/vendor/css/theme-default.css" className="template-customizer-theme-css" />
<link rel="stylesheet" href="/template/snaet/assets/css/demo.css" />

<link rel="stylesheet" href="/template/snaet/assets/vendor/libs/perfect-scrollbar/perfect-scrollbar.css" />

<link rel="stylesheet" href="/template/snaet/assets/vendor/css/pages/page-auth.css" />

<script src="/template/snaet/assets/vendor/js/helpers.js"></script>
<script src="/template/snaet/assets/js/config.js"></script>
        <Outlet/>

     
    </>
  )
}

export default AuthLayouts