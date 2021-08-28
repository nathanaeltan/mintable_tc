import React from 'react'
import { Col, Input, InputGroup, InputGroupAddon, Row } from 'reactstrap'
import './header-search-bar.styles.scss'
const HeaderSeachBar = () => {

    return (
        <Row>
            <Col xs="2">
                Logo Here
            </Col>
            <Col xs="10">
                <InputGroup className="ml-2">
                    <Input placeholder="Search for anything" />
                    <InputGroupAddon addonType="append" className="input-add" style={{ backgroundColor: '#E7E7FF' }}>
                        <div class="dropdown" >
                            <span className="type-text" style={{ display: "flex" }}>Type</span>
                            <div class="dropdown-content">
                            </div>
                        </div>
                    </InputGroupAddon>
                </InputGroup>
            </Col>
        </Row>
    )
}

export default HeaderSeachBar
