import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { FiEdit3, FiTrash2 } from 'react-icons/fi'
import { Table } from 'react-bootstrap'

import api from '../../services/api'

export default function TableProducts(){
    const [products, setProducts] = useState([])
    
    /**
        UseEffect recebe dois parâmetros:
        (1) Qual função será executada
        (2) Quando essa função será executada
    */

    useEffect(() => {
        api.get('products').then(res =>{
            setProducts(res.data)
        })
    }, [])

    async function Delete(id){
        try{
            await api.delete(`products/${id}`)   
            setProducts(products.filter(product => product.id !== id))
            alert(`Item ${id} deletado com sucesso!`)
        }catch(err){
            alert(`Erro ao deletar o item ${id}, tente novamente!`)
        }
    }

    return(    
        <Table>
            <tr>
                <th>Id</th>
                <th>Name</th>
                <th>Brand</th>
                <th>Gender</th>
                <th>Price</th>
                <th>Actions</th>
            </tr>  

            {products.map(product =>
                <tr>
                    <td>{product.id}</td>
                    <td>{product.name}</td>
                    <td>{product.brand}</td>
                    <td>{product.gender}</td>
                    <td>{product.price}</td>
                    <td>
                        <Link to={`/edit/${product.id}`}>
                            <FiEdit3 />
                        </Link>                        
                        <FiTrash2 onClick={()=>Delete(product.id)}/>
                    </td>
                </tr>
            )} 
        </Table>
    )
}