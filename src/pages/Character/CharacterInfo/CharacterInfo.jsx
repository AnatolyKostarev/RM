import React from 'react'
import s from './CharacterInfo.module.css'

export const CharacterInfo = ({
  gender,
  status,
  species,
  origin,
  type,
  location
}) => {
  return (
    <div className={s.characterInfo_wrapper}>
      <h6 className={s.title}>Informations</h6>
      <div className={s.characterInfo_items}>
        <div className={s.characterInfo_item}>
          <p className={s.subtitle}>gender</p>
          <p className={s.desc}>{gender}</p>
        </div>
        <div className={s.characterInfo_item}>
          <p className={s.subtitle}>status</p>
          <p className={s.desc}>{status}</p>
        </div>
        <div className={s.characterInfo_item}>
          <p className={s.subtitle}>species</p>
          <p className={s.desc}>{species}</p>
        </div>
        <div className={s.characterInfo_item}>
          <p className={s.subtitle}>origin</p>
          <p className={s.desc}>{origin}</p>
        </div>
        <div className={s.characterInfo_item}>
          <p className={s.subtitle}>type</p>
          <p className={s.desc}>{type}</p>
        </div>
        <div className={s.characterInfo_item}>
          <p className={s.subtitle}>location</p>
          <p className={s.desc}>{location}</p>
        </div>
      </div>
    </div>
  )
}
