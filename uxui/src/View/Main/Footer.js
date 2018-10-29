import React, { Component } from 'react'
import {Container, Col, Row} from 'reactstrap'

class Footer extends Component
{
    render() {
        return (
            <footer className="text-white footer bg-secondary">
                <Container className="px-5 py-3">
                    <Row>
                        <Col xs={4}>
                            <span>AuliLand Experience</span><br/><br/>
                        </Col>
                        
                        <Col xs={4}>
                            <a href="/#">Contacter AuliLand</a><br/>
                            <a href="/#">Vivez l'Experience</a><br/>
                            <a href="/#">Votre nos site partenaire</a><br/>
                        </Col>
                        
                        <Col xs={4}>
                            <div>177 rue de la belle marquise 78150<br />Le Chesnay</div>
                        </Col>
                    </Row>
                </Container>
                <div className="text-center py-2 bg-dark">© 2018 Copyright: &nbsp;
                    <a href="/#">Auliland.com</a>
                </div>
            </footer>
        )
    }
}

export default Footer
