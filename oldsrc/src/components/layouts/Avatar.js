import React from 'react'

const Avatar = ({value,isImage}) => {
  return (
    <>
    {isImage ? 
        (<div className='sbg pointer' style={{width:"50px",height:"50px",borderRadius:'50%',margin:"0px 1px 0px 0px"}}>
            <img src={value} style={{width:"50px",height:"50px",borderRadius:'50%'}} alt='Avatar' />
        </div>)
        :
        (<div className='sbg pointer' style={{width:"50px",justifyContent:"flex-end",textAlign:"center",padding:'10px 0px',borderRadius:'50%',margin:"0px 1px 0px 0px"}}>
        <span className='' style={{fontSize:"15px",fontWeight:"900"}}>{value}</span>
        </div>)
    }
    </>
  )
}

export default Avatar