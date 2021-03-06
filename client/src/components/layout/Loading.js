import React, { Fragment } from 'react';
import loading from './Loading.gif';

const Loading = () => (
  <Fragment>
    <img
      src={loading}
      style={{ width: '200px', margin: 'auto', display: 'block' }}
      alt="Loading the page..."
    />
  </Fragment>
);

export default Loading;
