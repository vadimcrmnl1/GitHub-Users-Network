import React from 'react'

import { Repository } from './components/Repository'
import { User } from './components/User'
import s from './ProfileContainer.module.css'

export const ProfileContainer = () => {
  return (
    <div className={s.wrapper}>
      <div className={s.userContainer}>
        <User />
      </div>
      <div className={s.reposContainer}>
        <div className={s.reposBlock}>
          <h2>Repositories (count)</h2>
          <Repository />
        </div>
      </div>
    </div>
  )
}
