import React from 'react'
import arrowLinkIcon from '../../../assets/characters/episode-link-arrow.svg'
import s from './CharacterEpisodes.module.css'
import { Link } from 'react-router-dom'

export const CharacterEpisodes = ({ episodes }) => {
  return (
    <div className={s.characterEpisodes_wrapper}>
      <h6 className={s.title}>Episodes</h6>
      <div className={s.characterEpisodes_items}>
        {episodes?.map(episode => (
          <Link
            to={`/episode/${episode.id}`}
            key={episode.id}>
            <div className={s.characterEpisodes_item}>
              <div>
                <p className={s.episode}>{episode.episode}</p>
                <p className={s.name}>{episode.name}</p>
                <p className={s.date}>{episode.air_date}</p>
              </div>
              <img
                src={arrowLinkIcon}
                alt="arrow"
              />
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
