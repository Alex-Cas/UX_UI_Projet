import React, { Component } from 'react'
import {Container} from 'reactstrap'

class Footer extends Component
{
    render() {
        return (
            <footer className="text-white footer bg-secondary">
                <Container>
                    <span>Ceci est mon FOOTEr</span>
                </Container>
            </footer>
        )
    }
}

export default Footer
