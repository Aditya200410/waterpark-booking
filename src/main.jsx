import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider,Route, createBrowserRouter,createRoutesFromElements} from 'react-router-dom'
import Layout from './components/Layout.jsx'
import About from './components/About.jsx'

import Home from './components/Home.jsx'
import Contact from './components/Contact'
import Farmvilla from './components/farmvilla'
import Influencers from './components/Influencers'


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path='' element={<Home />} />
      <Route path='contact' element={<Contact />} />
      <Route path='about' element={<About />} />
      <Route path='farmvilla' element={<Farmvilla/>}/>
      <Route path='influencers' element={<Influencers />} />
      <Route path='resorts' element={<About />} />
    </Route>
  )
)




ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router}/>
  </React.StrictMode>,
)
