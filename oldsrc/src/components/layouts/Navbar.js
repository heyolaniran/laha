import React from 'react'
import Logocolor from '../logo/Logocolor'
import { MdMenu,MdSearch,MdOutlineChatBubbleOutline } from "react-icons/md";
import { HiOutlineBellAlert } from "react-icons/hi2";
import Avatar from './Avatar';

const Navbar = () => {
  return (
    <nav className='vcenter' style={{boxShadow:"0px 5px 21px -5px #cdd1e1",backgroundColor:"white",position:"fixed",minWidth:"100vw"}}>
      <div className='row vcenter' style={{margin:"10px 20px"}}>
          <div className='col-s-1 col-m-1 col-xl-2 col-xxl-2 col-l-2 vcenter  ' style={{padding:"0px 5px"}}>
            <div className="d-none d-l-block d-xl-block d-xxl-block">
              <Logocolor showName={true}  />
            </div>
            <div className='d-xl-none d-l-none'>
              <Logocolor />
            </div>
            
          </div>
          <div className='col-m-7 col-s-8 col-xl-5 col-xxl-5 col-l-5 vcenter ' style={{padding:"10px 25px 0px 0px"}}>
            <div className='row '>
              <div className='col-xl-2 col-xxl-2 col-l-2 pointer '>
                <MdMenu  size="25px" color='#878c92'/>
              </div>
              <div className='col-xl-10 col-xxl-10 col-l-10 '>
                  <div className='row vcenter'>
               
                    <input type="text" style={{backgroundColor:"transparent",border:"1px solid #cacaca",padding:"7px 45px 7px 15px ",marginRight:"10px",borderRadius:"25px",width:"170px",border:"none"}} placeholder="Recherche un produit" />
                    <div style={{position:"absolute",marginLeft:"190px",padding:"12px 0px"}} className="pointer">
                      <MdSearch size="30px" color='#878c92' style={{margin:"2px 0px 0px"}} />
                    </div>
                    
                  </div>
              </div>
            </div>
          </div>
          <div className='col-m-4 col-s-3 col-xl-5 col-xxl-5 col-l-5 vcenter   ' style={{padding:"0px 0px 0px"}}>
            <div className='row vcenter' style={{justifyContent:"flex-end"}}>
              <div className='col-xl-4 col-xxl-4 col-l-4 col-s-10  col-m-7 '>
                <div className='row vcenter' style={{justifyContent:"space-around"}}>
                  <div className='pointer' style={{textAlign:'center',margin:"10px 0px 0px 0px"}}>
                    <HiOutlineBellAlert size='25px' color='#878c92'  />
                  </div>
                  <Avatar value="AK"  isImage={false} />
                  <div className=' pointer' style={{textAlign:'center',margin:"10px 20px 0px 0px"}}>
                    <MdOutlineChatBubbleOutline size='25px' color='#878c92'  />
                  </div>
                </div>
              </div>
            </div>
          </div>
      </div>
    </nav>
  )
}

export default  Navbar
