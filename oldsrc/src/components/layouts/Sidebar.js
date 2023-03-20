import React, { useEffect } from 'react'
import Logocolor from '../logo/Logocolor';
import { MdSearch,MdUpdate,MdImage,MdSettings, MdLogout, MdNotifications, MdMessage, MdOutlineMessage } from "react-icons/md"
import { SlLogout } from "react-icons/sl"
import { IoGridOutline } from "react-icons/io5"
import Notification from '../sidebar/Notification';
import Search from '../sidebar/Search';

const Sidebar = () => {
  const __ = (e,many= false) => {
    if(many) return document.querySelectorAll(e)
     return document.querySelector(e)
  };
  useEffect(() => {
      const sidebar = __('.sidebar')
      const avatar = __('.sidebar .sidebar-footer img')
      avatar.addEventListener('click',(e)=>{
        sidebar.classList.toggle('click')
      })
    }, [])
  return (
   <>
      <div className="sidebar">
        <div className='content_sidebar'>
          <div className='header_sidebar row vcenter'>
            <div><Logocolor showName={false}   /></div>
            <div className='row'>
              <Notification alert type='notifications' />
              <Notification  type='message' />
            </div>
          </div>
          <Search />
          <ul className='nav_links_sidebar' style={{margin:"10px",padding:"0px",overflowY:'scroll',maxHeight:"60vh"}}>
          <li style={{listStyleType:"none",height:"40px",margin:"25px 0px"}} className="">
              <div className='row ' style={{height:"40px"}}>
                <div className='' style={{width:"40px",marginRight:"15px"}}>
                  <div style={{margin:"10px"}}>
                    <IoGridOutline size='20px' color='white' />
                  </div>
                </div>
                <div className='' style={{width:"",alignItems:"center",padding:"7px 2px"}}>
                  <span style={{fontSize:"20px",color:"white"}}>Dashoboard</span>
                </div>
              </div>
          </li>
          <li style={{listStyleType:"none",height:"40px",margin:"25px 0px"}} className="">
              <div className='row ' style={{height:"40px"}}>
                <div className='' style={{width:"40px",marginRight:"15px"}}>
                  <div style={{margin:"10px"}}>
                    <IoGridOutline size='20px' color='white' />
                  </div>
                </div>
                <div className='' style={{width:"",alignItems:"center",padding:"7px 2px"}}>
                  <span style={{fontSize:"20px",color:"white"}}>Ventes</span>
                </div>
              </div>
          </li>
          <li style={{listStyleType:"none",height:"40px",margin:"25px 0px"}} className="">
              <div className='row ' style={{height:"40px"}}>
                <div className='' style={{width:"40px",marginRight:"15px"}}>
                  <div style={{margin:"10px"}}>
                    <IoGridOutline size='20px' color='white' />
                  </div>
                </div>
                <div className='' style={{width:"",alignItems:"center",padding:"7px 2px"}}>
                  <span style={{fontSize:"20px",color:"white"}}>Approvisionnement</span>
                </div>
              </div>
          </li>
          <li style={{listStyleType:"none",height:"40px",margin:"25px 0px"}} className="">
              <div className='row ' style={{height:"40px"}}>
                <div className='' style={{width:"40px",marginRight:"15px"}}>
                  <div style={{margin:"10px"}}>
                    <IoGridOutline size='20px' color='white' />
                  </div>
                </div>
                <div className='' style={{width:"",alignItems:"center",padding:"7px 2px"}}>
                  <span style={{fontSize:"20px",color:"white"}}>Factures</span>
                </div>
              </div>
          </li>
          <li style={{listStyleType:"none",height:"40px",margin:"25px 0px",borderRadius:"15px",marginRight:"0px",padding:"10px",backgroundColor:"white"}} className="">
              <div className='row ' style={{height:"40px"}}>
                <div className='' style={{width:"40px",marginRight:"15px"}}>
                  <div style={{margin:"10px"}}>
                    <IoGridOutline size='20px' color='black' />
                  </div>
                </div>
                <div className='' style={{width:"",alignItems:"center",padding:"7px 2px"}}>
                  <span style={{fontSize:"17px",color:"black"}}>Home</span>
                </div>
              </div>
          </li>
          <li style={{listStyleType:"none",height:"40px",margin:"25px 0px"}} className="">
              <div className='row ' style={{height:"40px"}}>
                <div className='' style={{width:"40px",marginRight:"15px"}}>
                  <div style={{margin:"10px"}}>
                    <IoGridOutline size='17px' color='white' />
                  </div>
                </div>
                <div className='' style={{width:"",alignItems:"center",padding:"7px 2px"}}>
                  <span style={{fontSize:"17px",color:"white"}}>Home</span>
                </div>
              </div>
          </li>
          <li style={{listStyleType:"none",height:"40px",margin:"25px 0px"}} className="">
              <div className='row ' style={{height:"40px"}}>
                <div className='' style={{width:"40px",marginRight:"15px"}}>
                  <div style={{margin:"10px"}}>
                    <IoGridOutline size='17px' color='white' />
                  </div>
                </div>
                <div className='' style={{width:"",alignItems:"center",padding:"7px 2px"}}>
                  <span style={{fontSize:"17px",color:"white"}}>Home</span>
                </div>
              </div>
          </li>
          <li style={{listStyleType:"none",minHeight:"40px",margin:"25px 0px",color:"black",backgroundColor: "white",borderRadius:"15px",padding:'10px 0px'}} >
              <div className='row ' style={{height:"40px"}}>
                <div className='' style={{width:"40px",marginRight:"15px"}}>
                  <div style={{margin:"10px"}}>
                    <IoGridOutline size='20px' color='black' />
                  </div>
                </div>
                <div className='' style={{width:"",alignItems:"center",padding:"7px 2px"}}>
                  <span style={{fontSize:"20px",color:"black"}}>OneMenu Hover</span>
                </div>
              </div>
              
          </li>
          <li style={{listStyleType:"none",minHeight:"40px",margin:"25px 0px",color:"white",borderRadius:"15px",padding:'10px 0px'}} >
              <div className='row ' style={{height:"40px"}}>
                <div className='' style={{width:"40px",marginRight:"15px"}}>
                  <div style={{margin:"10px"}}>
                    <IoGridOutline size='20px' color='white' />
                  </div>
                </div>
                <div className='' style={{width:"",alignItems:"center",padding:"7px 2px"}}>
                  <span style={{fontSize:"20px",color:"white"}}>OneMenu</span>
                </div>
              </div>
              
          </li>
          <li style={{listStyleType:"none",minHeight:"40px",margin:"25px 0px",color:"black",backgroundColor: "white",borderRadius:"15px",padding:'5px 0px'}} >
              <div className='row ' style={{height:"40px"}}>
                <div className='' style={{width:"40px",marginRight:"15px"}}>
                  <div style={{margin:"10px"}}>
                    <IoGridOutline size='20px' color='black' />
                  </div>
                </div>
                <div className='' style={{width:"",alignItems:"center",padding:"7px 2px"}}>
                  <span style={{fontSize:"20px",color:"black"}}>Dropdown</span>
                </div>
              </div>
              <ul style={{listStyleType:"none",margin:"15px 0px 5px"}} className="pointer">
                  <li>
                    <div className='vcenter' style={{display:"flex"}}>
                        <div style={{width:"8px",height:"8px",border:"1px solid #11c1ea",borderRadius:"50%",margin:"10px 15px 10px 2px"}}></div>
                        <div className=''><span>Ajouter une vente</span></div>
                    </div>
                  </li>
                  <li style={{margin:"10px 0px"}}>
                    <div className='vcenter' style={{display:"flex"}}>
                        <div style={{width:"10px",border:" 1px solid #11c1ea",margin:"10px 15px 10px 2px",backgroundColor:"#11c1ea"}}></div>
                        <div className=''><span>Ajouter une vente</span></div>
                    </div>
                  </li>
                
                  
              </ul>
          </li>
          <li style={{listStyleType:"none",height:"40px",margin:"25px 0px"}} className="">
              <div className='row ' style={{height:"40px"}}>
                <div className='' style={{width:"40px",marginRight:"15px"}}>
                  <div style={{margin:"10px"}}>
                    <IoGridOutline size='17px' color='white' />
                  </div>
                </div>
                <div className='' style={{width:"",alignItems:"center",padding:"7px 2px"}}>
                  <span style={{fontSize:"17px",color:"white"}}>Home</span>
                </div>
              </div>
          </li>
          <li style={{listStyleType:"none",height:"40px",margin:"25px 0px"}} className="">
              <div className='row ' style={{height:"40px"}}>
                <div className='' style={{width:"40px",marginRight:"15px"}}>
                  <div style={{margin:"10px"}}>
                    <IoGridOutline size='17px' color='white' />
                  </div>
                </div>
                <div className='' style={{width:"",alignItems:"center",padding:"7px 2px"}}>
                  <span style={{fontSize:"17px",color:"white"}}>Home</span>
                </div>
              </div>
          </li>
          <li style={{listStyleType:"none",height:"40px",margin:"25px 0px"}} className="">
              <div className='row ' style={{height:"40px"}}>
                <div className='' style={{width:"40px",marginRight:"15px"}}>
                  <div style={{margin:"10px"}}>
                    <IoGridOutline size='17px' color='white' />
                  </div>
                </div>
                <div className='' style={{width:"",alignItems:"center",padding:"7px 2px"}}>
                  <span style={{fontSize:"17px",color:"white"}}>Home</span>
                </div>
              </div>
          </li>
          
          </ul>
          <div className=" vcenter sidebar-footer" >
            <div className="vcenter" style={{padding:"0px",display:"flex"}}>
                {/* <Avatar value="./img/faces/face15.jpg" isImage={true} /> */}
                <img src="./img/faces/face15.jpg"  style={{width:"60px",height:"100%",marginRight:"15px",cursor:"pointer"}} />
                <div className="
                "><span style={{color:'white',fontSize:"16px"}}> KPONSO Albéricq</span>
                <br />
                <span> <i style={{color:"gray",fontSize:"12px"}}>Developpeur web</i></span></div>
                
            </div>
            <div className="pointer" style={{backgroundColor:"red",padding:"10px 5px 5px 10px",borderRadius:"5px",backgroundColor:"#ffffff1a"}}><MdLogout color='white' size='25px'  /></div>
          </div>
        </div>
        <div className='user_sidebar  vcenter' style={{justifyContent:"space-around",width:"500px"}}>
          <img style={{position:"absolute",top:"0px",left:"0px",width:"476px",height:"160px"}} src="./img/carousel/banner_13.jpg"  alt='Photo de profil'/>
          <div style={{backgroundColor:"#11101d",position:"absolute",left:"238px",width:"150px",height:"150px",top:"75px",transform:'translateX(-50%)',borderRadius:"50%",padding:"5px"}}>
            <img   src="./img/faces/face15.jpg" style={{width:"100%",height:"100%",borderRadius:"50%"}} alt='Photo de profil' />
            <div className='pointer' style={{position:"absolute",top:"0px",left:"0px",width:"calc(100%-5px)",height:"100%",borderRadius:"50%",backgroundColor:"#000000b1",display:"flex",textAlign:"center",alignItems:"center",}}>
              <span style={{color:"lightgray"}}><MdImage size={'35px'}  /> <br /> Modifier votre photo de profil</span>
            </div>
          </div>
          <div className="pointer" style={{borderRadius:"25px",position:"absolute",top:"10px",left:"416px",backgroundColor:"#00000061",display:"flex",justifyContent:"space-between",width:"80px",alignItems:"center",transform:"translate(-50%,-5px)",padding:"5px 10px "}}>
              <MdUpdate color='white' style={{padding:"0px 5px"}} />
              <span style={{fontSize:"15px",color:"white"}}>Modifier</span>
          </div>
          <section style={{marginTop:"250px"}}>
            <div style={{textAlign:"center",margin:"0px",fontSize:"25px",padding:"0px",fontWeight:"900"}} className="scolor">KPONSO Albericq </div>
            <div style={{textAlign:"center",margin:"0px",fontSize:"15px",padding:"0px",fontWeight:"200",color:"gray"}} className=""><i>albykps</i></div>
            <div className="pointer" style={{textAlign:"center",margin:"0px",fontSize:"15px",padding:"20px 30px",fontWeight:"200",color:"lightgray",}} > <span style={{opacity:"0.5",fontSize:"90px",position:"absolute",margin:"-35px -35px",}} className='scolor'>&#8220;</span>   Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores nihil nobis, accusamus alias qui voluptate itaque voluptatum quibusdam deleniti in modi neque consequuntur a amet minus excepturi iure eveniet! Cum sequi, pariatur veniam maiores asperiores molestiae itaque!<span style={{opacity:"0.5",fontSize:"90px",position:"absolute",margin:"-25px 5px",}} className='scolor'>&#8221;</span> </div>
            
            <div style={{display:"flex",justifyContent:"center"}} >
              <div style={{display:"flex",padding:"5px",justifyContent:"space-between",borderRadius:"15px",width:"100px"}} className=' vcenter pointer'>
                <div className='vcenter'>
                  <MdSettings style={{color:"lightgray"}} size='25px' />
                </div>
                <div className="vcenter" style={{color:"white",fontSize:"20px"}}>
                  Parametre
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
   </>
  )
}

export default Sidebar
