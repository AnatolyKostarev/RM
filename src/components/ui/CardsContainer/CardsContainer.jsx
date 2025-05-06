import React from 'react'
import s from './CardsContainer.module.css'

export const CardsContainer = ({ children }) => {
  return <div className={s.cards_wrapper}>{children}</div>
}
