import React from 'react'

import { useAppSelector } from '../../app/hooks'
import { selectReposCount } from '../Profile/selectors'

import { PaginationRounded } from './common/Pagination/Pagination'
import { Repository } from './Repository'
import s from './RepositoryContainer.module.css'
import { selectRepos } from './selectors'

export const RepositoryContainer = () => {
  const repos = useAppSelector(selectRepos)
  const reposCount = useAppSelector(selectReposCount)

  return (
    <div className={s.reposBlock}>
      <div className={s.pageTitle}>Repositories ({reposCount})</div>
      {repos.map(rep => {
        return (
          <Repository
            key={rep.id}
            id={rep.id}
            name={rep.name}
            html_url={rep.html_url}
            description={rep.description}
          />
        )
      })}
      <div className={s.paginationBlock}>
        <PaginationRounded reposCount={reposCount} />
      </div>
    </div>
  )
}
