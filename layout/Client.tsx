import Footer from '@/components/Footer'
import Header from '@/components/Header/Header'
import { ReactNode } from 'react'
import React, { lazy, Suspense } from 'react'

interface ClientLayoutProps {
  children?: ReactNode
  showBanner?: boolean
}

const ClientLayout: React.FC<ClientLayoutProps> = ({ children }) => {
  return (
    <>
        <Header />
      <main>{children}</main>
        <Footer />
    </>
  )
}
export default ClientLayout
