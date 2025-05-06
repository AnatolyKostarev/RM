import React from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import {
  useGetCharacterByIdQuery,
  useGetMultipleEpisodesQuery
} from '../../features/characters/characters-api'
import { Layout } from '../../components/widgets/Layout/Layout'
import { Container } from '../../components/ui/Container/Container'
import { CharacterAvatar } from './CharacterAvatar/CharacterAvatar'
import { CharacterInfo } from './CharacterInfo/CharacterInfo'
import { CharacterEpisodes } from './CharacterEpisodes/CharacterEpisodes'
import arrowBackIcon from '../../assets/characters/arrow_back.svg'
import s from './Character.module.css'

export const Character = () => {
  const { id } = useParams()
  const navigate = useNavigate()

  const {
    data: character,
    isLoading,
    error
  } = useGetCharacterByIdQuery(id, {
    keepPreviousData: true
  })

  const episodesIds = React.useMemo(() => {
    if (!character?.episode) return []
    return character?.episode?.map(epUrl => +epUrl.split('/').pop())
  }, [character])

  const {
    data: episodes,
    isLoading: episodesLoading,
    error: episodesError
  } = useGetMultipleEpisodesQuery(episodesIds, {
    skip: episodesIds.length === 0
  })

  if (isLoading || episodesLoading) {
    return (
      <Layout>
        <section className={s.wrapper}>
          <Container>
            <div className={s.loading}>Загружаю...</div>
          </Container>
        </section>
      </Layout>
    )
  }

  if (error || episodesError) {
    return (
      <Layout>
        <section className={s.wrapper}>
          <Container>
            <div className={s.error}>
              По Вашему запросу ничего не найдено :(
            </div>
          </Container>
        </section>
      </Layout>
    )
  }

  const handleGoBack = () => {
    navigate(-1)
  }

  return (
    <Layout>
      <section className={s.wrapper}>
        <Container>
          <button
            className={s.back_btn}
            type="button"
            onClick={handleGoBack}>
            <img
              src={arrowBackIcon}
              alt="back"
            />
            <span>Go Back</span>
          </button>
          <CharacterAvatar
            image={character?.image}
            name={character?.name}
          />
          <div className={s.character_description}>
            <CharacterInfo
              gender={character?.gender}
              status={character?.status}
              species={character?.species}
              origin={character?.origin?.name}
              type={character?.type || 'unkown'}
              location={character?.location?.name}
            />
            <CharacterEpisodes episodes={episodes} />
          </div>
        </Container>
      </section>
    </Layout>
  )
}
