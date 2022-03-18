// in src/App.js
import React, { useEffect, useState } from "react";

import Axios from "axios";
import { Admin, Resource } from "react-admin";

import { Creating, Editing, Listing } from "./adminTables/Methods";

const AdminPage = ({ authProvider, dataProvider, history }) => {
  const [dbStructure, setDbStructure] = useState({});

  useEffect(
    () =>
      Axios.get(process.env.DB_URL + "/admin/getStructure")
        .then((res) => setDbStructure(res.data))
        .catch(console.log),
    []
  );

  return (
    <Admin
      authProvider={authProvider}
      dataProvider={dataProvider}
      history={history}
    >
      {dbStructure &&
        Object.entries(dbStructure)
          // .filter(([table,fields])=> !table.startsWith('TJ_'))
          .map(([table, fields], line) => (
            <Resource
              key={table}
              name={table}
              list={Listing({
                table: table,
                fields: fields,
                structure: dbStructure,
              })}
              edit={Editing({
                table: table,
                fields: fields,
                structure: dbStructure,
              })}
              create={Creating({
                table: table,
                fields: fields,
                structure: dbStructure,
              })}
            />
          ))}
    </Admin>
  );
};

export default AdminPage;
