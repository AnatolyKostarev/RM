import React from 'react'
import { Layout } from '../../components/widgets/Layout/Layout'
import { Container } from '../../components/ui/Container/Container'
import { PageLogo } from '../../components/ui/PageLogo/PageLogo'
import pageIcon from '../../assets/locations/locations-icon.svg'
import s from './Locations.module.css'

export const Locations = () => {
  return (
    <Layout>
      <Container>
        <section className={s.wrapper}>
          <PageLogo
            src={pageIcon}
            width={326}
            height={202}
            alt="logo"
          />
        </section>
      </Container>
    </Layout>
  )
}
