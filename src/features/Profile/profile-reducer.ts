import { AllReducersActionsType, AppThunk } from '../../app/hooks'
import { usersAPI } from '../api/api'
import { setPageAC } from '../Repositories/actions'
import { getReposTC } from '../Repositories/repository-reducer'

import {
  setAppLoadingAC,
  setFirstStartAC,
  setFollowersAC,
  setFollowingAC,
  setIncorrectUserAC,
  setReposCountAC,
  setUserAvatarAC,
  setUserNameAC,
  setUserNickAC,
  setUserUrlAC,
} from './actions'
import { ProfileActionsType } from './types'

export const profileInitialState = {
  firstStart: true,
  incorrectUser: false,
  isLoading: false,
  userName: '',
  user: {
    userName: 'User Name',
    userNick: 'usernick',
    repositories: 0,
    followers: 0,
    following: 0,
    avatar_url: '',
    user_url: '',
  },
}

export type ProfileInitialStateType = typeof profileInitialState

export const profileReducer = (
  state: ProfileInitialStateType = profileInitialState,
  action: ProfileActionsType
): ProfileInitialStateType => {
  switch (action.type) {
    case 'USER/SEARCH_USER_NAME':
      return { ...state, userName: action.payload.userName }
    case 'USER/SET_USER':
      return { ...state, user: action.payload.user }
    case 'USER/SET_AVATAR':
      return { ...state, user: { ...state.user, avatar_url: action.payload.avatar } }
    case 'USER/SET_NAME':
      return { ...state, user: { ...state.user, userName: action.payload.userName } }
    case 'USER/SET_NICK':
      return { ...state, user: { ...state.user, userNick: action.payload.userNick } }
    case 'USER/SET_REPOSITORIES_COUNT':
      return { ...state, user: { ...state.user, repositories: action.payload.reposCount } }
    case 'USER/SET_FOLLOWERS':
      return { ...state, user: { ...state.user, followers: action.payload.followers } }
    case 'USER/SET_FOLLOWING':
      return { ...state, user: { ...state.user, following: action.payload.following } }
    case 'USER/SET_USER_URL': {
      return { ...state, user: { ...state.user, user_url: action.payload.user_url } }
    }
    case 'APP/IS_LOADING':
      return { ...state, isLoading: action.payload.isLoading }
    case 'APP/IS_FIRST_START':
      return { ...state, firstStart: action.payload.firstStart }
    case 'APP/SET_INCORRECT_USER':
      return { ...state, incorrectUser: action.payload.incorrectUser }
    default:
      return state
  }
}

export const getUserTC =
  (userName: string): AppThunk<AllReducersActionsType> =>
  async dispatch => {
    dispatch(setAppLoadingAC(true))

    try {
      const res = await usersAPI.getUser(userName)

      if (res.status === 200) {
        dispatch(setUserNameAC(res.data.name))
        dispatch(setFollowingAC(res.data.following))
        dispatch(setFollowersAC(res.data.followers))
        dispatch(setReposCountAC(res.data.public_repos))
        dispatch(setUserNickAC(res.data.login))
        dispatch(setUserAvatarAC(res.data.avatar_url))
        dispatch(setUserUrlAC(res.data.html_url))
        dispatch(getReposTC(userName, 1))
        dispatch(setIncorrectUserAC(false))
      }
    } catch (err: any) {
      dispatch(setIncorrectUserAC(true))
    } finally {
      dispatch(setPageAC(1))
      dispatch(setFirstStartAC(false))
      dispatch(setAppLoadingAC(false))
    }
  }
