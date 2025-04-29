import React from 'react'
import { Layout } from '../../components/widgets/Layout/Layout'
import { Container } from '../../components/ui/Container/Container'
import { PageLogo } from '../../components/ui/PageLogo/PageLogo'
import pageIcon from '../../assets/characters/characters-icon.svg'
import s from './Characters.module.css'

export const Characters = () => {
    return (
        <Layout>
            <section className={s.wrapper}>
                <Container>
                    <PageLogo src={pageIcon} width={600} height={200} alt="logo" />
                </Container>
            </section>
        </Layout>
    )
}
