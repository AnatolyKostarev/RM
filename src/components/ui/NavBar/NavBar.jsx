import React from 'react'
import { NavLink } from 'react-router-dom'
import { links } from './links'
import s from './NavBar.module.css'

export const NavBar = () => {
  return (
    <nav>
      <ul className={s.links_list}>
        {links.map(({ id, title, path }) => (
          <li key={id}>
            <NavLink
              className={({ isActive }) =>
                isActive ? `${s.link} ${s.active}` : s.link
              }
              to={path}>
              {title}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  )
}
