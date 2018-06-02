/**
 * @flow
 */

import React from 'react';
import {StyleSheet, Text, View} from 'react-native'

export default () =>
    <Text style={styles.text}>
        TODO to Do
    </Text>;

const styles = StyleSheet.create({
    text: {
        padding: 15,
        backgroundColor: 'grey',
        fontWeight: 'bold',
        textAlign: 'center'
    }
});