import React from 'react'
import { Layout } from '../../components/widgets/Layout/Layout'
import { Container } from '../../components/ui/Container/Container'
import s from './Error.module.css'

export const Error = () => {
    return (
        <Layout>
            <section className={s.wrapper}>
                <Container>
                    <h2>404</h2>
                </Container>
            </section>
        </Layout>
    )
}
