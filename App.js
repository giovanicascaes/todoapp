/**
 * @flow
 */

import React from 'react';
import {StyleSheet, View} from 'react-native';
import Header from './Header';
import ToDo from "./ToDo";
import Footer from "./Footer";

export default () =>
    <View style={styles.container}>
        <Header/>
        <ToDo/>
        <Footer/>
    </View>;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'stretch'
    }
});