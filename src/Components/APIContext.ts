import React from 'react';

import { API } from '../types';

const APIContext = React.createContext<API>({ engineApi: '', CSRFToken: '' });

export default APIContext;
