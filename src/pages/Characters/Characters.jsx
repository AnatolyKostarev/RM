import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from '../../store/reducers/CounterSlice'
import { Layout } from '../../components/widgets/Layout/Layout'
import { Container } from '../../components/ui/Container/Container'
import { PageLogo } from '../../components/ui/PageLogo/PageLogo'
import pageIcon from '../../assets/characters/characters-icon.svg'
import s from './Characters.module.css'

export const Characters = () => {
  const dispatch = useDispatch()
  const { value } = useSelector(state => state.counter)

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
          <button onClick={() => dispatch(decrement())}>-</button>
          <span>{value}</span>
          <button onClick={() => dispatch(increment())}>+</button>
        </Container>
      </section>
    </Layout>
  )
}
