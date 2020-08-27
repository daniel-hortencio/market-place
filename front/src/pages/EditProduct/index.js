import React from 'react'
import { Link } from 'react-router-dom'
import { IoMdArrowBack } from 'react-icons/io'
import { Button, Row, Col, Divider } from 'react-bootstrap'

import FormNewProduct from '../../components/FormNewProduct'
import Dashboard from '../../components/Dashboard'

export default function EditProduct(props){
    const id = props.match.params

    return(
        <Dashboard>
            <Row>
                <Col>
                    <h2>Edit Product</h2>
                </Col>

                <Col md="auto">
                    <Link to="/products">
                        <Button variant="outline-primary">
                            <IoMdArrowBack /> 
                            Voltar
                        </Button>
                    </Link>
                </Col>
            </Row>

            <Row>
                <hr style={{width: `100%`, height: `2px`}}/>
            </Row>

            <Row>
                <Col md="auto">
                    <h4><strong>Current Product</strong></h4>
                    <p><strong>ID:</strong>{`${props.match.params.id}`}</p>
                    <p><strong>Name:</strong> Qualquer</p>
                    <p><strong>Brand:</strong> Nike</p>
                    <p><strong>Gender:</strong> Male</p>
                    <p><strong>Price:</strong> 145.90</p>
                </Col>  
                
                <Col>
                    <FormNewProduct />
                </Col>  
            </Row>

            

        </Dashboard>
    )
}