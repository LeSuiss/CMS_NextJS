import axios from 'axios'
import * as React from 'react';
import Header from './components/layout/Header'
import { Button } from '@lesuiss/mui_compo'
const Card = (props) => {
  return (
    <div>
      <Header />
      <Button >
        hi :)
      </Button>
      <p>            ******************
      </p>

      {JSON.stringify(props, undefined, 4)}
    </div>
  )
}
export default Card


export async function getServerSideProps(context) {
  const result = await axios.get(process.env.DB_URL + '/global').then(x => x.data)
  if (!result) { return { notFound: true, } }

  return {
    props: { api: result, }, // will be passed to the page component as props
  }
}
