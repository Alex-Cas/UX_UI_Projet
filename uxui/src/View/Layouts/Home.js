import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import {Container, Col, CardImg, Row,
    Nav, NavItem, NavLink, TabContent, TabPane} from 'reactstrap'
import {Line, Pie} from 'react-chartjs-2'

class Home extends Component
{
    constructor(props) {
        super(props)

        this.state = {
            activeTab: '1'
        }
    }

    toggle = (tab) => {
        if (this.state.activeTab !== tab) {

            this.setState({
                activeTab: tab
            })
        }
    }

    renderPresentation = () => {

        return (
            <div>
                <div className={"title"}>
                    AuliLand Experience
                </div>
                <div>
                <Row>
                    <Col xs={8}>
                        <CardImg className="m-3" style={{'maxWidth': '100%'}}  alt="Photo d'attraction" src={require("../../img/1.jpg")} />
                    </Col>
                    <Col xs={4}>
                        <p className="p-3">
                            Une entente a été conclue en août 1992 pour l'établissement du AuliLand Experience dans le nord de l'île Banks, plus précisément dans le secteur de la rivière Thomsen. Les Inuvialuits et leurs ancêtres utilisent la région du parc depuis au moins 3 400 ans. Aulavik signifie « lieu de passage » en inuvialuktun.
                        </p>
                    </Col>
                </Row>
                </div>
            </div>
        )
    }

    renderStats = () => {

        const dataLine = {
          labels: ['Janvier', 'Fevrier', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet'],
          datasets: [
            {
              label: 'Visiteurs',
              fill: false,
              lineTension: 0.1,
              backgroundColor: 'rgba(75,192,192,0.4)',
              borderColor: 'rgba(75,192,192,1)',
              borderCapStyle: 'butt',
              borderDash: [],
              borderDashOffset: 0.0,
              borderJoinStyle: 'miter',
              pointBorderColor: 'rgba(75,192,192,1)',
              pointBackgroundColor: '#fff',
              pointBorderWidth: 1,
              pointHoverRadius: 5,
              pointHoverBackgroundColor: 'rgba(75,192,192,1)',
              pointHoverBorderColor: 'rgba(220,220,220,1)',
              pointHoverBorderWidth: 2,
              pointRadius: 1,
              pointHitRadius: 10,
              data: [65, 59, 80, 81, 56, 55, 40]
            }
          ]
        }

        const dataPie = {
            labels: [
                'Hommes',
                'Femmes',
                'Enfants'
            ],
            datasets: [{
                data: [25, 40, 35],
                backgroundColor: [
                '#FF6384',
                '#36A2EB',
                '#FFCE56'
                ],
                hoverBackgroundColor: [
                '#FF6384',
                '#36A2EB',
                '#FFCE56'
                ]
            }]
        };

        return (
            <div className="p-3">
                <Row className="justify-content-center border-bottom mx-5 mb-3">
                    <h4>Statistiques des visiteurs</h4>
                </Row>
                <Row className="justify-content-center">
                    <Col xs={8} lg={4}>
                        <h5>Proportions hommes/femmes/enfants</h5>
                        <Pie data={dataPie} />
                    </Col>

                    <Col xs={8} className="text-center">
                        <h5>Nombre de visiteurs par mois</h5>
                        <Line data={dataLine} />
                    </Col>
                </Row>
            </div>
        )
    }

    render() {

        

        return (
            <Container>
                <Row className="py-3">
                    <Col>
                        <Nav tabs>
                            <NavItem>
                                <NavLink tag={Link} to="/" className={" " + (this.state.activeTab === '1' ? 'active' : '' ) }
                                onClick={() => { this.toggle('1') }}>
                                Présentation
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink tag={Link} to="/" className={" " + (this.state.activeTab === '2' ? 'active' : '' ) }
                                onClick={() => { this.toggle('2') }}>
                                Statistiques
                                </NavLink>
                            </NavItem>
                        </Nav>
                        <TabContent activeTab={this.state.activeTab} className="bg-white border border-top-0" >
                            <TabPane tabId="1">
                                {this.renderPresentation()}
                            </TabPane>
                            <TabPane tabId="2">
                                {this.renderStats()}
                            </TabPane>
                        </TabContent>
                        
                    </Col>
                </Row>
                
            </Container>
        )
    }
}

export default Home