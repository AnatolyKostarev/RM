import React from 'react'
import { Layout } from '../../components/widgets/Layout/Layout'
import { Container } from '../../components/ui/Container/Container'
import s from './Episode.module.css'
import { useParams } from 'react-router-dom'

export const Episode = () => {
  const { id } = useParams()
  return (
    <Layout>
      <section className={s.wrapper}>
        <Container>
          <div>Episode: {id}</div>
        </Container>
      </section>
    </Layout>
  )
}
