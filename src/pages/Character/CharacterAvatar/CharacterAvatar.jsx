import React from 'react'
import s from './CharacterAvatar.module.css'

export const CharacterAvatar = ({ image, name }) => {
  return (
    <div className={s.avatar_container}>
      <img
        className={s.avatar}
        src={image}
        alt={name}
        width={300}
        height={300}
        loading="lazy"
      />
      <p className={s.name}>{name}</p>
    </div>
  )
}
