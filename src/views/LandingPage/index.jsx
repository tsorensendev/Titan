// Dependencies
import React from 'react';
import { graphql } from 'react-apollo';
import testQuery from '../../graphql/queries/Test';

// import classNames from 'classnames';

// Components
// import Paper from '@material-ui/core/Paper';
import Header from '../../Components/Header';

const LandingPage = (props) => {
  const { classes } = props;
  return (
    <div>
      <Header
        brand="Tantora"
        color="transparent"
      />
    </div>
  );
};

export default graphql(testQuery)(LandingPage);
