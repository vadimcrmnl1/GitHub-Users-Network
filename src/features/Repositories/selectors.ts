import { AppRootStateType } from '../../app/store'

export const selectRepos = (state: AppRootStateType) => state.repos.repos
export const selectPage = (state: AppRootStateType) => state.repos.page
