import AsyncStorage from '@react-native-community/async-storage';

class AuthStorage {
    constructor(namespace = 'auth') {
        this.namespace = namespace;
    }

    async getAccessToken() {
        const accessToken = await AsyncStorage.getItem(`${this.namespace}:signIn`);
        return JSON.parse(accessToken);
    }

    async setAccessToken(accessToken) {
        await AsyncStorage.setItem(
            `${this.namespace}:signIn`,
            JSON.stringify(accessToken),
        );
    }

    async removeAccessToken() {
        await AsyncStorage.removeItem(`${this.namespace}:signIn`);
    }
}

export default AuthStorage;