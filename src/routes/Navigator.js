
import {createBrowserRouter, createRoutesFromElements, Route, Routes } from 'react-router-dom'
import Login from '../pages/Auth/Login'
import About from '../pages/Welcome/About'
import Contact from '../pages/Welcome/Contact'
import Home from '../pages/Welcome/Home'


const Navigator = createBrowserRouter(
  createRoutesFromElements(
    <Route>

      <Route path="/accueil" element={<Home />}  />
      <Route path="/apropos" element={<About />}  />
      <Route path="/contact" element={<Contact />}  />
      <Route path="*" element={<Home />}   />
     
    </Route>
  )
)

export default Navigator