import * as React from 'react'

import SearchIcon from '@mui/icons-material/Search'

import s from './FirstPage.module.css'

export const style = {
  width: '70px',
  height: '70px',
}

export const FirstPage = () => {
  return (
    <div className={s.wrapper}>
      <div>
        <SearchIcon sx={style} />
      </div>
      <div className={s.description}>
        <p>Start with searching</p>
        <p>a GitHub user</p>
      </div>
    </div>
  )
}
