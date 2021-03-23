import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import Constants from 'expo-constants';

const styles = StyleSheet.create({
    container: {
        paddingTop: Constants.statusBarHeight
    }
});

const AppBar = () => {
    return <View style={styles.container}><Text>appbar</Text></View>;
};

export default AppBar;