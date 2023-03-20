

const Bannerother = ({actu="A propos",previous="Accueil",image="home3.jpg"}) => {
  return (
    <section className="breadcrumb breadcrumb_bg" style={{backgroundImage: 'url("/template/etrain-master/img/'+image+'")'}}>
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <div className="breadcrumb_iner text-center">
                        <div className="breadcrumb_iner_item">
                            <h2 style={{color:"#000"}}>{actu}</h2>
                            <p style={{color:"#000"}}>{previous}<span>/</span>{actu}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Bannerother