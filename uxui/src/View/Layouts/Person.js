import React, { Component } from 'react'
import {Button, Input, Form, Container, Card,
    CardBody, CardTitle, Col, Row} from 'reactstrap'
import MaintenanceItem from '../Components/MaintenanceItem.js'
import model from '../../Model/Personnel.js'
import maintenanceModel from '../../Model/Maintenances.js'

class Person extends Component
{
    constructor(props) {
        super(props)

        var id = parseInt(props.match.params.personId)
        this.state = {
            person: model.get(id),
            maintenances: maintenanceModel.list('person', id),
            isUpdating: false,
            newPerson: {
                firstName: '',
                surname: '',
                age: 0,
                fonction: '',
                salary: 0
            }
        }
    }

    fire = () => {

        model.delete(this.state.person.id)
    }

    toggleUpdate = () => {
        
        this.setState({isUpdating: !this.state.isUpdating})
        console.log(this.state.person)
    }

    submitUpdate = (event) => {

        var obj = {
                id: this.state.person.id,
                firstName: this.state.newPerson.firstName,
                surname: this.state.newPerson.surname,
                age: this.state.newPerson.age,
                fonction: this.state.newPerson.fonction,
                salary: this.state.newPerson.salary
            }

        var e = model.update(obj)
        console.log(e)
        this.setState({person: model.get(this.state.person.id)})
        event.preventDefault()
    }

    handleChange = (event) => {

        this.state.newPerson[event.target.name] = event.target.value
        this.forceUpdate()
    }

    displayForm = () => {

        if (this.state.isUpdating) {
            return (
                <Form>
                    first name: <Input type="text" name="firstName" value={this.state.newPerson.firstName} onChange={this.handleChange} placeholder="new first name"/>
                    surname: <Input type="text" name="surname" value={this.state.newPerson.surname} onChange={this.handleChange} placeholder="new surname"/>
                    age: <Input type="number" name="age" value={this.state.newPerson.age} onChange={this.handleChange} placeholder="new age"/>
                    fonction: <Input type="text" name="fonction" value={this.state.newPerson.fonction} onChange={this.handleChange} placeholder="new fonction"/>
                    salary: <Input type="number" name="salary" value={this.state.newPerson.salary} onChange={this.handleChange} placeholder="new salary"/>

                    <Button onClick={this.submitUpdate}>Submit</Button>
                </Form>)
        }
    }

    renderProfile = () => {
        return (
            <Container className="pt-5">
                <Card body>
                    <CardTitle>
                        <Row>
                            <Col md={5} className="text-center">
                                PHOTO
                            </Col>
                            <Col md={7} className="text-center">
                                NOM PRENOM ETC
                            </Col>
                        </Row>
                    </CardTitle>
                    <CardBody>
                        le reste
                    </CardBody>
                </Card>
            </Container>
        )
    }

    render() {
        var person = this.state.person
        var maintenances = this.state.maintenances

        return (
            <div>
                {this.renderProfile()}
                <p>
                    {person.firstName} {person.surname} <br />
                    {person.age} years old <br />
                    Working as {person.fonction} <br />
                    {person.salary}€ per month<br />
                </p>

                <Button onClick={this.fire}>vire moi ce mec</Button>
                <div>
                    Maintenances (ids): 
                    {maintenances.map( (item, idx) => {
                        return (<MaintenanceItem key={idx} maintenance={item}/>)
                    })}
                </div>
                <Button onClick={this.toggleUpdate}>modifie moi ce mec</Button>
                {this.displayForm()}
            </div>
        )
    }
}

export default Person