import React from 'react'
import { string } from 'prop-types'
import s from './Notification.module.css'

const Notification = ({ message }) => <h2 className={s.title}>{message}</h2>

Notification.propTypes = {
  message: string
}

export default Notification
