import * as React from "react";
import * as ControlLabel from "react-bootstrap/lib/ControlLabel";
import {FormGroup, FormControl, Button, Form, Col, Checkbox, Label} from "react-bootstrap";

export default class AuthorizationForm extends React.Component<{},{}> {
    render(): JSX.Element {
        return(
            <div>
                <Form horizontal>
                    <FormGroup controlId="formHorizontalEmail">
                        <Col componentClass={ControlLabel} sm={2}>
                            Email
                        </Col>
                        <Col sm={10}>
                            <FormControl type="email" placeholder="Email" />
                        </Col>
                    </FormGroup>

                    <FormGroup controlId="formHorizontalPassword">
                        <Col componentClass={ControlLabel} sm={2}>
                            Password
                        </Col>
                        <Col sm={10}>
                            <FormControl type="password" placeholder="Password" />
                        </Col>
                    </FormGroup>

                    <FormGroup>
                        <Col smOffset={2} sm={10}>
                            <Checkbox>Remember me</Checkbox>
                        </Col>
                    </FormGroup>

                    <FormGroup>
                        <Col smOffset={2} sm={10}>
                            <Button type="submit" bsStyle="primary">Sign in</Button>
                        </Col>
                    </FormGroup>
                </Form>
            </div>
        );
    }

}