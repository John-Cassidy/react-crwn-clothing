import './homepage.styles.scss';

import Directory from '../../components/directory/directory.component';
import React from 'react';

const HomePage = () => (
  <div className='homepage'>
    <h1>Welcome to my Homepage</h1>
    <Directory />
  </div>
);

export default HomePage;
