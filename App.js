/**
 * @flow
 */

import React from 'react';
import {StyleSheet, View} from 'react-native';
import Header from './Header';
import TodoInput from './TodoInput';
import TodoList from './TodoList';
import ActionRemoveDoneButton from './ActionRemoveDoneButton';

export default () =>
    <View style={styles.container}>
        <Header/>
        <TodoInput/>
        <TodoList/>
        <ActionRemoveDoneButton/>
    </View>;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'stretch'
    }
});
