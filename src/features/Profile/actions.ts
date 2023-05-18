import { UserDataType } from './types'

export const setUserInfoAC = (user: UserDataType) =>
  ({
    type: 'USER/SET_USER',
    payload: { user },
  } as const)
export const setUserNameAC = (userName: string) =>
  ({
    type: 'USER/SET_NAME',
    payload: { userName },
  } as const)
export const setUserNickAC = (userNick: string) =>
  ({
    type: 'USER/SET_NICK',
    payload: { userNick },
  } as const)
export const setReposCountAC = (reposCount: number) =>
  ({
    type: 'USER/SET_REPOSITORIES_COUNT',
    payload: { reposCount },
  } as const)
export const setFollowersAC = (followers: number) =>
  ({
    type: 'USER/SET_FOLLOWERS',
    payload: { followers },
  } as const)
export const setFollowingAC = (following: number) =>
  ({
    type: 'USER/SET_FOLLOWING',
    payload: { following },
  } as const)
export const setUserAvatarAC = (avatar: string) =>
  ({
    type: 'USER/SET_AVATAR',
    payload: { avatar },
  } as const)
export const setAppLoadingAC = (isLoading: boolean) =>
  ({
    type: 'APP/IS_LOADING',
    payload: { isLoading },
  } as const)
export const setFirstStartAC = (firstStart: boolean) =>
  ({
    type: 'APP/IS_FIRST_START',
    payload: { firstStart },
  } as const)
export const setIncorrectUserAC = (incorrectUser: boolean) =>
  ({
    type: 'APP/SET_INCORRECT_USER',
    payload: { incorrectUser },
  } as const)
export const setSearchUserNameAC = (userName: string) =>
  ({
    type: 'USER/SEARCH_USER_NAME',
    payload: { userName },
  } as const)
export const setUserUrlAC = (user_url: string) =>
  ({
    type: 'USER/SET_USER_URL',
    payload: { user_url },
  } as const)
