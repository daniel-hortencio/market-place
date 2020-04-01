import React from 'react'
import { Link } from 'react-router-dom'
import { FiLogOut } from 'react-icons/fi'


import H1 from '../H1'
import H2 from '../H2'
import Li from '../Li'
import SearchBar from '../SearchBar'

import './styles.css'

export default function Navbar(props){
    return(
        <nav className={props.className}>
            <H1 text="Admin" className="navbar-admin-h1"/>
            <SearchBar />
            
            <Link to="/" className="link">
                <Li className="navbar-li">
                    <H2 text="Sair" />
                    <FiLogOut size={22} color={"#fff"}/>
                </Li>
            </Link>
        </nav>
    )
}