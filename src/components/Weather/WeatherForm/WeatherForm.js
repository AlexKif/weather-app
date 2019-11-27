import React from 'react';
import {Button, Col, Form, FormGroup, Input, Label} from "reactstrap";

function WeatherForm(props) {
    return (
        <Form className="city-form">
            <FormGroup row className="justify-content-center">
                <Col xs="3" className="city-form__item">
                    <Label for="exampleCity">City</Label>
                    <Input type="text" name="city" id="exampleCity"/>
                </Col>
                <Col xs="auto">
                    <Button>Submit</Button>
                </Col>
            </FormGroup>
        </Form>
    );
}

export default WeatherForm;