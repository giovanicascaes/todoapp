/**
 * @flow
 */

import React from 'react';
import {StyleSheet, Text, TouchableHighlight} from 'react-native';

export default ({onClick}) =>
    <TouchableHighlight onPress={onClick}
                        underlayColor={'white'}>
        <Text style={styles.remove}>X</Text>
    </TouchableHighlight>;

const styles = StyleSheet.create({
    remove: {
        paddingRight: 15,
        color: '#ab1500',
        fontWeight: 'bold'
    }
});
