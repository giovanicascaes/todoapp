/**
 * @flow
 */

import React from 'react';
import {StyleSheet, TouchableHighlight, View} from 'react-native';

export default ({checked, onClick}) =>
    <TouchableHighlight onPress={onClick}
                        underlayColor={'white'}
                        style={styles.check}>
        <View style={checked ? styles.done : styles.unchecked}/>
    </TouchableHighlight>;

const styles = StyleSheet.create({
    check: {
        width: 21,
        height: 21,
        borderWidth: 1,
        borderStyle: 'solid',
        borderColor: '#3B3B3B',
        alignItems: 'center',
        justifyContent: 'center'
    },
    done: {
        width: 12,
        height: 12,
        backgroundColor: '#3B3B3B'
    },
    unchecked: {

    }
});
