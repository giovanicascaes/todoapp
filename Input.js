/**
 * @flow
 */

import React from 'react';
import {StyleSheet, TextInput} from 'react-native'

export default ({addTodo}) => {
    let input;

    return <TextInput ref={node => {
                          input = node;
                      }}
                      onSubmitEditing={() => addTodo(input)}
                      placeholder={'Add todo'}
                      style={styles.input}/>;
}

const styles = StyleSheet.create({
    input: {
        padding: 15,
        textAlign: 'center'
    }
});
