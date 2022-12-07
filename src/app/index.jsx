import React , {Component} from "react"
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from "./pages/login.jsx"
import DashBoard from "./pages/dashBoard.jsx"
import Page404 from "./pages/404.jsx";
import '../../public/styles/main.scss'

const App = ReactDOM.createRoot(document.getElementById("id_main"));
App.render(
    <BrowserRouter>
        <Routes>
            <Route exact path='/login' element={<Login />} />
            <Route exact path='/' element={<DashBoard/>} />
            <Route exact path='*' element={<Page404/>} />
        </Routes>
    </BrowserRouter>
);