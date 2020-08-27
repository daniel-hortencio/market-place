import React from 'react'
import { Link } from 'react-router-dom'
import { IoMdArrowBack } from 'react-icons/io'
import { Button, Row, Col } from 'react-bootstrap'

import FormNewProduct from '../../components/FormNewProduct'
import Dashboard from '../../components/Dashboard'

export default function NewProduct(){
    return(
        <Dashboard>
            <Row>
                <Col>
                    <h2>New Product</h2>
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
            
            <FormNewProduct />
        </Dashboard>
    )
}