import React from 'react'
import { useParams } from 'react-router-dom'
import {
  useGetCharacterByIdQuery,
  useGetMultipleEpisodesQuery
} from '../../features/characters/characters-api'
import { Layout } from '../../components/widgets/Layout/Layout'
import { Container } from '../../components/ui/Container/Container'
import s from './Character.module.css'
import { CharacterAvatar } from './CharacterAvatar/CharacterAvatar'
import { CharacterInfo } from './CharacterInfo/CharacterInfo'
import { CharacterEpisodes } from './CharacterEpisodes/CharacterEpisodes'

export const Character = () => {
  const { id } = useParams()

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

  console.log(character)
  console.log('episodesIds', episodesIds)
  console.log('episodes', episodes)

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

  return (
    <Layout>
      <section className={s.wrapper}>
        <Container>
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
