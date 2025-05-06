import React from 'react'
import s from './Button.module.css'

export const Button = ({ onClick, disabled, isFetching }) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={s.button}>
      {isFetching ? 'Loading...' : 'Load More'}
    </button>
  )
}
