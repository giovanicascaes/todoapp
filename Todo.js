/**
 * @flow
 */

import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Checkbox from "./Checkbox";

export default ({children, onToggle}) =>
    <View style={styles.todo}>
        <Text style={styles.text}>
            {children.text}
        </Text>
        <Checkbox checked={children.checked}
                  onClick={onToggle}
                  style={styles.check}/>
    </View>;

const styles = StyleSheet.create({
    todo: {
        padding: 15,
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center'
    },
    text: {
        flex: 1,
        color: '#3B3B3B'
    },
    check: {
        alignSelf: 'flex-end'
    }
});
