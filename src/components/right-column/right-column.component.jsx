import React from 'react'
import { Col, Row, Button } from 'reactstrap'
import './right-column.styles.scss'
const RightColumn = () => {
    const imageStyle = { height: 200, width: 140 }
    return (
        <Col className="right-col" xs="3" style={{ boxShadow: "0 5px 12px rgb(0 0 0 / 0.2)" }}>
            <Row className="align-items-center my-4">
                <Col className="text-center">
                    Get More Tickets
                </Col>
                <Col className="d-flex justify-content-center">
                    <Button style={{ width: 100, backgroundColor: "#4911EA" }} className="draw-button">Buy</Button>
                </Col>

            </Row>
            <hr />
            <Row >

                <Col className="d-flex justify-content-center py-3">
                    <img style={imageStyle} src="https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,h_170,w_170,f_auto,b_white,q_auto:eco,dpr_1/qswhfntsmfbkrkhynk1f" alt="..." class="img-fluid" height="30" />

                </Col>
            </Row>
            <Row >
                <Col className="d-flex justify-content-center py-3">
                    <img style={imageStyle} src="https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,h_170,w_170,f_auto,b_white,q_auto:eco,dpr_1/qswhfntsmfbkrkhynk1f" alt="..." class="img-fluid" />

                </Col>
            </Row>
            <Row >
                <Col className="d-flex justify-content-center py-3">
                    <img style={imageStyle} src="https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,h_170,w_170,f_auto,b_white,q_auto:eco,dpr_1/qswhfntsmfbkrkhynk1f" alt="..." class="img-fluid" />

                </Col>
            </Row>



        </Col>
    )
}

export default RightColumn
