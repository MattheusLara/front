import React from 'react'
import {Nav, NavLink, NavIcon, Bars} from './ElementosNavbar'

export const Navbar = ({trocar}) => {
    return (
        <>
            <Nav>
                <NavLink to='/'>Sushi</NavLink>
                <NavIcon onClick={trocar}>
                    <p>Menu</p>
                    <Bars />
                </NavIcon>
            </Nav>
        </>
    )
};