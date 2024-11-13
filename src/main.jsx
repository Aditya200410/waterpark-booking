import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider,Route, createBrowserRouter,createRoutesFromElements} from 'react-router-dom'
import Layout from './components/Layout.jsx'
import About from './components/About.jsx'

import Home from './components/Home.jsx'


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path='' element={<Home />} />
      <Route path='about' element={<About />} />
     
    </Route>
  )
)




ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router}/>
  </React.StrictMode>,
)
