/**
 * @flow
 */

import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native'
import {connect} from 'react-redux'
import Todo from './Todo'

const TodoList = ({todos}) =>
    <ScrollView style={styles.todoList}>
        {todos.map((todo, index) =>
            <Todo key={index}>
                {todo}
            </Todo>)}
    </ScrollView>;

const styles = StyleSheet.create({
    todoList: {
        flex: 1
    }
});

const mapStateToProps = ({todos}) => ({todos});

export default connect(mapStateToProps)(TodoList);
