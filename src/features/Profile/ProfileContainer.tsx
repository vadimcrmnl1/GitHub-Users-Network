import React from 'react'

import { useAppSelector } from '../../app/hooks'
import { EmptyListPage } from '../../common/components/Pages/EmptyListPage'
import { RepositoryContainer } from '../Repositories/RepositoryContainer'
import { selectRepos } from '../Repositories/selectors'

import { User } from './components/User'
import s from './ProfileContainer.module.css'

export const ProfileContainer = () => {
  const repos = useAppSelector(selectRepos)

  return (
    <div className={s.wrapper}>
      <div className={s.userContainer}>
        <User />
      </div>
      <div className={s.reposContainer}>
        {repos.length ? <RepositoryContainer /> : <EmptyListPage />}
      </div>
    </div>
  )
}
