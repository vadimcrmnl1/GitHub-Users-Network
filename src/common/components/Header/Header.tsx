import * as React from 'react'
import { ChangeEvent } from 'react'

import GitHubIcon from '@mui/icons-material/GitHub'
import SearchIcon from '@mui/icons-material/Search'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import InputBase from '@mui/material/InputBase'
import { alpha, styled } from '@mui/material/styles'
import Toolbar from '@mui/material/Toolbar'

import { useAppDispatch, useAppSelector } from '../../../app/hooks'
import { setSearchUserNameAC } from '../../../features/Profile/actions'
import { getUserTC } from '../../../features/Profile/profile-reducer'
import { selectUserNameForSearch } from '../../../features/Profile/selectors'

const logoStyle = {
  width: '40px',
  height: '40px',
  color: 'white',
  size: 'large',
}
const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 1),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 1),
  },
  marginLeft: 0,
  minWidth: '40%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: '40%',
  },
}))

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: 'black',
}))

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'black',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '60ch',
      '&:focus': {
        width: '60ch',
      },
    },
  },
}))

export const Header = () => {
  const dispatch = useAppDispatch()
  const userName = useAppSelector(selectUserNameForSearch)

  const handleUserSearch = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    dispatch(setSearchUserNameAC(event.currentTarget.value))
  }
  const handleEnterSearch = (key: React.KeyboardEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    if (key.key === 'Enter') {
      dispatch(getUserTC(userName))
    }
  }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" style={{ backgroundColor: '#0064EB' }}>
        <Toolbar>
          <a href={'https://github.com/'} target={'_blank'} rel="noreferrer">
            <GitHubIcon sx={logoStyle} />
          </a>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              onChange={handleUserSearch}
              onKeyDown={handleEnterSearch}
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
        </Toolbar>
      </AppBar>
    </Box>
  )
}
