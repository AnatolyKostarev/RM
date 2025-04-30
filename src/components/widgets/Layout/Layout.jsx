import React from 'react'
import { Header } from '../Header/Header'
import { Footer } from '../Footer/Footer'
import s from './Layout.module.css'

export function Layout({ children }) {
  return (
    <div className={s.layout}>
      <Header />
      <main className={s.main}>{children}</main>
      <Footer />
    </div>
  )
}
