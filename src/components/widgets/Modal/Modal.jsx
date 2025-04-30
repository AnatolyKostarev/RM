import React from 'react'
import { Portal } from '../../ui/Portal/Portal'
import s from './Modal.module.css'

export const Modal = ({ onClick }) => {
  return (
    <Portal>
      <div className={s.modal_wrapper}>
        <div className={s.modal_inner}>
          <p className={s.modal_title}>Modal</p>
          <button
            onClick={onClick}
            className={s.modal_button}
            type="button">
            Закрыть
          </button>
        </div>
      </div>
    </Portal>
  )
}
