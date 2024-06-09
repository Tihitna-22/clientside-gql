import { gql } from '@urql/next'

export const IssuesQuery = gql`
  query {
    issues {
      content
      createdAt
      id
      name
      status
    }
  }
`