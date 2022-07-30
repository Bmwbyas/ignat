import React from 'react'
import {NavLink} from "react-router-dom";
import s from './Header.module.css'

function Header() {
    return (
        <div className={s.NavBody}>
            <button className={s.NavBotton}> menu</button>
            <div className={s.NavContent}>
                <div className={s.NavContentWrapper}>
                    <div className={s.NavItem}><NavLink to="/pre-junior">PreJunior</NavLink>
                    </div>
                    <div className={s.NavItem}><NavLink to="/junior">Junior</NavLink>
                    </div>
                    <div className={s.NavItem}><NavLink to="/junior+">Junior+</NavLink>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header
