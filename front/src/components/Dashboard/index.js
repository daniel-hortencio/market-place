import React from 'react'
import { Container, Row } from 'react-bootstrap'

export default function Dashboard(props){
    return(
        <Container>
            <Row>
                <h1>Admin</h1>
            </Row>

            {props.children}
        </Container>
    )
}