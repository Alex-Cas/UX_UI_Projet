import React, { Component } from 'react'
import {Container} from 'reactstrap'

class Footer extends Component
{
    render() {
        return (
            <footer className="footer">
                <Container>
                    <span className="text-muted">Ceci est mon FOOTEr</span>
                </Container>
            </footer>
        )
    }
}

export default Footer
