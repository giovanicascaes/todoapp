/**
 * @flow
 */

import React from 'react';
import {StyleSheet, TouchableHighlight, View} from 'react-native';

export default ({checked, onClick}) =>
    <TouchableHighlight onPress={onClick}
                        underlayColor={'white'}
                        style={styles.check}>
        <View style={checked ? styles.checked : styles.unchecked}/>
    </TouchableHighlight>;

const styles = StyleSheet.create({
    check: {
        width: 25,
        height: 25,
        borderWidth: 1,
        borderStyle: 'solid',
        borderRadius: 15,
        borderColor: '#3B3B3B',
        alignItems: 'center',
        justifyContent: 'center'
    },
    checked: {
        width: 19,
        height: 19,
        borderRadius: 15,
        backgroundColor: '#3B3B3B'
    },
    unchecked: {

    }
});
