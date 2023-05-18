import * as React from 'react'

import Person2OutlinedIcon from '@mui/icons-material/Person2Outlined'

import s from './FirstPage.module.css'

const style = {
  width: '70px',
  height: '70px',
}

export const EmptyUserPage = () => {
  return (
    <div className={s.wrapper}>
      <div>
        <Person2OutlinedIcon sx={style} />
      </div>
      <div className={s.description}>
        <p>User not found</p>
      </div>
    </div>
  )
}
