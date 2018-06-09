/**
 * @flow
 */

import React from 'react';
import {StyleSheet, View} from 'react-native';
import Header from './Header';
import TodoInput from './TodoInput';
import ToDo from "./TodoList";
import Footer from "./TodoRemoveDone";

export default () =>
    <View style={styles.container}>
        <Header/>
        <TodoInput/>
        <ToDo/>
        <Footer/>
    </View>;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'stretch'
    }
});
