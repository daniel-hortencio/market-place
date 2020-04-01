import React, { Fragment } from 'react'

import Navbar from '../../Components/Navbar'
import Header from '../../Components/Header'
import Table from '../../Components/Table'

import './styles.css'

export default function Admin(){
    return(
        <Fragment>
            <Navbar className={"navbar-admin"}/>
            <Header />
            <Table />
            
        </Fragment>
    )
}