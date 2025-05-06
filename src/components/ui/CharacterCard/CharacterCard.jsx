import React from 'react'
import s from './CharacterCard.module.css'
import { Link } from 'react-router-dom'

export const CharacterCard = ({ id, image, name, species }) => {
  return (
    <Link to={`/character/${id}`}>
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
    </Link>
  )
}
