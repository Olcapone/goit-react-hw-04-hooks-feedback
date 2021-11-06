import React from 'react'
import { string, element } from 'prop-types'
import s from './section.module.css'

export default function Section ({ title, children }) {
  return (
    <section className={s.section}>
      {title && <h2 className={s.title}> {title} </h2>}
      {children}
    </section>
  )
}

Section.propTypes = {
  title: string,
  children: element
}
