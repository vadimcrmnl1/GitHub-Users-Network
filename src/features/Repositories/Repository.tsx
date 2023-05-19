import React from 'react'

import ghLogo from '../../common/images/octojekyll.png'

import s from './RepositoryContainer.module.css'
type RepositoryPropsType = {
  id: number
  name: string
  html_url: string
  description: string
  homepage: string
  language: string | undefined
}

export const Repository: React.FC<RepositoryPropsType> = ({
  name,
  description,
  html_url,
  homepage,
  language,
}) => {
  return (
    <div className={s.repository}>
      <div className={s.repoLink}>
        <div className={s.titleBlock}>
          <a href={html_url} target="_blank" rel="noreferrer">
            {name}
          </a>
          {homepage && (
            <a href={homepage} target={'_blank'} rel="noreferrer">
              <img src={ghLogo} alt={'logo'} />
            </a>
          )}
        </div>
        <span>{language}</span>
        <p>{description}</p>
      </div>
    </div>
  )
}
