import { useMutation } from '@apollo/client';
import { SIGNIN } from '../graphql/mutations';
import useAuthStorage from './useAuthStorage';

export const useSignIn = () => {
    const [mutate, result] = useMutation(SIGNIN);
    const authStorage = useAuthStorage();
    console.log(authStorage);

    const signIn = async ({ username, password }) => {
        const response = await mutate({ variables: { credentials: { username, password } } });
        
        return response;
    };

    return [signIn, result];
};