import * as types from './actionTypes'

export function getRecommendations() {
    return {
        type: types.GET_RECOMMENDATIONS
    }
}

export function getAvailableControls() {
    return {
        type: types.GET_AVAILABLE_CONTROLS
    }
}