import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Configloading from '../components/loading/Configloading'
import Logocolor from '../components/logo/Logocolor'

const Hosting = () => {
  const [show, setShow] = useState(false)
  return (
    <>
    {show ? (<Configloading  />):(<>
    
    <img src='./img/hosting/hosting4.svg' className='col-5' style={{position:"absolute",top:"50%",left:"70%",transform:'translate(-50%,-50%)',zIndex:"-2"}} />
    <div style={{backgroundColor:"#fffffff5",position:"absolute",top:"50%",left:"50%",transform:'translate(-50%,-50%)',height:"max-content",padding:"3rem"}} className="col-9 col-m-6 col-l-4 col-xl-4 col-xxl-3">
      <Logocolor />
      <div style={{padding:"20px 5px 10px"}}>
        <span style={{fontSize:"18px",fontWeight:"700"}}>Connexion à la base de données !</span>
        <br />
        <span style={{fontSize:"17px",fontWeight:"400"}} >Configurer la connexion a la base</span> 
      </div>
      <div  style={{padding:"5px 5px 0px 0px "}} >
        <form className="login_form">
          <div className='row' style={{marginBottom:"10px"}}>
            <div className=' col-xl-6'>
              <label style={{fontWeight:"600"}}>Host</label>
              <input className='col-xl-10' type="text" placeholder='127.0.0.1' style={{margin:"2px 0px"}}  />
            </div>
            <div className=' col-xl-6' >
              <label style={{fontWeight:"600"}}>Port</label>
              <input className='col-xl-10' type="text" placeholder='3306' style={{margin:"2px 0px"}}  />
            </div>
          </div>
          <div style={{marginBottom:"60px"}}>
            <label style={{fontWeight:"600"}}>Username</label>
            <input className='col-d-11 col-s-11 col-xxl-11' type="text" placeholder='root' style={{margin:"2px 0px"}}  />
          </div>
          <div style={{marginBottom:"40px"}}>
            <label style={{fontWeight:"600"}}>Password</label>
            <input className='col-d-11 col-s-11 col-xxl-11' type="text" placeholder='root' style={{margin:"2px 0px"}}  />
          </div>
          <div>
            <button className='pbg col-12 tcenter' onClick={(e)=>setShow(true)}>CONFIGURER</button>
          </div>
          
        </form>
        
         <div style={{margin:"10px 5px 0px "}} className="tcenter"><Link to={'/login'} >
          <u className='pcolor pointer'><span style={{marginBottom:"1px"}}> Se connecter</span></u> 
          </Link></div>
       
      </div>
    </div></>)}</>
  )
}

export default Hosting