import Controls from '../components/Controls';
import Recommendator from '../components/Recommendator';
import * as React from 'react';

interface StateProps {
}

interface DispatchProps {
}

export default class SmartHomeForm extends React.Component<StateProps & DispatchProps, {}> {
    render(): JSX.Element {
        return (
            <div>
                <Recommendator/>
                <Controls/>
            </div>
        );
    }
};