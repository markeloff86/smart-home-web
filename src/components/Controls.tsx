import * as React from "react";
import Control from "./Control";

interface StateProps {
}

interface DispatchProps {
}

export default class Controls extends React.Component<StateProps & DispatchProps, {}> {
    render(): JSX.Element {
        return (
            <Control/>
        );
    }
}