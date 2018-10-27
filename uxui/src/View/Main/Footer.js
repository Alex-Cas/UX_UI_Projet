import React, { Component } from 'react'
import {Container} from 'reactstrap'

class Footer extends Component
{
    render() {
        return (
            <footer className="text-white footer bg-secondary">
                <Container>
                    <span>AuliLand Experience</span><br/><br/>
                    <a href={"#"}>Contacter AuliLand</a><br/>
                    <a href={"#"}>Vivez l'Experience</a><br/>
                    <a href={"#"}>Votre nos site partenaire</a><br/>
                    <div>177 rue de la belle marquise 78150 Le Chesnay</div>
                </Container>
            </footer>
        )
    }
}

export default Footer
