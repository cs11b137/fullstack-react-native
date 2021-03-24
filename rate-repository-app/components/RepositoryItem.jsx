import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import Text from './Text';

const styles = StyleSheet.create({
    contentConainter: {
        marginBottom: 10,
        padding: 20,
        backgroundColor: '#fff'
    },
    avatarContainer: {
        flex: 1,
        flexDirection: 'row',
        marginBottom: 25,
    },
    avatarBox: {
        width: 75,
        paddingRight: 25,
    },
    avatarImg: {
        width: 50,
        height: 50,
        borderRadius: 4,
    },
    avartarInfo: {
        marginRight: 50
    },
    language: {
        alignSelf: 'flex-start',
        padding: 5,
        backgroundColor: '#0066d3',
        borderRadius: 2
    },
    refersContainer: {
        flex: 1,
        flexDirection: 'row'
    },
    refersItem: {
        flex: 1,
    }
});

const RepositoryItem = ({ item }) => {
    return (
        <View style={styles.contentConainter}>
            <View style={styles.avatarContainer}>
                <View style={styles.avatarBox}>
                    <Image
                        style={styles.avatarImg}
                        source={{ uri: item.ownerAvatarUrl }}
                    />
                </View>
                <View style={styles.avartarInfo}>
                    <View style={{marginBottom:10}}>
                        <Text fontSize="subheading" fontWeight="bold">{item.fullName}</Text>
                    </View>
                    <View style={{marginBottom:10}}>
                        <Text fontSize="subheading">{item.description}</Text>
                    </View>
                    <View style={styles.language}>
                        <Text fontSize="subheading" style={{ color: '#fff' }}>{item.language}</Text>
                    </View>
                </View>
            </View>
            <View style={styles.refersContainer}>
                <View style={styles.refersItem}>
                    <Text fontSize="subheading" fontWeight="bold" style={{ textAlign: 'center' }}>{item.stargazersCount}</Text>
                    <Text fontSize="subheading" style={{ textAlign: 'center' }}>Stars</Text>
                </View>
                <View style={styles.refersItem}>
                    <Text fontSize="subheading" fontWeight="bold" style={{ textAlign: 'center' }}>{item.forksCount}</Text>
                    <Text fontSize="subheading" style={{ textAlign: 'center' }}>Forks</Text>
                </View>
                <View style={styles.refersItem}>
                    <Text fontSize="subheading" fontWeight="bold" style={{ textAlign: 'center' }}>{item.reviewCount}</Text>
                    <Text fontSize="subheading" style={{ textAlign: 'center' }}>Review</Text>
                </View>
                <View style={styles.refersItem}>
                    <Text fontSize="subheading" fontWeight="bold" style={{ textAlign: 'center' }}>{item.ratingAverage}</Text>
                    <Text fontSize="subheading" style={{ textAlign: 'center' }}>Rating</Text>
                </View>
            </View>
        </View>
    );
};

export default RepositoryItem;