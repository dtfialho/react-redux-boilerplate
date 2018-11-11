import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

class Layout extends Component {
  render() {
    return (
      <Fragment>
        { this.props.children }
      </Fragment>
    );
  }
}

Layout.propTypes = {
  children: PropTypes.array,
};

export default Layout;
