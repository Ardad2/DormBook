import React, { Fragment } from 'react';

const NotFound = () => {
  return (
    <Fragment>
      <h1 className='x-large text-primary'>
        <i className='fas fa-exclamation-triangle' /> 404 Page Not Found
      </h1>
      <p className='large'>We can't find this page</p>
    </Fragment>
  );
};

export default NotFound;
