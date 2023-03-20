import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className="footer-area">
        <div className="container">
            <div className="row justify-content-between">
                <div className="col-sm-6 col-md-4 col-xl-3">
                    <div className="single-footer-widget footer_1">
                          
                            <Link className="navbar-brand" to="/">
                            <div className="d-flex" style={{alignItems:"center"}}>
                                <img src="template/etrain-master/img/favicon.png" alt=""  style={{width:"100px",height:"50px",objectFit:"cover",}}/>
                                <span className="d-none d-lg-block" style={{fontWeight:"800",fontSize:"22px",color:"#bb8f47"}}>LAHACADEMIA</span>
                            </div>
                        </Link>
                       
                        <p>But when shot real her. Chamber her one visite removal six
                            sending himself boys scot exquisite existend an </p>
                        <p>But when shot real her hamber her </p>
                    </div>
                </div>
                <div className="col-sm-6 col-md-4 col-xl-4">
                    <div className="single-footer-widget footer_2">
                        <h4>Newsletter</h4>
                        <p>Inscrivez vous à notre Newsletter pour ne rien rater
                        </p>
                        <form action="#">
                            <div className="form-group">
                                <div className="input-group mb-3">
                                    <input type="text" className="form-control" placeholder='Entrer votre email'
                                        onfocus="this.placeholder = ''"
                                        onblur="this.placeholder = 'Entrer votre email '" />
                                    <div className="input-group-append">
                                        <button className="btn btn_1" type="button"><i className="ti-angle-right"></i></button>
                                    </div>
                                </div>
                            </div>
                        </form>
                        <div className="social_icon">
                            <a href="#"> <i className="ti-facebook"></i> </a>
                            <a href="#"> <i className="ti-twitter-alt"></i> </a>
                            <a href="#"> <i className="ti-instagram"></i> </a>
                            {/* <a href="#"> <i className="ti-skype"></i> </a> */}
                        </div>
                    </div>
                </div>
                <div className="col-xl-3 col-sm-6 col-md-4">
                    <div className="single-footer-widget footer_2">
                        <h4>Nos contacts</h4>
                        <div className="contact_info">
                            <p><span> Adresse :</span> <b>Bénin,</b>Cotonou,Kouhounou </p>
                            <p><span> Téléphone :</span> +229 60 00 00 00</p>
                            <p><span> Email : </span>info@lahacademia.com </p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
        <div className="container-fluid">
            <div className="row">
                <div className="col-lg-12">
                    <div className="copyright_part_text text-center">
                        <div className="row">
                            <div className="col-lg-12">
                                <p className="footer-text m-0">
Copyright &copy;2023 All rights reserved
</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer