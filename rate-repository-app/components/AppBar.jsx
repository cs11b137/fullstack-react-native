import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { Link } from 'react-router-native';
import Constants from 'expo-constants';
import Text from './Text';
import theme from '../theme';

const styles = StyleSheet.create({
    container: {
        paddingTop: Constants.statusBarHeight,
        backgroundColor: theme.colors.appBarbgcolor,
    },
    linkTab: {
        padding: 10
    }
});

const AppBar = () => {
    return (
        <View style={styles.container}>
            <ScrollView horizontal>
                <Link to="/" style={styles.linkTab}>
                    <Text color="appBarColor" fontWeight="bold">Repositories</Text>
                </Link>
                <Link to="/signin" style={styles.linkTab}>
                    <Text color="appBarColor" fontWeight="bold">SignIn</Text>
                </Link>
            </ScrollView>
        </View>
    );
};

export default AppBar;