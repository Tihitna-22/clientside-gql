import { gql } from '@urql/next'

export const SigninMutation = gql`
  mutation SignIn($input: AuthInput!) {
    signin(input: $input) {
      token
    }
  }
`