import React from "react";

import axios from "axios";
import navigationStructure from '../constants'

import { Button } from "@lesuiss/mui_compo";
import Header from "./components/layout/Header";
import Layout from "./components/layout";
import { GetStaticProps } from "next";
import { loadTranslation } from "@utils/loadTranslation";
import {t} from '@lingui/macro'
import { i18n } from '@lingui/core'
import { Switcher } from "./components/Switcher";

const Home = (props) => {
  return (
    <Layout navigationStructure={navigationStructure}>
      <Button>hi :)</Button>
      <p> {i18n._(
              /*i18n: The title of detailed order banner on Home page*/ t`Detailed order`
            )}</p>
            <Switcher/>
    </Layout>
  );
};
export default Home;

// export async function getServerSideProps(context) {
//   const result = await axios
//     .get(process.env.DB_URL + "/global")
//     .then((x) => x.data);
//   if (!result) {
//     return { notFound: true };
//   }

//   return {
//     props: { api: result }, // will be passed to the page component as props
//   };
// }
// src/pages/index.tsx

export const getStaticProps: GetStaticProps = async (ctx) => {
  console.log('ctx', ctx)
  const translation = await loadTranslation( ctx.locale! )
  console.log(translation)
  return {
    props: {
      translation
    }
  }
}