import * as React from 'react';
import {Col, Row} from "react-bootstrap";
import AuthorizationForm from "./AuthorizationForm";


export default class MainForm extends React.Component<{}, {}> {
    render(): JSX.Element {
        return (
            <div>
                <Row className="main_indent">
                    <Col md={6} mdOffset={3}>
                        <AuthorizationForm/>
                    </Col>
                </Row>
            </div>
        );
    }
};