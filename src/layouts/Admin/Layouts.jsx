import { useEffect } from 'react'
import { Link, Outlet, useNavigate } from 'react-router-dom'
import ScrollToTop from '../../components/ScroolToTop'
import { useDispatch, useSelector } from 'react-redux';
import { checkToken, initAuth } from '../../reducers/modules/Auth/login';
import { useState } from 'react';

const Layouts = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch()
  const checkIsAuth =async ()=>{
    const token = localStorage.getItem('laha_token');
  
    if(token){
      /*const res = await checkToken(token)
      if(res !== false){
        dispatch(initAuth(res)) 
        if(res.role){
          if(res.role == "admin"){
            navigate('/admin/dashboard')
          }else if(res.role == "student"){
            navigate('/mon_compte')
          }else{
            console.log('user', res.role)
          }
        }else{
          navigate('/login')
        }
      }else{
        navigate('/login')
      }*/
    }else{
      navigate('/login')
    }
  }
  useEffect(() => {
    checkIsAuth()
  
  }, [""])

  
  return (
    <>
       

<ScrollToTop />


<Outlet />
    

<section id="component-footer">

                <footer className="footer bg-light">
                  <div
                    className="container-fluid d-flex flex-md-row flex-column justify-content-between align-items-md-center gap-1 container-p-x py-3"
                  >
                    <div>
                     
                    
                    </div>
                    <div>
                      <div className="form-check form-control-sm footer-link me-3">
                      <a
                        
                        target="_blank"
                        className="footer-text fw-bolder"
                        >GESCO,</a>2023
                      </div>
                      
                      <Link  to={"/logout"} className="btn btn-sm btn-outline-danger"
                        ><i className="bx bx-log-out-circle"></i> Deconnexion</Link>
                    </div>
                  </div>
                </footer>
              </section>
    
    </>
  )
}

export default Layouts