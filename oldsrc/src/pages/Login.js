import React from 'react'
import { Link } from 'react-router-dom'
import Logocolor from '../components/logo/Logocolor'

const Login = () => {
  return (<>
    <img src='./img/login/login.svg' className='col-5' style={{position:"absolute",top:"50%",left:"35%",transform:'translate(-50%,-50%)',zIndex:"-2"}} />
    <div style={{backgroundColor:"#fffffff5",position:"absolute",top:"50%",left:"50%",transform:'translate(-50%,-50%)',height:"max-content",padding:"3rem"}} className="col-9 col-m-6 col-l-4 col-xl-4 col-xxl-3">
      <Logocolor />
      <div style={{padding:"20px 5px"}}>
        <span style={{fontSize:"18px",fontWeight:"700"}}>Bonjour !</span>
        <br />
        <span style={{fontSize:"17px",fontWeight:"400"}} >Connectez-vous pour continuer</span> 
      </div>
      <div  style={{padding:"5px 5px 0px 0px "}} >
        <form className="login_form">
          <div>
            <input className='col-d-11 col-s-11 col-xxl-11' type="text" placeholder='Votre pseudo ou adresse mail' style={{margin:"15px 0px"}}  />
          </div>
          <div>
            <input className='col-d-11 col-s-11 col-xxl-11' type="password" placeholder='Votre mot de passe' style={{margin:"15px 0px"}}  />
          </div>
          <div>
          <Link to={'/home'}><button className='pbg col-12 tcenter'>S'IDENTIFIER</button></Link>
          </div>
          <div>
            <Link to={'/hosting'}><button className=' col-12 tcenter button_host'>Configure la base de données</button></Link>
          </div>
        </form>
         <div style={{margin:"20px 5px "}} className="tcenter">
          <u className='pcolor pointer'><span style={{marginBottom:"10px"}}> Mot de passe oublié?</span></u> 
         </div>
        
      </div>
    </div></>
  )
}

export default Login