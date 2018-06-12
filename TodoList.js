/**
 * @flow
 */

import React from 'react';
import {ScrollView, StyleSheet} from 'react-native';
import {connect} from 'react-redux';
import ActionTodo from './ActionTodo';

const TodoList = ({todos}) =>
    <ScrollView style={styles.todoList}>
        {todos.map((todo, index) =>
            <ActionTodo key={index}
                        index={index}>
                {todo}
            </ActionTodo>)}
    </ScrollView>;

const styles = StyleSheet.create({

});

const mapStateToProps = ({todos}) => ({todos});

export default connect(mapStateToProps)(TodoList);
