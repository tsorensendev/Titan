import React, { Component } from 'react';

import PropTypes from 'prop-types';

import classNames from 'classnames';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
// import Button from '@material-ui/core/Button';
import Hidden from '@material-ui/core/Hidden';
import Drawer from '@material-ui/core/Drawer';

import Menu from '@material-ui/icons/Menu';

import withStyles from '@material-ui/core/styles/withStyles';
import headerStyles from '../../assets/jss/components/headerStyles';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      drawerOpen: false,
    };
  }

  render() {
    const { drawerOpen } = this.state;
    const { classes, color, fixed } = this.props;
    const appBarClasses = classNames({
      [classes.appBar]: true,
      [classes[color]]: color,
      [classes.fixed]: fixed,
    });
    return (
      <AppBar className={appBarClasses}>
        <Toolbar>
          <Hidden mdUp>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={() => this.setState({ drawerOpen: !drawerOpen })}
            >
              <Menu />
            </IconButton>
          </Hidden>
        </Toolbar>
        <Hidden mdUp>
          <Drawer
            classes={{ paper: classes.drawer }}
            variant="temporary"
            open={drawerOpen}
            onClose={() => this.setState({ drawerOpen: !drawerOpen })}
          >
            <div>
              Stuff
            </div>
          </Drawer>
        </Hidden>
      </AppBar>
    );
  }
}

Header.defaultProp = {
  color: 'white',
};

Header.propTypes = {
  classes: PropTypes.object.isRequired,
  color: PropTypes.oneOf([
    'primary',
    'info',
    'success',
    'warning',
    'danger',
    'transparent',
    'white',
    'rose',
    'dark',
  ]).isRequired,
  fixed: PropTypes.bool,
};

export default withStyles(headerStyles)(Header);
