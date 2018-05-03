import * as React from 'react'
import {Button} from 'antd'

interface StateProps {
}

interface DispatchProps {
}

export default class AuthorizationForm extends React.Component<StateProps & DispatchProps,{}>{
    render(): JSX.Element {
        return (
            <div>
                <Button type="primary">Primary</Button>
                <Button>Default</Button>
                <Button type="dashed">Dashed</Button>
                <Button type="danger">Danger</Button>
            </div>
        );
    }
};
