import { applyMiddleware, combineReducers, legacy_createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'

// eslint-disable-next-line import/namespace
import { profileReducer } from '../features/Profile/profile-reducer'
import { repositoryReducer } from '../features/Repositories/repository-reducer'

import { AppThunkDispatch } from './hooks'

const rootReducer = combineReducers({
  profile: profileReducer,
  repos: repositoryReducer,
})
const middlewareEnhancer = applyMiddleware<AppThunkDispatch, AppRootStateType>(thunk)
const composedEnhancers = composeWithDevTools(middlewareEnhancer)

export const store = legacy_createStore(rootReducer, composedEnhancers)
export type AppRootStateType = ReturnType<typeof rootReducer>
