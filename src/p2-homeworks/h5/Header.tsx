import React from 'react'
import {NavLink} from 'react-router-dom'
import {PATH} from './Routes'
import s from './Header.module.css'

function Header() {
    return (
        <div className={s.header}>
            <NavLink className={s.link} to={PATH.PRE_JUNIOR}>pre junior</NavLink>
            <NavLink className={s.link} to={PATH.JUNIOR}>junior</NavLink>
            <NavLink className={s.link} to={PATH.JUNIOR_PlUS}>junior +</NavLink>
            <div className={s.block}></div>
        </div>
    )
}

export default Header
