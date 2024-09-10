import React from 'react'
import ReactDOM from 'react-dom/client'
import {BrowserRouter,RouterProvider,Route} from "react-router-dom";
import './index.css'
import { HeroesApp } from './HeroesApp'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <HeroesApp />
    </BrowserRouter>
  </React.StrictMode>,
)
