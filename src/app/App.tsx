import React from 'react'

import { Header } from '../common/components/Header/Header'
import { EmptyUserPage } from '../common/components/Pages/EmptyUserPage'
import { FirstPage } from '../common/components/Pages/FirstPage'
import { Preloader } from '../common/components/Preloader/Preloader'
import { ProfileContainer } from '../features/Profile/ProfileContainer'
import {
  selectAppIsLoading,
  selectFirstStart,
  selectIncorrectUser,
} from '../features/Profile/selectors'

import s from './App.module.css'
import { useAppSelector } from './hooks'

function App() {
  const isLoading = useAppSelector(selectAppIsLoading)
  const firstStart = useAppSelector(selectFirstStart)
  const incorrectUser = useAppSelector(selectIncorrectUser)

  return (
    <div className={s.App}>
      <Header />
      {isLoading && <Preloader />}
      {/* eslint-disable-next-line no-nested-ternary */}
      {firstStart ? <FirstPage /> : incorrectUser ? <EmptyUserPage /> : <ProfileContainer />}
    </div>
  )
}

export default App
