import { RepositoryDataType } from './types'

export const setPageAC = (page: number) =>
  ({
    type: 'REPOS/SET_PAGE',
    payload: { page },
  } as const)
export const setEmptyListAC = (emptyList: boolean) =>
  ({
    type: 'REPOS/SET_EMPTY_LIST',
    payload: { emptyList },
  } as const)
export const setReposAC = (repos: RepositoryDataType[]) =>
  ({
    type: 'REPOS/SET_REPOS',
    payload: { repos },
  } as const)
