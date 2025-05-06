import React from 'react'
import s from './CharacterCard.module.css'

export const CharacterCard = ({ image, name, species }) => {
  return (
    <div className={s.card_wrapper}>
      <img
        className={s.card_image}
        src={image}
        alt={name}
        width={240}
        height={168}
        loading="lazy"
      />
      <div className={s.card_info}>
        <p className={s.card_name}>{name.slice(0, 15)}</p>
        <p className={s.card_species}>{species}</p>
      </div>
    </div>
  )
}
