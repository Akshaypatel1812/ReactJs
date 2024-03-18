import React, { useEffect } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './Layout'
import Home from './components/Home'
import About from './components/About.jsx'
import ContactUs from './components/ContactUs.jsx'
import GitHubPage from './components/GitHubPage.jsx'
import LoginPage from './components/Login.jsx'
import User from './components/User.jsx'


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
         
      <Route path='/Home' element={<Home/>}/>
      < Route path='about' element={<About/>}/>
      < Route path='contact' element={<ContactUs/>}/>
      < Route path='git' element={<GitHubPage/>}/>
      < Route path='login' element={<LoginPage/>}/>
      < Route path='user/:userId' element={<User/>}/>
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
