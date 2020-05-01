import React from "react"
import {Col, Row} from "reactstrap"

const Teaser = ({marketItems}) => {
    return(
        <div className="teaser">
            {marketItems.map((item, i)=>{
                const genres = item.genre.split(",").join(", ");
                return(
                    <div className="teaser__item d-flex my-3 p-2" key={i}>
                        <Col xs={12} md={6} className=" border-right d-flex flex-column align-items-center justify-content-center">
                            <Row>
                                <h2>{item.name}</h2>
                            </Row>
                            <Row>
                                <p>{genres}</p>
                            </Row>
                        </Col>

                        <Col xs={12} md={6} className="d-flex flex-column align-items-center justify-content-center">
                            <Row>
                                <h4>{item.city}, {item.state}</h4>
                            </Row>
                            <Row>
                                <h4>{item.telephone}</h4>
                            </Row>
                        </Col>
                    </div>
                )
            })}
        </div>
    )}
    
export default Teaser