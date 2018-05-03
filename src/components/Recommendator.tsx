import * as React from 'react';
import {Button} from 'antd';

interface StateProps {
}

interface DispatchProps {
}

export default class Recommendator extends React.Component<StateProps & DispatchProps, {}> {
    render(): JSX.Element {
        return (
            <Button type="primary">Primary</Button>
        );
    }
}