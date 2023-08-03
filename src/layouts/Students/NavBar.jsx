import { Link } from "react-router-dom"


const NavBar = () => {
  return (
    <header className="main_menu home_menu">
        <div className="container">
            <div className="row align-items-center">
                <div className="col-lg-12">
                    <nav className="navbar navbar-expand-xl navbar-light">
                        {/* <a className="navbar-brand" href="index.html"> <img src="template/etrain-master/img/favicon.png" alt="logo" /> </a> */}
                        <Link className="navbar-brand" to="/">
                            <div className="d-flex" style={{alignItems:"center"}}>
                                <img src="/template/etrain-master/img/favicon.png" alt=""  style={{width:"100px",height:"50px",objectFit:"cover",}}/>
                                <span className="d-none d-lg-block" style={{fontWeight:"800",fontSize:"22px",color:"#32CD32"}}>GESCO</span>
                            </div>
                        </Link>
                        <button className="navbar-toggler" type="button" data-toggle="collapse"
                            data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                            aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        <div className="collapse navbar-collapse main-menu-item justify-content-end"
                            id="navbarSupportedContent">
                            <ul className="navbar-nav align-items-center">
                                <li className="nav-item active">
                                    <Link className="nav-link" to="/accueil">Accueil</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/cours" className="nav-link">Cours</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/exercices" className="nav-link">Exercices</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/livres" className="nav-link">Livres</Link>
                                </li>
                                
                                <li className="nav-item">
                                    <Link to="/repetitions" className="nav-link" href="blog.html">Répétitions</Link>
                                </li>
                                
                               
                                <li className="nav-item dropdown">
                                    <a className="nav-link " href="blog.html" id="navbarDropdoswn"  data-toggle="dropdown" aria-expanded="false">
                                        Forum
                                    </a>
                                    <div className="dropdown-menu" aria-labelledby="navbarDropdoswn">
                                        <Link className="dropdown-item" to="/forums/national">National</Link>
                                        <Link className="dropdown-item" to="/forums/international">International</Link>
                                    </div>
                                </li>
                                <li className="nav-item">
                                <Link className="nav-link" to="/question-reponse">Q/R</Link>

                                </li>
                                <li className="nav-item dropdown">
                                    <a className="nav-link " href="blog.html" id="navbarDropdown"  data-toggle="dropdown" aria-expanded="false">
                                       <div style={{width:"40px",height:"40px",borderRadius:"30px",background:"url('/template/etrain-master/img/author/author_1.png')",backgroundPosition:"center center",backgroundSize: "cover"}}></div>
                                    </a>
                                    <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                        <Link className="dropdown-item" to="/mon_compte">Mon Compte</Link>
                                        <Link className="dropdown-item" to="/logout">Deconnexion</Link>
                                    </div>
                                </li>
                            </ul>
                            
                        </div>
                    </nav>
                </div>
            </div>
        </div>
    </header>
  )
}

export default NavBar