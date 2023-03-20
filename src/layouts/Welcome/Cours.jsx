import React from 'react'
import { Link } from 'react-router-dom'

const Cours = () => {
  return (
    <section className="special_cource">
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-xl-5">
                    <div className="section_tittle text-center">
                        <p>Les plus populaire</p>
                        <h2>Nos Cours</h2>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-sm-6 col-lg-4">
                    <div className="single_special_cource">
                        <img src="template/etrain-master/img/special_cource_1.png" className="special_img" alt="" />
                        <div className="special_cource_text">
                            <Link to="/login"className="btn_4">Français</Link>
                            <h4></h4>
                            <Link to="/login"><h3>Cours de grammaire</h3></Link>
                            <p>Cours de grammaire Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptas sunt nulla autem tempore dolorem nobis cumque ad nihil eveniet nam blanditiis non, minus quisquam architecto id nisi libero voluptatem perspiciatis? </p>
                            <div className="author_info">
                                <div className="author_img">
                                    <img src="template/etrain-master/img/author/author_1.png" alt="" />
                                    <div className="author_info_text">
                                        <p>Conduire par</p>
                                        <h5><a href="#">Pr. K.Armel</a></h5>
                                    </div>
                                </div>
                                <div className="author_rating">
                                    <div className="rating">
                                        <a href="#"><img src="template/etrain-master/img/icon/color_star.svg" alt="" /></a>
                                        <a href="#"><img src="template/etrain-master/img/icon/color_star.svg" alt="" /></a>
                                        <a href="#"><img src="template/etrain-master/img/icon/color_star.svg" alt="" /></a>
                                        <a href="#"><img src="template/etrain-master/img/icon/color_star.svg" alt="" /></a>
                                        <a href="#"><img src="template/etrain-master/img/icon/star.svg" alt="" /></a>
                                    </div>
                                    <p>3.8 Etoiles</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                <div className="col-sm-6 col-lg-4">
                    <div className="single_special_cource">
                        <img src="template/etrain-master/img/special_cource_2.png" className="special_img" alt="" />
                        <div className="special_cource_text">
                            <Link to="/login"className="btn_4">Biologie</Link>
                            {/* <h4>$160.00</h4> */}
                            <Link to="/login"> <h3>Le corps Humain </h3></Link>
                            <p>Le corps Humain Lorem ipsum dolor, sit amet consectetur adipisicing elit. Recusandae praesentium, blanditiis similique aliquid iure veniam, a quas debitis itaque voluptatum ipsa eligendi provident necessitatibus animi. Repellat tempore dicta maiores ea.</p>
                            <div className="author_info">
                                <div className="author_img">
                                    <img src="template/etrain-master/img/author/author_2.png" alt="" />
                                    <div className="author_info_text">
                                        <p>Conduire par :</p>
                                        <h5><a href="#">Dr. C.Alice</a></h5>
                                    </div>
                                </div>
                                <div className="author_rating">
                                    <div className="rating">
                                        <a href="#"><img src="template/etrain-master/img/icon/color_star.svg" alt="" /></a>
                                        <a href="#"><img src="template/etrain-master/img/icon/color_star.svg" alt="" /></a>
                                        <a href="#"><img src="template/etrain-master/img/icon/color_star.svg" alt="" /></a>
                                        <a href="#"><img src="template/etrain-master/img/icon/color_star.svg" alt="" /></a>
                                        <a href="#"><img src="template/etrain-master/img/icon/color_star.svg" alt="" /></a>
                                    </div>
                                    <p>4.8 Etoiles</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                <div className="col-sm-6 col-lg-4">
                    <div className="single_special_cource">
                        <img src="template/etrain-master/img/special_cource_3.png" className="special_img" alt="" />
                        <div className="special_cource_text">
                            <Link to="/login"className="btn_4">Mathematique</Link>
                            <h4></h4>
                            <Link to="/login">  <h3>Les droits dans l'espace</h3> </Link> 
                            <p>Les droites dans l'espaces Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, ut. Modi itaque iusto sit, corporis provident delectus, sed qui est maiores ex commodi temporibus dolor excepturi, esse quisquam explicabo nemo?</p>
                            <div className="author_info">
                                <div className="author_img">
                                    <img src="template/etrain-master/img/author/author_3.png" alt="" />
                                    <div className="author_info_text">
                                        <p>Conduire par:</p>
                                        <h5><a href="#">Dr. James Well</a></h5>
                                    </div>
                                </div>
                                <div className="author_rating">
                                    <div className="rating">
                                        <a href="#"><img src="template/etrain-master/img/icon/color_star.svg" alt="" /></a>
                                        <a href="#"><img src="template/etrain-master/img/icon/color_star.svg" alt="" /></a>
                                        <a href="#"><img src="template/etrain-master/img/icon/color_star.svg" alt="" /></a>
                                        <a href="#"><img src="template/etrain-master/img/icon/color_star.svg" alt="" /></a>
                                        <a href="#"><img src="template/etrain-master/img/icon/star.svg" alt="" /></a>
                                    </div>
                                    <p>3.8 Etoiles</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Cours