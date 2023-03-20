import { useEffect } from 'react'
import { Link, Outlet, useNavigate } from 'react-router-dom'
import ScrollToTop from '../../components/ScroolToTop'

const AdminLayouts = () => {
  const navigate = useNavigate();
  useEffect(() => {
    if (!localStorage.getItem("isAuth")) {
      navigate("/login")
    }
  
  }, [""])
  return (
    <>
       

<ScrollToTop />


<Outlet />
    

<section id="component-footer">
                <h5 class="pb-1 mb-4">Footer with Elements</h5>

                <footer class="footer bg-light">
                  <div
                    class="container-fluid d-flex flex-md-row flex-column justify-content-between align-items-md-center gap-1 container-p-x py-3"
                  >
                    <div>
                     
                    
                    </div>
                    <div>
                      <div class="form-check form-control-sm footer-link me-3">
                      <a
                        
                        target="_blank"
                        class="footer-text fw-bolder"
                        >LAHACADEMIA,</a>2023
                      </div>
                      
                      <Link  to={"/logout"} class="btn btn-sm btn-outline-danger"
                        ><i class="bx bx-log-out-circle"></i> Deconnexion</Link>
                    </div>
                  </div>
                </footer>
              </section>
    
    </>
  )
}

export default AdminLayouts