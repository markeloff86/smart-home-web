import {IRecommendationItem} from '../interfaces/smartHomeInterface';
import {Action} from 'redux';
import * as actions from '../actions/actionTypes'


let recommendationInitialState: IRecommendationItem[] = [{
    type: "advice",
    text: "You don't have recommendations",
    priority: 1
}];

export default function recommendation(state = recommendationInitialState, action: Action = null): IRecommendationItem[] {
    switch (action.type){
        case actions.GET_RECOMMENDATIONS:
            console.debug('RECOMMENDATIONS!!!');
            return state;
        default:
            console.debug('REDUX START!');
            return state;
    }
}