export const schema = gql`
  type Repository {
    id: Int!
    githubId: Int!
    fullName: String!
    createdAt: DateTime!
  }

  type Query {
    repositories: [Repository!]!
    repository(id: Int!): Repository
  }

  input CreateRepositoryInput {
    githubId: Int!
    fullName: String!
  }

  input UpdateRepositoryInput {
    githubId: Int
    fullName: String
  }

  type Mutation {
    createRepository(input: CreateRepositoryInput!): Repository!
    updateRepository(id: Int!, input: UpdateRepositoryInput!): Repository!
    deleteRepository(id: Int!): Repository!
  }
`
