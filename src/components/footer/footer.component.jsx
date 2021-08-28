import React from 'react'
import { Row, Col } from 'reactstrap'
import FooterCol from '../footer-col/footer-col.component'

const Footer = () => {
    return (
        <Row className="d-flex justify-content-center px-5" style={{ height: "25vh", backgroundColor: "#27043D", color: "white", paddingLeft: 60 }}>
            <Row className="pt-3 ml-5" style={{ marginTop: 50, paddingLeft: 58 }}>
                <Col>
                    <Row>
                        <Col >
                            <p className="font-weight-bold" style={{ fontWeight: "bold", fontSize: "1.1rem" }}>
                                Mintable
                            </p>


                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <p style={{ fontWeight: "bold", fontSize: "1.1rem" }}>
                                Join our community

                            </p>
                        </Col>
                    </Row>
                </Col>
                <Col xs="4">
                    <Row>
                        <Col>
                            <p style={{ fontWeight: "bold", fontSize: "1.1rem" }}>
                                My Account
                            </p>
                        </Col>
                        <Col></Col>
                    </Row>
                    <Row>
                        <Col>Create a store</Col>
                        <Col>My Profile</Col>
                    </Row>
                    <Row className="mt-4">
                        <Col>List an item for sale</Col>
                        <Col>Browse</Col>
                    </Row>
                </Col>


                <FooterCol title="Need Help?" subArr={["FAQ", "Mintable guide"]} />
                <FooterCol title="Buy an Item" subArr={["Digital Items", "Stores"]} />
                <FooterCol title="Legal" subArr={["Privacy Policy", "Terms of use"]} />




            </Row>

        </Row>
    )
}

export default Footer
