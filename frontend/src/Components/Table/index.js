import React, { Fragment } from 'react'
import { FiTrash2, FiEdit3} from 'react-icons/fi'

import Divisor from '../Divisor'
import TableItem from '../TableItem'

import './styles.css'


export default function Table(){
    
    return(
        <div className="table-products">
            <TableItem 
                className="item-header"
                name="Name"
                brand="Brand"
                gender="Gender"
                price="Price"
                code="Code"
            />
            <div className="products-list">
                <TableItem 
                    className="item"
                    name="Camiseta Nike Dri-Fit Cool vermelha"
                    imageUrl="https://static.dafiti.com.br/p/Nike-Camiseta-Nike-Dri-Fit-Cool-Vermelha-1283-3914461-1-zoom.jpg"
                    brand="Nike"
                    gender="Female"
                    price={159.90}
                    code={4567296}
                />   
                <TableItem 
                    className="item"
                    name="Camiseta Nike Dri-Fit Cool vermelha"
                    imageUrl="https://static.dafiti.com.br/p/Nike-Camiseta-Nike-Dri-Fit-Cool-Vermelha-1283-3914461-1-zoom.jpg"
                    brand="Nike"
                    gender="Female"
                    price={159.90}
                    code={4567296}
                />  
                <TableItem 
                    className="item"
                    name="Camiseta Nike Dri-Fit Cool vermelha"
                    imageUrl="https://static.dafiti.com.br/p/Nike-Camiseta-Nike-Dri-Fit-Cool-Vermelha-1283-3914461-1-zoom.jpg"
                    brand="Nike"
                    gender="Female"
                    price={159.90}
                    code={4567296}
                />       
                <TableItem 
                    className="item"
                    name="Camiseta Nike Dri-Fit Cool vermelha"
                    imageUrl="https://static.dafiti.com.br/p/Nike-Camiseta-Nike-Dri-Fit-Cool-Vermelha-1283-3914461-1-zoom.jpg"
                    brand="Nike"
                    gender="Female"
                    price={159.90}
                    code={4567296}
                />      
                <TableItem 
                    className="item"
                    name="Camiseta Nike Dri-Fit Cool vermelha"
                    imageUrl="https://static.dafiti.com.br/p/Nike-Camiseta-Nike-Dri-Fit-Cool-Vermelha-1283-3914461-1-zoom.jpg"
                    brand="Nike"
                    gender="Female"
                    price={159.90}
                    code={4567296}
                />  
                <TableItem 
                    className="item"
                    name="Camiseta Nike Dri-Fit Cool vermelha"
                    imageUrl="https://static.dafiti.com.br/p/Nike-Camiseta-Nike-Dri-Fit-Cool-Vermelha-1283-3914461-1-zoom.jpg"
                    brand="Nike"
                    gender="Female"
                    price={159.90}
                    code={4567296}
                />  
                <TableItem 
                    className="item"
                    name="Camiseta Nike Dri-Fit Cool vermelha"
                    imageUrl="https://static.dafiti.com.br/p/Nike-Camiseta-Nike-Dri-Fit-Cool-Vermelha-1283-3914461-1-zoom.jpg"
                    brand="Nike"
                    gender="Female"
                    price={159.90}
                    code={4567296}
                />      
                <TableItem 
                    className="item"
                    name="Camiseta Nike Dri-Fit Cool vermelha"
                    imageUrl="https://static.dafiti.com.br/p/Nike-Camiseta-Nike-Dri-Fit-Cool-Vermelha-1283-3914461-1-zoom.jpg"
                    brand="Nike"
                    gender="Female"
                    price={159.90}
                    code={4567296}
                />
                <TableItem 
                    className="item"
                    name="Camiseta Nike Dri-Fit Cool vermelha"
                    imageUrl="https://static.dafiti.com.br/p/Nike-Camiseta-Nike-Dri-Fit-Cool-Vermelha-1283-3914461-1-zoom.jpg"
                    brand="Nike"
                    gender="Female"
                    price={159.90}
                    code={4567296}
                />
            </div>


        </div>
    )
}