import React from 'react'
import { Link } from 'react-router-dom'
import { FiPlusCircle } from 'react-icons/fi'
import { MdSearch } from 'react-icons/md'
import { Row, Col, Button, InputGroup, FormControl } from 'react-bootstrap'

import TableProducts from '../../components/TableProducts'
import Dashboard from '../../components/Dashboard'

export default props => {
    return(
        <Dashboard>            
            <Row>
                <Col>
                    <h2>Products List</h2> 
                </Col>
                <Col >
                    <InputGroup className="mb-3">
                        <InputGroup.Prepend>
                        <InputGroup.Text id="basic-addon1"><MdSearch /></InputGroup.Text>
                        </InputGroup.Prepend>
                        <FormControl
                        placeholder="Search"
                        aria-label="Username"
                        aria-describedby="basic-addon1"
                        />
                    </InputGroup>
                </Col>

                <Col md="auto">
                    <Link to="/new">
                        <Button>
                            <FiPlusCircle /> 
                            Novo
                        </Button>
                    </Link>
                </Col>
            </Row>

            <TableProducts />

        </Dashboard>
    )
}