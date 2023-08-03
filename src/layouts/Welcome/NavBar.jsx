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
                                <span className="d-none d-lg-block" style={{fontWeight:"800",fontSize:"22px",color:"#1E90FF"}}>EDUTECH</span>
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
                                    <Link className="nav-link" to="/">Accueil</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/apropos" className="nav-link">A propos</Link>
                                </li>
                                
                                <li className="nav-item">
                                    <Link to="/abonnements" className="nav-link" href="blog.html">Abonnements</Link>
                                </li>
                                {/* <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" href="blog.html" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        Pages
                                    </a>
                                    <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                        <a className="dropdown-item" href="single-blog.html">Single blog</a>
                                        <a className="dropdown-item" href="elements.html">Elements</a>
                                    </div>
                                </li> */}
                                <li className="nav-item">
                                    <Link className="nav-link" to="/contact">Contact</Link>
                                </li>
                                <li className="  mr-5">
                                    <Link to="/register" className="btn_1" href="#">Inscription</Link>
                                </li>
                                <li className="">
                                    <Link to="/login" className="btn_2" href="#">Connexion</Link>
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