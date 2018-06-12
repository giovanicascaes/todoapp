/**
 * @flow
 */

import {actionTypes} from './todoActionCreators';

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
                todos: [{text: payload, done: false}, ...todos]
            };
        case actionTypes.REMOVE:
            return {
                ...state,
                todos: todos.filter((todo, index) => index !== payload)
            };
        case actionTypes.REMOVE_DONE:
            return {
                ...state,
                todos: todos.filter(todo => !todo.done)
            };
        case actionTypes.TOGGLE:
            return {
                ...state,
                todos: todos.map((todo, index) => index === payload ? {...todo, done: !todo.done} : todo)
            };
        default:
            return state;
    }
}
