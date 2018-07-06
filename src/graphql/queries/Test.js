import { gql } from 'apollo-boost';

export default gql`
  query Test($id: ID!) {
    test(id: $id) {
      name
      email
      number
    }
  }
`;
