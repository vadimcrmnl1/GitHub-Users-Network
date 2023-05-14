import React from 'react'

import PeopleIcon from '@mui/icons-material/People'
import PersonIcon from '@mui/icons-material/Person'

import avatar from '../../../common/images/avatar.png'
import s from '../ProfileContainer.module.css'

export const User = () => {
  return (
    <div className={s.userBlock}>
      <>
        <img className={s.avatar} src={avatar} alt={'avatar'} />
      </>
      <div className={s.nameBlock}>
        <h3>Full name</h3>
        <a href={''} color={'blue'}>
          userName
        </a>
      </div>
      <div className={s.followersBlock}>
        <span>
          <PeopleIcon />
          10 followers
        </span>
        <span>
          <PersonIcon />1 following
        </span>
      </div>
    </div>
  )
}
