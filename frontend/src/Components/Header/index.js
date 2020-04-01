import React from 'react'

import H1 from '../H1'
import Button from '../Button'

import './styles.css'

export default function Header(){
    return(
        <header>
            <H1 text="Products" />
            <Button className="button-new-product" text="Novo" />
        </header>
    )
}