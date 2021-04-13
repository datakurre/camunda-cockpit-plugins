import React from 'react';

import { API } from '../types';

const APIContext = React.createContext<API>({
  adminApi: '',
  baseApi: '',
  CSRFToken: '',
  engineApi: '',
  engine: '',
  tasklistApi: '',
});

export default APIContext;
