/**
 * @flow
 */

export const actionTypes = {
    UPDATE_TEXT: 'UPDATE_TEXT',
    ADD: 'ADD',
    REMOVE: 'REMOVE'
};

export const updateText = text => ({
    type: actionTypes.UPDATE_TEXT,
    payload: text
});

export const add = text => ({
    type: actionTypes.ADD,
    payload: text
});

export const remove = todoIndex => ({
    type: actionTypes.REMOVE,
    payload: todoIndex
});