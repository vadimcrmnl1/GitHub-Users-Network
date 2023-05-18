import React from 'react'

import PeopleIcon from '@mui/icons-material/People'
import PersonIcon from '@mui/icons-material/Person'

import { useAppSelector } from '../../../app/hooks'
import avatar from '../../../common/images/avatar.png'
import {
  selectFollowers,
  selectFollowing,
  selectUserAvatar,
  selectUserName,
  selectUserNickName,
  selectUserUrl,
} from '../selectors'

import s from './User.module.css'

export const User = () => {
  const userName = useAppSelector(selectUserName)
  const userNick = useAppSelector(selectUserNickName)
  const followers = useAppSelector(selectFollowers)
  const following = useAppSelector(selectFollowing)
  const avatar = useAppSelector(selectUserAvatar)
  const userUrl = useAppSelector(selectUserUrl)

  return (
    <div className={s.userBlock}>
      <>
        <img className={s.avatar} src={avatar} alt={'avatar'} />
      </>
      <div className={s.nameBlock}>
        <h3>{userName}</h3>
        <a href={userUrl} target={'_blank'} rel="noreferrer">
          {userNick}
        </a>
      </div>
      <div className={s.followersBlock}>
        <PeopleIcon />
        <span>{followers} followers</span>
        <PersonIcon />
        <span>{following} following</span>
      </div>
    </div>
  )
}
