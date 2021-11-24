import * as React from 'react';
import dynamic from 'next/dynamic'

const AdminApp = dynamic(() => import('./components/admin/AdminApp'), { ssr: false })

export default function Admin() {
  return <AdminApp />
}
