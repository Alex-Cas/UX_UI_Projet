import React, { Component } from 'react'
import {Form, FormGroup, Container, Label, Input,
    Card, CardTitle, CardBody, Button} from 'reactstrap'

class Login extends Component
{
    constructor(props) {
        super(props)

    }

    render() {
        return (
            <Container className="pt-5">
                <Card>
                    <CardBody>
                        <CardTitle>Log in</CardTitle>
                        <Form>
                            <FormGroup>
                                <Label for="emailInput">Email address</Label>
                                <Input type="email" name="email" id="emailInput" aria-describedby="emailHelp" placeholder="Enter email" />
                                <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                            </FormGroup>
                            <FormGroup>
                                <Label for="passwordInput">Password</Label>
                                <Input type="password" name="password" id="passwordInput" placeholder="Enter password" />
                            </FormGroup>
                            
                            <FormGroup>
                                <Button color="dark">Se connecter</Button>{"  "}
                                <a href="/"><small>Mot de passe oublié ?</small></a>
                            </FormGroup>
                        </Form>
                    </CardBody>
                </Card>
            </Container>
        )
    }
}

export default Login