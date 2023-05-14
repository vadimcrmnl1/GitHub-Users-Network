import React from 'react'

import { Header } from '../common/components/Header/Header'
import { ProfileContainer } from '../features/Profile/ProfileContainer'

import s from './App.module.css'

function App() {
  return (
    <div className={s.App}>
      <Header />
      <ProfileContainer />
    </div>
  )
}

export default App
