import * as React from 'react'

import Pagination from '@mui/material/Pagination'
import Stack from '@mui/material/Stack'
import { useSearchParams } from 'react-router-dom'

import { useAppDispatch, useAppSelector } from '../../../../app/hooks'
import { selectUserNameForSearch } from '../../../Profile/selectors'
import { setPageAC } from '../../actions'
import { getReposTC } from '../../repository-reducer'
import { selectPage } from '../../selectors'

type PaginationRoundedType = {
  reposCount: number
}

export const PaginationRounded: React.FC<PaginationRoundedType> = ({ reposCount }) => {
  const dispatch = useAppDispatch()
  const pagesCount = Math.ceil(reposCount / 4)
  const userName = useAppSelector(selectUserNameForSearch)
  const page = useAppSelector(selectPage)
  const [searchParams, setSearchParams] = useSearchParams()
  const params = Object.fromEntries(searchParams)
  const handlePageChange = (event: any, page: number) => {
    dispatch(setPageAC(page))
    dispatch(getReposTC(userName, page))
    setSearchParams({ ...params, page: page.toString() })
  }

  return (
    <Stack spacing={2}>
      <Pagination
        count={pagesCount}
        shape="rounded"
        page={page}
        onChange={handlePageChange}
        showFirstButton
        showLastButton
      />
    </Stack>
  )
}
