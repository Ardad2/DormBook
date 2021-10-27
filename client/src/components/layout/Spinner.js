import React, { Fragment } from 'react';
import logo from './logo.png';

const Spinner = () => (
  <Fragment>
    <img
      src={logo}
      style={{ width: '200px', margin: 'auto', display: 'block' }}
      alt="...."
    />
  </Fragment>
);

export default Spinner;
