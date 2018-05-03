import {IControl} from '../interfaces/smartHomeInterface';
import {Action} from 'redux';
import * as actions from '../actions/actionTypes'
import * as lodash from 'lodash';

const controlsInitialState: IControl[] = [];

export default function controls(state = controlsInitialState, action: Action = null): IControl[] {
    let stateCopy: IControl[] = lodash.cloneDeep(state);
    switch (action.type){
        case actions.GET_AVAILABLE_CONTROLS:
            console.debug('You don\'t have available controls');
            return stateCopy;
        default:
            return state;
    }

}