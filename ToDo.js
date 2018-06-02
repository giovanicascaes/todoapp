/**
 * @flow
 */

import React from 'react';
import {StyleSheet, Text, View} from 'react-native'

export default () =>
    <View style={styles.footer}>
        <Text>
            Testi
        </Text>
    </View>;

const styles = StyleSheet.create({
    footer: {
        flex: 1
    }
});
