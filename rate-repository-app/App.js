import React from 'react';
import { NativeRouter } from 'react-router-native';
import { ApolloProvider } from '@apollo/client';
import Main from './components/Main';
import createApolloClient from './utils/apolloClient';
import Constants from 'expo-constants';

import AuthStorage from './utils/authStorage';
import AuthStorageContext from './contexts/AuthStorageContext';

const authStorage = new AuthStorage();
const apolloClient = createApolloClient(authStorage);

const App = () => {
    console.log(Constants.manifest);
    return (
        <ApolloProvider client={apolloClient}>
            <NativeRouter>
                <AuthStorageContext.Provider value={authStorage}>
                    <Main />
                </AuthStorageContext.Provider>
            </NativeRouter>
        </ApolloProvider>
    );
};

export default App;