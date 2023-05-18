import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import { AnyAction } from 'redux'
import { ThunkAction, ThunkDispatch } from 'redux-thunk'

import { ProfileActionsType } from '../features/Profile/types'
import { RepositoriesActionsType } from '../features/Repositories/types'

import type { AppRootStateType } from './store'

export const useAppDispatch = () => useDispatch<AppThunkDispatch>()
export const useAppSelector: TypedUseSelectorHook<AppRootStateType> = useSelector

export type AppThunkDispatch = ThunkDispatch<AppRootStateType, unknown, AllReducersActionsType>

export type AllReducersActionsType = ProfileActionsType | RepositoriesActionsType
export type AppThunk<A extends AnyAction, ReturnType = void> = ThunkAction<
  ReturnType,
  AppRootStateType,
  unknown,
  A
>
