/**
 * @flow
 */

import React from 'react';
import {StyleSheet, TextInput} from 'react-native';

export default ({text, updateInputText, addTodo}) => {
    return <TextInput value={text}
                      onChangeText={(text) => updateInputText(text)}
                      onSubmitEditing={() => addTodo(text)}
                      placeholder={'Add todo'}
                      style={styles.input}/>;
}

const styles = StyleSheet.create({
    input: {
        padding: 15,
        textAlign: 'center'
    }
});
