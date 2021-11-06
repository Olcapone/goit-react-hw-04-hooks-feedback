import React from 'react'
import { number, shape } from 'prop-types'
import shortid from 'shortid'
import s from './Statistics.module.css'
import Notification from '../Notification/Notification'

const Statistics = ({ options, total, positivePercentage }) => {
  const newArr = Object.keys(options)
  return (
    <>
      {total >= 1
        ? (
        <ul className={s.list}>
          {newArr.map((option) => (
            <li className={s.items} key={shortid.generate()}>
              {option}:<span className={s.goodStats}>{options[option]}</span>
            </li>
          ))}
          <li className={s.items}>
            Total:
            <span className={s.goodStats}>{total}</span>
          </li>
          <li className={s.items}>
            Positive feedback:
            <span
              className={positivePercentage > 50 ? s.goodStats : s.badStats}
            >
              {positivePercentage} %
            </span>
          </li>
        </ul>
          )
        : (
        <Notification message="No feedback given"></Notification>
          )}
    </>
  )
}

Statistics.propTypes = {
  total: number,
  positivePercentage: number,
  //  options: array
  options: shape({})
}

export default Statistics
