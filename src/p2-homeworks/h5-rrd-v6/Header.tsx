import React from 'react'
import {NavLink} from "react-router-dom";
import s from './Header.module.css'

function Header() {
    return (
        <div className={s.NavBody}>
            <button className={s.NavBotton}> menu</button>
            <div className={s.NavContent}>
                <div className={s.NavContentWrapper}>
                    <NavLink to="/pre-junior" className={s.NavItem}>PreJunior</NavLink>

                    <NavLink to="/junior" className={s.NavItem}>Junior</NavLink>

                    <NavLink to="/junior+" className={s.NavItem}>Junior+</NavLink>

                </div>
            </div>
        </div>
    )
}

export default Header
