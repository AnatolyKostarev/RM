import React from 'react'
import { useGetCharactersQuery } from '../../features/characters/characters-api'
import { Layout } from '../../components/widgets/Layout/Layout'
import { Container } from '../../components/ui/Container/Container'
import { PageLogo } from '../../components/ui/PageLogo/PageLogo'
import { CardsContainer } from '../../components/ui/CardsContainer/CardsContainer'
import { CharacterCard } from '../../components/ui/CharacterCard/CharacterCard'
import { Filters } from '../../components/widgets/Filters/Filters'
import pageIcon from '../../assets/characters/characters-icon.svg'
import s from './Characters.module.css'
import { Button } from '../../components/ui/Button/Button'

export const Characters = () => {
  const [filters, setFilters] = React.useState({
    page: 1,
    name: '',
    status: '',
    species: '',
    gender: ''
  })

  const { data, isLoading, isFetching, error } = useGetCharactersQuery(
    filters,
    {
      keepPreviousData: true
    }
  )

  const handleFilterChange = React.useCallback((filterName, value) => {
    setFilters(prev => ({
      ...prev,
      [filterName]: value,
      page: 1
    }))
  }, [])

  const handleLoadMore = () => {
    setFilters(prev => ({ ...prev, page: prev.page + 1 }))
  }

  if (isLoading && filters.page === 1) {
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

  if (error) {
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
          <PageLogo
            src={pageIcon}
            width={600}
            height={200}
            alt="logo"
          />

          <Filters
            filters={filters}
            onFilterChange={handleFilterChange}
            className={s.filters}
          />
          <CardsContainer>
            {data?.characters?.map(char => (
              <CharacterCard
                key={char.id}
                {...char}
              />
            ))}
          </CardsContainer>
          {data?.pagination?.next && (
            <div className={s.btn_wrapper}>
              <Button
                onClick={handleLoadMore}
                disabled={isFetching}
                isFetching={isFetching}
              />
            </div>
          )}
        </Container>
      </section>
    </Layout>
  )
}
