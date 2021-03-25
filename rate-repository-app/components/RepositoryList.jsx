import React from 'react';
import { SafeAreaView, FlatList, View, StyleSheet } from 'react-native';
import { useQuery } from '@apollo/client';
import RepositoryItem from './RepositoryItem';
import { GET_REPOSITORIES } from '../graphql/queries';

const styles = StyleSheet.create({
    separator: {
        height: 10
    }
});

const ItemSeparator = () => <View style={styles.separator} />;

const RepositoryList = () => {
    const { data, error, loading } = useQuery(GET_REPOSITORIES, {
        fetchPolicy: 'cache-and-network'
    });

    if (loading) {
        return null;
    }

    if (error) {
        return `Error! ${error}`;
    }

    return (
        <SafeAreaView>
            <FlatList
                data={data.repositories.edges.map(edge => edge.node)}
                ItemSeparatorComponent={ItemSeparator}
                renderItem={RepositoryItem}
            />
        </SafeAreaView>
    );
};

export default RepositoryList;