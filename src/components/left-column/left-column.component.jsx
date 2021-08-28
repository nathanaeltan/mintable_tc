import React from 'react'
import { Col, Row, Button, Input } from 'reactstrap'
import './left-column.styles.scss'
const LeftColumn = () => {
    return (
        <Col className="pt-4 left-col" style={{boxShadow:"0 5px 12px rgb(0 0 0 / 0.2)"}}  >
            <Row>
                <Col className="d-flex justify-content-center">
                    <h1>Collectors Event</h1>
                </Col>
            </Row>
            <Row>
                <Col className="d-flex justify-content-center">
                    <h4>Participate and win high quality currated NFTs</h4>
                </Col>
            </Row>
            <Row className="pb-5 mt-4">
                <Col className="d-flex justify-content-center px-5">
                    <div className="pt-4 dashed-box">
                        <Row >
                            <Col className="d-flex justify-content-center py-3">
                                <img style={{ height: 200, width: 140 }} src="https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,h_170,w_170,f_auto,b_white,q_auto:eco,dpr_1/qswhfntsmfbkrkhynk1f" alt="..." class="img-fluid" />
                            </Col>
                        </Row>
                        <Row >
                            <Col className="d-flex justify-content-center py-3">
                                <p>Drag a ticket or use the button below to draw your ticket</p>
                            </Col>
                        </Row>
                    </div>
                </Col>
            </Row>
            <Row className="mt-3 pt-4">
                <hr />
                <Col xs="2">
                    <img style={{ height: 100, width: 140 }} src="https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,h_170,w_170,f_auto,b_white,q_auto:eco,dpr_1/qswhfntsmfbkrkhynk1f" alt="..." class="img-fluid" />
                </Col>
                <Col xs="6">
                    <Row>
                        <h3>Draw Tickets</h3>
                        <p>10 Tickets Found</p>
                        <br />
                        <p>Open your tickets and get a chance to in $10000 worth of high quality NFTs! Learn More</p>
                    </Row>
                </Col>
                <Col xs="4">
                    <Row>
                        <Col>
                            <Input type="select" className="custom-select" id="inputGroupSelect02">
                                <option selected>Silver Ticket(1)</option>
                            </Input>
                        </Col>
                    </Row>
                    <Row className="mt-2">
                        <Col className="d-flex justify-content-center">
                            <Button block className="draw-button" style={{ backgroundColor: "#4911EA" }}>Draw Ticket</Button>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Col>
    )
}

export default LeftColumn
