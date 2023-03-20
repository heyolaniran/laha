import { Link } from "react-router-dom"

const Blogs = () => {
  return (
    <section className="blog_part section_padding">
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-xl-5">
                    <div className="section_tittle text-center">
                        <p>Questions/Reponses</p>
                        <h2>Ils s'interrogent</h2>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-sm-6 col-lg-4 col-xl-4">
                    <div className="single-home-blog">
                        <div className="card">
                            <img src="template/etrain-master/img/blog/blog_1.png" className="card-img-top" alt="blog" />
                            <div className="card-body">
                                <Link to="/login" className="btn_4">Mathematique</Link>
                                <Link to="/login">
                                    <h5 className="card-title">Quand dit-on que deux droites sont ...</h5>
                                </Link>
                                <p>Bonsoir les amis et professeurs j'aimerais avoir un peu d'eclairsissement sur la notion de para..</p>
                                <ul>
                                    <li> <span className="ti-comments"></span>2 Commentaires</li>
                                    <li> <span className="ti-heart"></span>25 J'aime</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-sm-6 col-lg-4 col-xl-4">
                    <div className="single-home-blog">
                        <div className="card">
                            <img src="template/etrain-master/img/blog/blog_2.png" className="card-img-top" alt="blog" />
                            <div className="card-body">
                                <Link to="/login" className="btn_4">Anglais</Link>
                                <Link to="/login">
                                    <h5 className="card-title">Difference entre Talk et Speack</h5>
                                </Link>
                                <p>Hello,Souvent dans la vie active(en Anglais)on utilise deux frequements deux pour désigne le fait de s'exprimer,j'aimerais savoir que...</p>
                                <ul>
                                    <li> <span className="ti-comments"></span>38 Commentaires</li>
                                    <li> <span className="ti-heart"></span>20 J'aime</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-sm-6 col-lg-4 col-xl-4">
                    <div className="single-home-blog">
                        <div className="card">
                            <img src="template/etrain-master/img/blog/blog_3.png" className="card-img-top" alt="blog" />
                            <div className="card-body">
                                <Link to="/login" className="btn_4">Français</Link>
                                <Link to="/login">
                                    <h5 className="card-title">Quand utilise le mot "ce","se","c'est","s'est"</h5>
                                </Link>
                                <p>Bonsoir, j'ai une pétite preoccupations,vous aide seront les bienvenues.J'aimerais savoir quand utlise ton "c...</p>
                                <ul>
                                    <li> <span className="ti-comments"></span>60 Commentaires</li>
                                    <li> <span className="ti-heart"></span>20 J'aime</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Blogs