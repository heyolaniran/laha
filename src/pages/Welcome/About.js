import Advance from "../../layouts/Welcome/Advance"
import Bannerother from "../../layouts/Welcome/Bannerother"
import Layouts from "../../layouts/Welcome/Layouts"
import Learning from "../../layouts/Welcome/Learning"
import Membre from "../../layouts/Welcome/MembreCounter"

const About = () => {
  return (
    <>
        <Bannerother actu="A propos" previous="Accueil" image="teache (4).svg"/>
        <Advance/>
        <Membre/>
        <Learning/>
    </>
  )
}

export default About