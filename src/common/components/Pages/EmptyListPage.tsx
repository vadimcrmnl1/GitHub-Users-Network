import React from 'react'

import CancelPresentationIcon from '@mui/icons-material/CancelPresentation'

import { style } from './FirstPage'
import s from './FirstPage.module.css'

export const EmptyListPage = () => {
  return (
    <div className={s.emptyListWrapper}>
      <CancelPresentationIcon sx={style} />
      <p>Repository list is empty</p>
    </div>
  )
}
