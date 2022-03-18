/* eslint-disable no-undef */
/* eslint-disable no-param-reassign */
/* eslint-disable @typescript-eslint/no-use-before-define */
import * as React from 'react';

// eslint-disable-next-line import/no-extraneous-dependencies
import { createHashHistory } from 'history';
import simpleRestProvider from 'ra-data-simple-rest';

import AdminPage from './AdminPage';
import authProvider from './Authprovider';

function AdminApp(props) {
  const history = createHashHistory();
  const dataProvider = simpleRestProvider(
    `${process.env.DB_URL}/admin`,
    httpClient,
  );
  const httpClient = (url, options = {}) => {
    if (!options.headers) {
      options.headers = new Headers({ Accept: 'application/json' });
    }
    const token = localStorage.getItem('jwt_token');
    options.headers.set('Authorization', `Bearer ${token}`);
    return fetchUtils.fetchJson(url, options);
  };

  return (
    <AdminPage
      authProvider={authProvider}
      dataProvider={dataProvider}
      history={history}
      title="My Admin"
    />
  );
}
export default AdminApp;
