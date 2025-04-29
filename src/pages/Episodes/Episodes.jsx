import React from 'react'
import { Layout } from '../../components/widgets/Layout/Layout'
import { Container } from '../../components/ui/Container/Container'
import { PageLogo } from '../../components/ui/PageLogo/PageLogo'
import pageIcon from '../../assets/episodes/episodes-icon.svg'
import s from './Episodes.module.css'

export const Episodes = () => {
    return (
        <Layout>
            <section className={s.wrapper}>
                <Container>
                    <PageLogo src={pageIcon} width={270} height={210} alt="logo" />
                </Container>
            </section>
        </Layout>
    )
}
