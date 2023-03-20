import React from 'react';
import ReactDOM from 'react-dom/client';
import { Route, BrowserRouter as Router, RouterProvider,Routes, Outlet } from 'react-router-dom';
import AdminLayouts from './layouts/Admin/Layouts';
import AuthLayouts from './layouts/Auth/Layouts';
import Logout from './layouts/Auth/Logout';
import StudentLayouts from './layouts/Students/Layouts';
import Cours from './layouts/Welcome/Cours';
import Layouts from './layouts/Welcome/Layouts';
import Dash from './pages/Admin/Admin/Dash';
import Cour from './pages/Admin/Students/Cour';
import Book from './pages/Admin/Students/Livre';
import DashStudent from './pages/Admin/Students/Dash';
import MesCours from './pages/Admin/Students/MesCours';
import MesExercices from './pages/Admin/Students/MesExercices';
import Exercice from './pages/Admin/Students/Exercice';
import Questions from './pages/Admin/Students/Questions';

import MesLivres from './pages/Admin/Students/MesLivres';
import Corriger from './pages/Admin/Students/Corriger';
import MesRepetitions from './pages/Admin/Students/MesRepetitions';
import MonAbonnement from './pages/Admin/Students/MonAbonnement';
import MonCompte from './pages/Admin/Students/MonCompte';
import SousTitres from './pages/Admin/Students/SousTitres';
import ForgetPassword from './pages/Auth/ForgetPassword';
import Login from './pages/Auth/Login';
import Register from './pages/Auth/Register';
import RegisterTwo from './pages/Auth/RegisterTwo';
// import Book from './pages/Students/Book';
// import Books from './pages/Students/Books';
// import Corriger from './pages/Students/Corriger';
// import Cour from './pages/Students/Cour';
// import Cours from './pages/Students/Cours';
// import Exercice from './pages/Students/Exercice';
import Forum from './pages/Admin/Students/Forum';
import ForumNational from './pages/Students/ForumNational';
import Forums from './pages/Students/Forums';
import HomeStudent from './pages/Students/Home';
import Question from './pages/Admin/Students/Question';
// import Questions from './pages/Students/Questions';
// import Repetiteurs from './pages/Students/Repetiteurs';
import SousTitre from './pages/Students/SousTitre';
import About from './pages/Welcome/About';
import Contact from './pages/Welcome/Contact';
import Home from './pages/Welcome/Home';
import Pricing from './pages/Welcome/Pricing';
import Navigator from './routes/Navigator';
import Details from './pages/Admin/Students/Details';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <>
    <Router >
        <Routes >
            <Route  element={<Layouts/>}>
                <Route path="/" element={<Home />}  />
                <Route path="/apropos" element={<About />}  />
                <Route path="/contact" element={<Contact />}  />
                <Route path="/abonnements" element={<Pricing />}  />
                
            </Route>
            <Route element={<AuthLayouts/>}>
                <Route path="/login" element={<Login />}  />
                <Route path="/logout" element={<Logout />}  />
                <Route path="/register" element={<Register />}  />
                <Route path="/pass" element={<RegisterTwo />}  />
                <Route path="/forget-password" element={<ForgetPassword />}  />
                <Route path="*" element={<Login />}   />


            </Route>
             {/* <Route element={<StudentLayouts/>}>
                <Route path="/accueil" element={<HomeStudent />}  />

                <Route path="/forums/:type/:id" element={<Forum />}  />
            </Route>  */}
            <Route element={<AdminLayouts />}>
                {/* students routes */}

                <Route path="/questions/:id" element={<Question />}  />

                <Route path='/mon_compte' element={<DashStudent/>}/>
                <Route path='/cours' element={<MesCours/>}/>
                <Route path="/cours/:id" element={<Cour />}  />
                <Route path="/cours/:id/sous_titres/:sous_titre" element={<SousTitres />}  />
                <Route path="/cours/:id/sous_titres/:sous_titre/details" element={<Details />}  />

                <Route path="/repetitions" element={<MesRepetitions />}  />

                <Route path='/mon_abonnement' element={<MonAbonnement/>}/>
                <Route path='/exercices' element={<MesExercices/>}/>
                <Route path="/exercices/:id" element={<Exercice />}  />
                <Route path="/exercices/:id/corriger" element={<Corriger />}  />
                <Route path="/question-reponse" element={<Questions />}  />
                                
                <Route path="/forums/national" element={<Forum />}  />
                <Route path="/forums/international" element={<Forum type="inter" />}  />
                
                <Route path='/livres' element={<MesLivres/>}/>
                <Route path="/livres/:id" element={<Book />}  />

                <Route path='/informations' element={<MonCompte/>}/>

            </Route>


        </Routes>
    </Router>

    
   

       
</>
);

