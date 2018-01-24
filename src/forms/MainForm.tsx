import * as React from 'react';
import {Col, Row, Jumbotron} from "react-bootstrap";
import './forms-style.css'
import AuthorizationForm from "./AuthorizationForm";


export default class MainForm extends React.Component<{}, {}> {
    render(): JSX.Element {
        return (
            <div>
                <Row className="main_indent">
                    <Col md={6} mdOffset={3}>
                        <Jumbotron className="main_indent">
                            <AuthorizationForm/>
                        </Jumbotron>
                    </Col>
                </Row>
            </div>
        );
    }
};