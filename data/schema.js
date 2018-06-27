import {
    makeExecutableSchema,
    addMockFunctionsToSchema
} from 'graphql-tools';
import graphql from 'graphql';
import mocks from './mocks';

const typeDefs = `
type Query {
  name: String,
  dob: Int
}
`;

const schema = makeExecutableSchema({
    typeDefs
});

addMockFunctionsToSchema({
    schema,
    mocks
});

export default schema;