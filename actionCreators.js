/**
 * @flow
 */

export const actionTypes = {
    ADD: 'ADD',
    REMOVE: 'REMOVE'
};

export const add = todo => ({
    type: actionTypes.ADD,
    payload: todo
});

export const remove = todoIndex => ({
    type: actionTypes.REMOVE,
    payload: todoIndex
});
