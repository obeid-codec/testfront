import * as alertAction from './alert.action';

export const alertFeatureKey = 'alert-info';

export const initialState = {
    messages: []
};

export const reducer = (state = initialState, action) => {
    let { type, payload } = action;
    switch (type) {
        case alertAction.SET_ALERT:
            return {
                ...state,
                messages: [...state.messages, payload]
            }
        case alertAction.REMOVE_ALERT:
            return {
                ...state,
                messages: [...state.messages.filter(message => message.id !== payload.id)]
            }
        default:
            return state;
    }
}