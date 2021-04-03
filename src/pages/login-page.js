import React from 'react';
import {Login} from '../components/login';

const LoginPage = ({ componentId }) => {
  return <Login componentId={componentId} />;
};

LoginPage.options = {
  topBar: {
    visible: false,
  },
};

export {LoginPage};
