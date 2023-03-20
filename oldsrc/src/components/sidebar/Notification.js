import React, { useEffect, useState } from 'react'
import { MdNotifications, MdOutlineMessage } from 'react-icons/md';

const Notification = ({alert=false,type ="message"}) => {
    const [showAlert, setShowAlert] = useState(alert)
    const [className, setClassName] = useState('notificatoin_alert_sidebar pointer')
   
    useEffect(()=>{
       
        if(type == "message"){
            setClassName('message_alert_sidebar pointer')
        }
    },[])
    
   
    
  return (
    <div className={className} onClick={(e)=> setShowAlert(false)}>
        {showAlert && (
        <div style={{backgroundColor:"red",width:"10px",height:'10px',padding:"0px",borderRadius:"10px",position:"absolute",marginLeft:"32px"}}>
        </div>)}
        {type=="message" ? (<MdOutlineMessage style={{color:"white",fontSize:"20px",padding:"15px 15px",backgroundColor:'#ffffff1a',marginRight:"10px",borderRadius:"25px"}} />
            ):(<MdNotifications style={{color:"white",fontSize:"20px",padding:"15px 15px",backgroundColor:'#ffffff1a',marginRight:"10px",borderRadius:"25px"}}  />)}
    </div>
  )
}

export default Notification