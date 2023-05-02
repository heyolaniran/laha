import React from 'react';
import ReactDOM from 'react-dom/client';
import { Route, BrowserRouter as Router, RouterProvider,Routes, Outlet } from 'react-router-dom';
import AuthLayouts from './layouts/Admin/Layouts';
import LogLayouts from './layouts/Auth/Layouts';
import Logout from './layouts/Auth/Logout';
import StudentLayouts from './layouts/Students/Layouts';
import Cours from './layouts/Welcome/Cours';
import WelcomeLayouts from './layouts/Welcome/Layouts';
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
import store from './store';
import { Provider, useSelector } from 'react-redux';
import 'react-tooltip/dist/react-tooltip.css'
import LayoutAdmin from './layouts/Admin/Admin/Layouts';
import HomeAdmin from './pages/Admin/Admin/Accueil';
import CoursAdmin from './pages/Admin/Admin/Cours';
import CreateCourAdmin from './pages/Admin/Admin/Cour/Create';
import UpdateCourAdmin from './pages/Admin/Admin/Cour/Update';
import ShowCourAdmin from './pages/Admin/Admin/Cour/Show';
import SousTitresAdmin from './pages/Admin/Admin/SousTitres';
import CreateSousTitreAdmin from './pages/Admin/Admin/SousTitre/Create';
import UpdateSousTitreAdmin from './pages/Admin/Admin/SousTitre/Update';
import ShowSousTitreAdmin from './pages/Admin/Admin/SousTitre/Show';
import BooksAdmin from './pages/Admin/Admin/Books';
import ShowBookAdmin from './pages/Admin/Admin/Book/Show';
import UpdateBookAdmin from './pages/Admin/Admin/Book/Update';
import CreateBookAdmin from './pages/Admin/Admin/Book/Create';


// const auth = useSelector((state)=>state.auth)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
    <Router >
        <Routes >
            <Route  element={<WelcomeLayouts/>}>
                <Route path="/" element={<Home />}  />
                <Route path="/apropos" element={<About />}  />
                <Route path="/contact" element={<Contact />}  />
                <Route path="/abonnements" element={<Pricing />}  />
                
            </Route>
            <Route element={<LogLayouts/>}>
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
            <Route element={<AuthLayouts />}>
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


                {/* Admin Routes */}
                <Route path='/admin/dashboard' element={<HomeAdmin />}/>

                <Route path='/admin/cours' element={<CoursAdmin />}/>
                <Route path='/admin/cours/create' element={<CreateCourAdmin />}/>
                <Route path='/admin/cours/:id/edit' element={<UpdateCourAdmin />}/>
                <Route path='/admin/cours/:id' element={<ShowCourAdmin />}/>
                
                
                <Route path='/admin/cours/:id/sous_titres' element={<SousTitresAdmin />}/>
                <Route path='/admin/cours/:id/sous_titres/create' element={<CreateSousTitreAdmin />}/>
                <Route path='/admin/sous_titres/:id/edit' element={<UpdateSousTitreAdmin />}/>
                <Route path='/admin/sous_titres/:id' element={<ShowSousTitreAdmin />}/>

                <Route path='/admin/livres' element={<BooksAdmin />}/>
                <Route path='/admin/livres/:id' element={<ShowBookAdmin />}/>
                <Route path='/admin/livres/:id/edit' element={<UpdateBookAdmin />}/>
                <Route path='/admin/livres/create' element={<CreateBookAdmin />}/>




            </Route>


        </Routes>
    </Router>

    
   

       
</Provider>
);

