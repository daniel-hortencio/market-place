import React from 'react'

import './styles.css'

export default function H1(props){
    return(
        <h1 className={props.className}>
            {props.text}       
        </h1>           
    )
}