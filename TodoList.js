/**
 * @flow
 */

import React from 'react';
import {ScrollView, StyleSheet} from 'react-native';
import {connect} from 'react-redux';
import TodoToggle from './TodoToggle';

const TodoList = ({todos}) =>
    <ScrollView style={styles.todoList}>
        {todos.map((todo, index) =>
            <TodoToggle key={index}
                        index={index}>
                {todo}
            </TodoToggle>)}
    </ScrollView>;

const styles = StyleSheet.create({

});

const mapStateToProps = ({todos}) => ({todos});

export default connect(mapStateToProps)(TodoList);
