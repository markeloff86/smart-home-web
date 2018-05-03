import * as React from 'react';
import AuthorizationForm from "./AuthorizationForm";
import {connect} from "react-redux";
import * as actions from "../actions/actions";
import {IRecommendationItem} from "../interfaces/smartHomeInterface";
import SmartHomeForm from "./SmartHomeForm";
import "antd/dist/antd.less";

interface StateProps {
    recommendation?: IRecommendationItem[];
}

interface DispatchProps {
    getRecommendation(): void;

    getAvailableControls(): void;
}

class MainForm extends React.Component<StateProps & DispatchProps, {}> {

    componentWillMount() {
        debugger;
        this.props.getAvailableControls();
        this.props.getRecommendation();
    }

    render(): JSX.Element {
        return (
            <div className="main_indent">
                <AuthorizationForm/>
                <SmartHomeForm/>
            </div>
        );
    }
}

const mapStateToProps = (state: any): StateProps => {
    return {
        recommendation: state
    };
};

const mapDispatchToProps = (dispatch: any): DispatchProps => {
    return {
        getRecommendation: () => dispatch(actions.getRecommendations()),
        getAvailableControls: () => dispatch(actions.getAvailableControls())
    }
};

export default connect<StateProps, DispatchProps, {}>(mapStateToProps, mapDispatchToProps)(MainForm);