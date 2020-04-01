import React from 'react'

import './styles.css'

export default function Li(props){
    return(
        <li className={props.className}>
            {props.children}
        </li>
    )
}