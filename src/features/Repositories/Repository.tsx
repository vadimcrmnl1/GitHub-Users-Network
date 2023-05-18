import React from 'react'

import s from './RepositoryContainer.module.css'

type RepositoryPropsType = {
  id: number
  name: string
  html_url: string
  description: string
}

export const Repository: React.FC<RepositoryPropsType> = ({ name, description, html_url }) => {
  return (
    <div className={s.repository}>
      <div className={s.repoLink}>
        <a href={html_url} target="_blank" rel="noreferrer">
          {name}
        </a>
        <p>{description}</p>
      </div>
    </div>
  )
}
