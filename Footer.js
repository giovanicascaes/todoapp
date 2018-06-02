/**
 * @flow
 */

import React from 'react';
import {StyleSheet, Text, TouchableHighlight, View} from 'react-native'

export default () =>
    <TouchableHighlight underlayColor={'white'}
                        onPress={() => null}>
        <View>
            <Text style={styles.text}>
                Remove Completed Items
            </Text>
        </View>
    </TouchableHighlight>;

const styles = StyleSheet.create({
    text: {
        padding: 15,
        backgroundColor: '#d84942',
        color: '#ab1500',
        fontWeight: 'bold',
        textAlign: 'center',
    }
});