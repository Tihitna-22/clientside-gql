import { gql } from 'urql'

export const SigninMutation = gql`
  mutation SignIn($input: AuthInput!) {
    signin(input: $input) {
      token
    }
  }
`