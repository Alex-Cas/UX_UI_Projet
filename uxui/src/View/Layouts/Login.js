import React, { Component } from 'react'
import {Form, Container, Label, Input,
    Card, CardTitle, CardBody} from 'reactstrap'

class Login extends Component
{
    constructor(props) {
        super(props)

    }

    render() {
        return (
            <Container className="mt-5">
                <Card>
                    <CardBody>
                        <CardTitle>Log in</CardTitle>
                        <Form>
                            <Label for="emailInput">Email address</Label>
                            <Input type="email" name="email" id="emailInput" aria-describedby="emailHelp" placeholder="Enter email" />
                            <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                            
                            <Label for="passwordInput">Password</Label>
                            <Input type="password" name="password" id="passwordInput" placeholder="Enter password" />
                        </Form>
                    </CardBody>
                </Card>
            </Container>
        )
    }
}

export default Login