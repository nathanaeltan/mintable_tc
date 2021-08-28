import React from 'react'
import { Row, } from 'reactstrap'
import LeftColumn from '../left-column/left-column.component'
import RightColumn from '../right-column/right-column.component'

const Body = () => {
    return (
        <div className="p-4" style={{ backgroundColor: "#F9F9F9" }}>
            <Row className="p-4 justify-content-around" >
                <RightColumn />
                <LeftColumn />

            </Row>
        </div >

    )
}

export default Body
