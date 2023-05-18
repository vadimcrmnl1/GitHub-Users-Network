import { AllReducersActionsType, AppThunk } from '../../app/hooks'
import { ParamsDataType, usersAPI } from '../api/api'
import { setAppLoadingAC } from '../Profile/actions'

import { setReposAC } from './actions'
import { RepositoriesActionsType, RepositoryDataType } from './types'

export const repositoryInitialState = {
  repos: [] as RepositoryDataType[],
  page: 1,
  emptyList: false,
}

export type RepositoryInitialStateType = typeof repositoryInitialState
export const repositoryReducer = (
  state: RepositoryInitialStateType = repositoryInitialState,
  action: RepositoriesActionsType
): RepositoryInitialStateType => {
  switch (action.type) {
    case 'REPOS/SET_EMPTY_LIST':
      return { ...state, emptyList: action.payload.emptyList }
    case 'REPOS/SET_REPOS':
      return {
        ...state,
        repos: action.payload.repos.map(rep => {
          return {
            ...rep,
            description: rep.description,
            id: rep.id,
            html_url: rep.html_url,
            name: rep.name,
          }
        }),
      }
    case 'REPOS/SET_PAGE':
      return { ...state, page: action.payload.page }
    default:
      return state
  }
}

export const getReposTC =
  (userName: string, page: number): AppThunk<AllReducersActionsType> =>
  async dispatch => {
    const params: ParamsDataType = {
      page: page,
      per_page: 4,
      sort: 'pushed',
    }

    dispatch(setAppLoadingAC(true))
    try {
      const res = await usersAPI.getUserRepos(userName, params)

      dispatch(setReposAC(res.data))
    } catch (err: any) {
      console.error(err.data)
    } finally {
      dispatch(setAppLoadingAC(false))
    }
  }
