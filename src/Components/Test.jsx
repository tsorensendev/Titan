import React from 'react';
import { graphql } from 'react-apollo';
import query from '../graphql/queries/Test';

const Test = (props) => {
  console.log(props);
  return (
    <div>
      Hello World
    </div>
  );
};

export default graphql(query, {
  options: () => { return { variables: { id: '5b3fc2593a796638700cb5c9' } }; }
})(Test);
