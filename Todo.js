/**
 * @flow
 */

import React from 'react';
import {StyleSheet, Text} from 'react-native'

export default ({children}) =>
    <Text style={styles.todo}>
        {children}
    </Text>;

const styles = StyleSheet.create({
    todo: {
        padding: 15,
        color: '#3B3B3B',
    }
});
