import * as actions from './actions'

export type InferValueType<T> = T extends { [key: string]: infer U } ? U : never
export type UserDataType = {
  userName: string
  userNick: string
  repositories: number
  followers: number
  following: number
  avatar_url: string
  user_url: string
}
export type ProfileActionsType = ReturnType<InferValueType<typeof actions>>
