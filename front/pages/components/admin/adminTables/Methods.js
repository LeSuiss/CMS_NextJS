import React, { useEffect, useState } from 'react';
import { List, Create, Edit, SimpleForm, Datagrid, ReferenceManyField, useListContext, useQuery } from 'react-admin';
import { ReferenceField, SingleFieldList, ChipField, UrlField, NumberField, FileField, EmailField, BooleanField, ImageField, DateField, TextField, } from 'react-admin'
import { TextInput, BooleanInput, ReferenceArrayField, ReferenceArrayInput, ReferenceInput, NumberInput, SelectArrayInput, DateInput, SelectInput } from 'react-admin';
import _ from 'lodash'
import axios from 'axios'
import CustomManyToMany from './CustomManyToMany'

const DataGriCustom = ({ table, fields, structure }) => {
  const { ids, data } = useListContext()
  const [ref, setRef] = useState([])


  useEffect(() => {
    axios.get(process.env.DB_URL + `/admin/TJ_Projects_Users?filter={"fk_Users":[${ids}]}&sort=["fk_Users", "ASC"]`)
      .then(res => setRef(res.data))
      .catch(console.log)
  }, [ids]);

  const TJ_ID = useQuery({
    type: 'getMany',
    resource: 'Projects',
    payload: { ids: ref.map(obj => obj.fk_Projects) }
  })

  return (<Datagrid rowClick="edit">
    {Object.entries(fields).map(([key, value], y) => {
      if (value.field.indexOf("fk_") > -1) {
        return (
          <ReferenceField label={value.field.slice(3, value.length)} source={value.field} reference={_.capitalize(value.field.slice(3, 4))}>
            <TextField source="id" />
          </ReferenceField>)
      }

      if (key?.includes('ManyToMany')) {
        const lineData = Object.values(data)[0]
        console.log(`lineData`, lineData, y)
        return <CustomManyToMany
          fieldName={structure[table][key].field}
          joinTableName={structure[table][key].joinTable}
        />
      }
      if (value.typeof === "boolean_") return <BooleanField source={value.field} />
      if (value.typeof === "date") return <DateField source={value.field} />
      if (value.typeof === "integer") return <NumberField source={value.field} />
      if (value.typeof === "string") {
        if (value?.comment?.includes("email")) return <EmailField source={value.field} />
        if (value?.comment?.includes("file")) return <FileField source={value.field} title="title" />
        if (value?.comment?.includes("image")) return <ImageField url={value.field} />
        if (value?.comment?.includes("url_")) return <UrlField source={value.field} />
        return <TextField key={y} source={value.field} />
      }

      return 'Champ non renseigné'
    })
    }
  </Datagrid>)
}

export const Listing = ({ table, fields, structure, line }) => (props) => {
  console.log(`props`, props)
  return <List {...props}>
    <DataGriCustom table={table} fields={fields} structure={structure} line={line} />
  </List >
}
  ;

const displayEditOrCreate = (Component) => ({ table, fields, structure }) => {

  return props => (
    <Component {...props}>
      <SimpleForm >

        {Object.entries(fields).map(([key, value], y) => {
          if (value.field.indexOf("fk_") > -1) {

            return <ReferenceInput source={value.field} reference={_.capitalize(value.field.slice(3, value.field.length))}>
              <SelectInput optionText="id" />
            </ReferenceInput>
          }
          if (key?.includes('ManyToMany')) {

            let foreignRef = key.split('_')[1]
            console.log(`calling manyToM`, structure[table][key].code, foreignRef)

            // return <customManyToMany />

          }

          if (value?.typeof === "boolean_") return <BooleanInput source={value.field} />
          if (value?.typeof === "date") return <DateInput source={value.field} />
          if (value?.typeof === "integer") return <NumberInput source={value.field} />
          if (value?.typeof === "string") {
            if (value?.comment?.includes("email")) return <EmailInput source={value.field} />
            if (value?.comment?.includes("file")) return <FileInput source={value.field} title="title" />
            if (value?.comment?.includes("image")) return <ImageInput url={value.field} />
            if (value?.comment?.includes("url_")) return <UrlInput source={value.field} />
          }

          return <TextInput key={y} source={value.field} />
        })}
      </SimpleForm>
    </Component >
  );
}

export const Editing = displayEditOrCreate(Edit)
export const Creating = displayEditOrCreate(Create)

