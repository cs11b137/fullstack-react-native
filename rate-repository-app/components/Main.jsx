import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Route } from 'react-router-native';
import RepositoryList from './RepositoryList';
import AppBar from './AppBar';
import SignIn from './SignIn';

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        flexShrink: 1,
        backgroundColor: '#e1e5e7',
    }
});

const Main = () => {
    return (
        <View style={styles.container}>
            <AppBar />
            <Route path="/" component={RepositoryList} exact />
            <Route path="/signin" component={SignIn} />
        </View>
    );
};

export default Main;