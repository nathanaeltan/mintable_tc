import React from 'react'
import { Row, Col } from 'reactstrap'
import HeaderOptions from '../header-options/header-options.component'
import HeaderSeachBar from '../header-search-bar/header-search-bar.component'
import './header.styles.scss'
const Header = () => {
    return (
        <div className="py-3 px-4">
            <Row className="mt-3 d-flex align-items-center">
                <Col xs="4">
                    <HeaderSeachBar />
                </Col>
                <Col xs="2"></Col>
                <Col>
                    <HeaderOptions />

                </Col>
            </Row>

        </div>
    )
}

export default Header
