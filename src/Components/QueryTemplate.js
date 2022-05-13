import React, { Component } from "react";
import { Button, Col, Container, Form, FormControl, Row } from 'react-bootstrap';


class QueryTemplate extends Component {
    constructor(props) {
        super(props);
    }
    state = {
        operator: "",
        tableName: ""
    };
    render() {
        const clause = () => {
            if (this.state.operator === "SELECT") {
                return(
                    <div>
                        <Col>WHERE</Col>
                        <Form.Group className="text-group">
                            <Col>
                                <Form.Label>COLUMN</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Enter COLUMN NAME"
                                    onChange={(e) =>
                                        this.setState({
                                            operator: e.target.value,
                                        })
                                    }
                                />
                            </Col>
                        </Form.Group>
                        <Col>=</Col>
                        <Form.Group className="text-group">
                            <Col>
                                <Form.Label>VALUE</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Enter Value"
                                    onChange={(e) =>
                                        this.setState({
                                            operator: e.target.value,
                                        })
                                    }
                                />
                            </Col>
                        </Form.Group>
                    </div>
                )
            }
        }
        return (
            <div>
                <Row>
                    <Col>
                        <Form.Group className="text-group">
                            <Form.Label>OPERATOR</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter Operator"
                                onChange={(e) =>
                                    this.setState({
                                        operator: e.target.value,
                                    })
                                }
                            />
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group className="text-group">
                            <Form.Label>TABLE NAME</Form.Label>
                            <Form.Control type="text" placeholder="Enter Table Name" />
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group className="text-group">
                            <Form.Label>COLUMN NAME</Form.Label>
                            <Form.Control type="text" placeholder="Enter Column Name" />
                        </Form.Group>
                    </Col>
                    {clause()}
                </Row>
            </div>
        );
    }
}

export default QueryTemplate;
