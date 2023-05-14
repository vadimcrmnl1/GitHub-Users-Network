import React from 'react'

import s from '../ProfileContainer.module.css'

export const Repository = () => {
  return (
    <div className={s.repository}>
      <a href={''} className={s.repoLink}>
        Repository name
      </a>
      <p>
        Description.Description.Description.Description.Description.Description.Description.Description.Description.
      </p>
    </div>
  )
}
