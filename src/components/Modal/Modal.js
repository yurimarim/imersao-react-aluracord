import React from 'react'
import appConfig from '../../../config.json'
import { useRouter } from 'next/router'
import { Box, Text, TextField, Image, Button } from '@skynexui/components'
import { supabaseClient } from '../../services/supabase'

export function Modal(props) {
  const router = useRouter()
  const userName = router.query.username

  function getName() {
    supabaseClient
      .from('users')
      .select('*')
      .then(({ data }) => {
        console.logo(data)
      })
  }

  return (
    <Box
      styleSheet={{
        position: 'absolute',
        zIndex: 2,
        backgroundColor: appConfig.theme.colors.background.backgroundBlack,
        boxShadow:
          'rgba(4, 4, 5, 0.15) 0px 0px 0px 1px, rgba(0, 0, 0, 0.24) 0px 8px 16px 0px',
        width: {
          xs: '200px',
          sm: '290px'
        },
        height: '300px'
      }}
      onClick={() => setOpenState(false)}
    >
      <Text tag="strong">{}</Text>
    </Box>
  )
}
