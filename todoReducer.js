/**
 * @flow
 */

import {actionTypes} from './todoActionCreators'

const initialState = {
    text: '',
    todos: []
};

export const reducer = (state = initialState, {type, payload}) => {
    const {todos} = state;

    switch (type) {
        case actionTypes.UPDATE_TEXT:
            return {
                ...state,
                text: payload
            };
        case actionTypes.ADD:
            return {
                text: '',
                todos: [payload, ...todos]
            };
        case actionTypes.REMOVE:
            return {
                ...state,
                todos: todos.filter((todo, index) => index !== payload)
            };
        default:
            return state;
    }
}
