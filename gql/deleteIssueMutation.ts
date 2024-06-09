import {gql} from '@urql/next'

export const DeleteIssueMutation = gql`
mutation DeleteIssue($deleteIssueId: ID!) {
  deleteIssue(id: $deleteIssueId)
}
`