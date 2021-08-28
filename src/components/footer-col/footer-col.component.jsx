import React from 'react'
import { Col, Row } from 'reactstrap'

const FooterCol = ({ title, subArr }) => {
    return (
        <Col>
            <Row>
                <Col>
                    <p style={{ fontWeight: "bold", fontSize: "1.1rem" }}>
                        {title}
                    </p>
                </Col>
            </Row>
            {
                subArr.map(subMenu => {
                    return (
                        <Row>
                            <Col>{subMenu}</Col>
                        </Row>
                    )
                })
            }


        </Col>
    )
}

export default FooterCol
