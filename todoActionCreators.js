/**
 * @flow
 */

export const actionTypes = {
    UPDATE_TEXT: 'UPDATE_TEXT',
    ADD: 'ADD',
    REMOVE: 'REMOVE',
    REMOVE_DONE: 'REMOVE_DONE',
    TOGGLE: 'TOGGLE'
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

export const removeDone = () => ({
    type: actionTypes.REMOVE_DONE
});

export const toggle = todoIndex => ({
    type: actionTypes.TOGGLE,
    payload: todoIndex
});
