import * as React from 'react'
import {Jumbotron, Button} from 'react-bootstrap'

export default class AuthorizationForm extends React.Component<{},{}>{
    render(): JSX.Element {
        return (
            <Jumbotron>
                <h1>Smart Home</h1>
                <p>
                    This is a system for management and control for your home.
                </p>
                <p>
                    <Button bsStyle="primary">Authorization</Button>
                </p>
            </Jumbotron>
        );
    }
}