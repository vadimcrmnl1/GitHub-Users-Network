import { AppRootStateType } from '../../app/store'

export const selectUserName = (state: AppRootStateType) => state.profile.user.userName
export const selectUserAvatar = (state: AppRootStateType) => state.profile.user.avatar_url
export const selectUserNickName = (state: AppRootStateType) => state.profile.user.userNick
export const selectFollowers = (state: AppRootStateType) => state.profile.user.followers
export const selectFollowing = (state: AppRootStateType) => state.profile.user.following
export const selectReposCount = (state: AppRootStateType) => state.profile.user.repositories
export const selectAppIsLoading = (state: AppRootStateType) => state.profile.isLoading
export const selectUserNameForSearch = (state: AppRootStateType) => state.profile.userName
export const selectUserUrl = (state: AppRootStateType) => state.profile.user.user_url
export const selectFirstStart = (state: AppRootStateType) => state.profile.firstStart
export const selectIncorrectUser = (state: AppRootStateType) => state.profile.incorrectUser
