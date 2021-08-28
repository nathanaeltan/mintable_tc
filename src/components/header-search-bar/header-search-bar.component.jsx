import React from 'react'
import { Col, Input, InputGroup, InputGroupAddon, Row } from 'reactstrap'
import './header-search-bar.styles.scss'
import { } from 'react-icons'

const HeaderSeachBar = () => {

    return (
        <Row>
            <Col xs="2">
                Logo Here
            </Col>
            <Col xs="10">
                <InputGroup className="ml-2" >
                    <Input placeholder="Search for anything" style={{ backgroundColor: '#F7F7FE' }}/>
                    <InputGroupAddon addonType="append" className="input-add" style={{ backgroundColor: '#E7E7FF' }}>
                        <div class="dropdown" >
                            <span className="type-text" >Type
                                <div className="arrow-wrapper">
                                    <i class="arrow down"></i>
                                </div>
                                <div className="search-wrapper">
                                    <i class="fa fa-search" aria-hidden="true"></i>

                                </div>
                            </span>
                            <div class="dropdown-content">
                                <p>Some Option</p>
                                <p>Some Option</p>
                                <p>Some Option</p>
                                <p>Some Option</p>
                            </div>
                        </div>
                    </InputGroupAddon>
                </InputGroup>
            </Col>
        </Row>
    )
}

export default HeaderSeachBar
