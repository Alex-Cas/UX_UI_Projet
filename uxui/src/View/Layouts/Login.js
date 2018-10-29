import React, { Component } from 'react'
import {Form, FormGroup, Container, Label, Input,
    Card, CardTitle, CardBody, Button} from 'reactstrap'

class Login extends Component
{
    render() {
        return (
            <Container className="pt-5">
                <Card>
                    <CardBody>
                        <CardTitle>Connexion</CardTitle>
                        <Form>
                            <FormGroup>
                                <Label for="emailInput">Adresse Mail</Label>
                                <Input type="email" name="email" id="emailInput" aria-describedby="emailHelp" placeholder="Entrez votre adresse mail" />
                                <small id="emailHelp" className="form-text text-muted">On ne partagera jamais votre adresse à un tiers.</small>
                            </FormGroup>
                            <FormGroup>
                                <Label for="passwordInput">Mot de passe</Label>
                                <Input type="password" name="password" id="passwordInput" placeholder="Entrez votre mot de passe" />
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