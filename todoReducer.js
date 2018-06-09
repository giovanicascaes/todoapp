/**
 * @flow
 */

import {actionTypes} from './actionCreators'

export const reducer = (currentState = {}, {type, payload}) => {
    const {todos} = currentState;

    switch (type) {
        case actionTypes.ADD: {
            return {
                ...currentState,
                todos: [payload, ...todos]
            }
        }
        case actionTypes.REMOVE: {
            return {
                ...currentState,
                todos: todos.filter((todo, index) => index !== payload)
            }
        }
        default: {
            return currentState;
        }
    }
}
