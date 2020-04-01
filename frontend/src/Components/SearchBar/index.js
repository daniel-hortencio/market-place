import React from 'react'
import { FaSearch } from 'react-icons/fa'

import './styles.css'

export default function SearchBar(){
    return(
        <div className="search-bar"> 
            <FaSearch size={20} color={'#f64343'}/>                          
            <input type="text" placeholder="Buscar..."/>
        </div>
    )
}