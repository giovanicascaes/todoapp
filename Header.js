/**
 * @flow
 */

import React from 'react';
import {StyleSheet, Text} from 'react-native';

export default () =>
    <Text style={styles.text}>
        Todo to Do
    </Text>;

const styles = StyleSheet.create({
    text: {
        padding: 15,
        backgroundColor: '#9A9A9A',
        fontWeight: 'bold',
        textAlign: 'center'
    }
});
