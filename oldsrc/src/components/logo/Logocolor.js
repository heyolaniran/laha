import React, { useEffect, useState } from 'react'

const Logocolor = ({showName,color}) => {
  const [url, setUrl] = useState('./img/logo/color2.png')
  const [fonceColor, setFonceColor] = useState('#0b7bad')
  const [claireColor, setClaireColor] = useState('#11c1ea')
  useEffect(() => {
   if(color=='white') {
    setUrl('./img/logo/white2.png')
    setFonceColor('#b5b5b5')
    setClaireColor('#ffffff')
  }
   if(color=='black') {
    setUrl('./img/logo/black2.png')
    setFonceColor('#000000')
    setClaireColor('#868686')
  }
  }, [])
  
  return (
    <div className='row vcenter ' >
      
        <img src={url} style={{width:"40px",padding:"5px 0px"}} />
        {showName && (<span style={{fontSize:'25px',fontWeight:"bold",color:fonceColor,padding:"0px 10px"}}>Gesti<span style={{color:claireColor}}>Stock</span></span>)}
        
    </div>
  )
}

export default Logocolor