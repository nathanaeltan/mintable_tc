import React from 'react'
import { Row, Col } from 'reactstrap'
import './header-options.styles.scss'
const HeaderOptions = () => {
    return (
        <div>
            <Row>
                <Col>
                    Browse
                </Col>
                <Col>
                    Discover
                </Col>
                <Col>
                    Mint an item
                </Col>
                <Col style={{color: "#4F2EE4"}}>
                    Vote/DAO
                </Col>
                <Col>
                    My Account
                </Col>
                <Col>
                    Ethereum
                </Col>
            </Row>
        </div>
    )
}

export default HeaderOptions
