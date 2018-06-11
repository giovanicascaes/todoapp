/**
 * @flow
 */

import React from 'react';
import {StyleSheet, Text, TouchableHighlight, View} from 'react-native'

export default () =>
    <TouchableHighlight onPress={() => null}
                        underlayColor={'white'}>
        <View>
            <Text style={styles.text}>
                Remove Completed Items
            </Text>
        </View>
    </TouchableHighlight>;

const styles = StyleSheet.create({
    text: {
        padding: 15,
        color: '#ab1500',
        fontWeight: 'bold',
        textAlign: 'center',
    }
});
