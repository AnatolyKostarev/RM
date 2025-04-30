import React from 'react'
import s from './PageLogo.module.css'

export const PageLogo = ({ src, width, height, alt }) => {
  return (
    <img
      className={s.page_logo}
      src={src}
      width={width}
      height={height}
      alt={alt}
    />
  )
}
