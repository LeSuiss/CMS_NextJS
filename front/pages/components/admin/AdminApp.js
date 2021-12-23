
import * as React from "react";
import { createHashHistory } from 'history';
import simpleRestProvider from 'ra-data-simple-rest';
import AdminPage from "./AdminPage"
import authProvider from "./Authprovider"

const history = createHashHistory();
const AdminApp = (props) => {
  const dataProvider = simpleRestProvider(process.env.DB_URL + '/admin', httpClient)
  const httpClient = (url, options = {}) => {
    if (!options.headers) {
      options.headers = new Headers({ Accept: 'application/json' });
    }
    const token = localStorage.getItem('jwt_token');
    options.headers.set('Authorization', `Bearer ${token}`);
    return fetchUtils.fetchJson(url, options);
  };

  return <AdminPage
    authProvider={authProvider}
    dataProvider={dataProvider}
    history={history}
    title="My Admin"
  />

}
  ;

export default AdminApp;