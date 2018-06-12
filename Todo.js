/**
 * @flow
 */

import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Checkbox from "./Checkbox";
import RemoveButton from "./RemoveButton";

export default ({children, onRemove, onToggle}) => {
    const {done} = children;

    return <View style={styles.todo}>
        <RemoveButton onClick={onRemove}
                      style={styles.remove} />
        <Text style={done ? styles.strokeText : styles.text}>
            {children.text}
        </Text>
        <Checkbox checked={done}
                  onClick={onToggle}
                  style={styles.check} />
    </View>;
};

const styles = StyleSheet.create({
    todo: {
        padding: 15,
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center'
    },
    remove: {
        alignSelf: 'flex-start'
    },
    text: {
        flex: 1,
        color: '#3B3B3B'
    },
    strokeText: {
        flex: 1,
        color: '#3B3B3B',
        textDecorationLine: 'line-through'
    },
    check: {
        alignSelf: 'flex-end'
    }
});
