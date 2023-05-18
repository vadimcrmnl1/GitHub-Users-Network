import { InferValueType } from '../Profile/types'

import * as actions from './actions'

export type RepositoryDataType = {
  id: number
  name: string
  html_url: string
  description: string
}
export type RepositoriesActionsType = ReturnType<InferValueType<typeof actions>>
