import * as React from 'react'

import Box from '@mui/material/Box'
import LinearProgress from '@mui/material/LinearProgress'

export const Preloader = () => {
  return (
    <Box position={'absolute'} sx={{ width: '100%' }}>
      <LinearProgress />
    </Box>
  )
}
