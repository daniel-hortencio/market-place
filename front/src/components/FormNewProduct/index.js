import React, { useState } from 'react'
import { Form, Button, Row, Col } from 'react-bootstrap'

import api from '../../services/api'

export default function FormNewProduct(){
    const [name, setName ] = useState('')
    const [brand, setBrand ] = useState('')
    const [gender, setGender ] = useState('')
    const [price, setPrice ] = useState('')

    async function handleRegister(e){
        e.preventDefault()

        const data = {
            name,
            brand,
            gender,
            price
        }

        try{
            const res = await api.post(`products`, data)   
            alert(`Item ${res.id} cadastrado com sucesso!`)
        }catch(err){
            alert(`Erro ao cadastrar o item, tente novamente!`)
        }
    }

    return(     
        <Form onSubmit={handleRegister}>
            <Form.Group controlId="nameProduct">
                <Form.Label>Name</Form.Label>
                <Form.Control 
                    type="text" 
                    placeholder="Enter name" 
                    value={name} 
                    onChange={e => setName(e.target.value)}
                />
            </Form.Group>

            <Row>
                <Col>
                    <Form.Group controlId="brandProduct">
                        <Form.Label>Brand</Form.Label>
                        <Form.Control 
                            type="text" 
                            placeholder="Enter brand" 
                            value={brand}
                            onChange={e => setBrand(e.target.value)} 
                        />
                    </Form.Group>
                </Col>

                <Col>
                    <Form.Group controlId="brandProduct">
                        <Form.Label>Price</Form.Label>
                        <Form.Control 
                            type="text" 
                            type="number" 
                            step="0.01" 
                            min="0" 
                            placeholder="Price" 
                            value={price}
                            onChange={e => setPrice(e.target.value)}
                        />
                    </Form.Group>
                </Col>
            </Row>

            <Row>
                <Col md="auto">
                    <label for="male">
                        <input 
                            type="radio" 
                            id="male" 
                            name="gender" 
                            value="male" 
                            onClick={()=>setGender("Male")}
                            required
                        />
                        Male
                    </label>            
                    <br />
                </Col>

                <Col md="auto">
                    <label for="female">
                        <input 
                            type="radio" 
                            id="female" 
                            name="gender" 
                            value="female" 
                            onClick={()=>setGender("Female")}
                            required
                        />
                        Female
                    </label>
                    <br />
                </Col>
            </Row>

            <Button variant="primary" type="submit">
                Create
            </Button>
        </Form>
    )
}