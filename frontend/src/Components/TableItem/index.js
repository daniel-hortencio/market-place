import React, { Fragment } from 'react'
import { FiTrash2, FiEdit3} from 'react-icons/fi'

import Divisor from '../Divisor'

import './styles.css'

function TableItem(props){
 
    if(props.className==="item"){
        return(        
            <Fragment>
                <div className={props.className}>
                    <div className="item-column-1" >
                        <img src={props.imageUrl} class="image-thumbnail"/>
                    </div>
                    <p className="item-column-2">{props.name}</p>
                
                    <p className="item-column-3">{props.brand}</p>
                    <p className="item-column-4">{props.gender}</p>
                    <p className="item-column-5">R$ {props.price}</p>
                    <p className="item-column-6">{props.code}</p>
                    <div className="item-column-7">
                        <FiEdit3 size={25} color={"#aaa"} />
                        
                    </div>  
                    <div className="item-column-8">
                        <FiTrash2 size={25} color={"#aaa"} />
                    </div>             
                </div>
                <Divisor />
            </Fragment>
        )
    }else{
        return(
            <Fragment>
                <div className={props.className}>
                    <div className="item-column-1" />
                    <p className="item-column-2">{props.name}</p>
                
                    <p className="item-column-3">{props.brand}</p>
                    <p className="item-column-4">{props.gender}</p>
                    <p className="item-column-5">{props.price}</p>
                    <p className="item-column-6">{props.code}</p>
                    <div className="item-column-7" />                    
                    <div className="item-column-8" />                  
                </div>
                <Divisor />
            </Fragment>
        )
    }

}

export default TableItem