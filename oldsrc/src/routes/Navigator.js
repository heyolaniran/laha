import React from 'react'
import {createBrowserRouter, createRoutesFromElements, Route, Routes } from 'react-router-dom'
import Login from '../pages/Login'
import Signin from '../pages/Signin'
import Hosting from '../pages/Hosting'
import Home from '../pages/Home'

const Navigator = createBrowserRouter(
  createRoutesFromElements(
    <Route>

      <Route path="/login" element={<Login />}  />
      <Route path="/signin" element={<Signin />}  />
      <Route path="/home" element={<Home />}  />
      <Route path="/hosting" element={<Hosting />}  />
    </Route>
  )
)

export default Navigator