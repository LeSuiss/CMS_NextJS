import * as React from 'react';

import dynamic from 'next/dynamic';

// const AdminApp = dynamic(() => import("../components/admin/AdminApp"), {
//   ssr: false,
// });

export default function Admin() {
  return <div>aa</div>;
}

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
