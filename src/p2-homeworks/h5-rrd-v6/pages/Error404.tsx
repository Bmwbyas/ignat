import React from 'react'
import s from './Error404.module.css'
import {NavLink} from "react-router-dom";
function Error404() {
    return (
        <div className={s.MainDiv}>

            <h1>Error: 404 page not found</h1>
            <p>Sorry, the page you're looking for cannot be accessed</p>

            <div><NavLink to="/" className={s.navlink}>Back to MainPage</NavLink></div>



        </div>
    )
}

export default Error404
