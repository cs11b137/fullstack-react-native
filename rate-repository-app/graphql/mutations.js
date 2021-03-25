import { gql } from '@apollo/client';

export const SIGNIN = gql`
mutation SignIn($credentials: AuthorizeInput!) {
    authorize(credentials: $credentials) {
        accessToken
    }
}
`;