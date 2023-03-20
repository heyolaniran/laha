import React from 'react'
import Logocolor from '../logo/Logocolor'

const Configloading = () => {
  return (

    <>
    
    <div style={{overflow:"hidden",backgroundColor:"",position:"absolute",top:"50%",left:"50%",transform:'translate(-50%,-50%)',height:"max-content",padding:"3rem",zIndex:100,minHeight:"76vh"}} className="col-9 col-m-6 col-l-4 col-xl-4 col-xxl-3">
      <Logocolor />
      <div className='row vcenter  '  style={{position:"absolute",top:"50%",transform:"translate(-50%,-50%)",left:"50%",minWidth:"100%"}}>
        <img src="./img/hosting/hosting2.svg" className='=' style={{width:"500px",position:'absolute',left:"10vh"}}/>
        <div style={{fontSize:"35px",fontWeight:"900",fontFamily:"roboto"}} className="pcolor preload">
          <div className="title-container">
            <div className="spinner">
              <svg viewBox="0 0 100 100" >
                <circle cx="50" cy="50" r="46" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div></>
    
  )
}

export default Configloading