import React from 'react'
import { Container } from '../../ui/Container/Container'
import { NavBar } from '../../ui/NavBar/NavBar'
import appLogo from '../../../assets/header/logo-black.svg'
import s from './Header.module.css'
import { Link } from 'react-router-dom'

export function Header() {
  return (
    <header className={s.header}>
      <Container className={s.header_container}>
        <Link to="/">
          <div>
            <img
              className={s.logo}
              src={appLogo}
              width={46}
              height={49}
            />
          </div>
        </Link>
        <NavBar />
      </Container>
    </header>
  )
}
