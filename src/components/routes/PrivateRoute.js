import { navigate } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
// import { isLoggedIn } from '../utils/auth';

interface Location {
  pathname: string
}

const PrivateRoute = ({ component: Component, location: Location, ...rest }) => {
  // if (!isLoggedIn() && location.pathname !== `/app/login`) {
  //   // If we’re not logged in, redirect to the home page.
  //   navigate(`/app/login`)
  //   return null
  // }

  return <Component {...rest} />
}

PrivateRoute.propTypes = {
  component: PropTypes.any.isRequired,
}

export default PrivateRoute