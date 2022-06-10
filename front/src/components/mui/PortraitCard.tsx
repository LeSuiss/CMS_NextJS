import Image from 'next/image'
/* eslint-disable import/prefer-default-export */
import * as React from 'react'
import { MailOutline, PhoneAndroidOutlined } from '@mui/icons-material'
import {
  Avatar,
  Box,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Divider,
  Grid,
  Tooltip,
} from '@mui/material'
import IconButton, { IconButtonProps } from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import { red } from '@mui/material/colors'
import { color } from '@mui/system'

interface Props {
  name: string
  functions: string
  image: string
  email: string
  phone: string | number
  description?: string
  contact?: string[]
}

export function PortraitCard({
  name,
  image,
  description,
  functions,
  contact,
  email,
  phone,
}: Props) {
  return (
    <Card
      sx={{
        maxWidth: 345,
        margin: 1.5,
        position: 'relative',
      }}
    >
      <Grid padding="10px" borderLeft={`solid 5px rgb(194, 0, 43)`} >
        <Typography variant="body2" fontWeight="bold" color="text.primary">
          {'Alexis ARCHER'?.toUpperCase()}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {functions}
        </Typography>
      </Grid>

      <Grid padding="5px" display="flex" justifyContent="center" sx={{backgroundColor:"#eae8e8", minHeight:"250px", minWidth:"250px"}}>
        {!!image && (
          <Image
            src={image}
            height="250px"
            width="250px"
            alt={`Portrait_${name}`}
            layout="intrinsic"
          />
        )}
      </Grid>

      <Divider />

      <CardContent sx={{height:'130px', overflow:"scroll"}}>{description}</CardContent>

      <Divider />

      <CardActions
        disableSpacing
        sx={{
          display: 'grid',
          padding: '0 5px 10px 5px',
        }}
      >
        <Grid item container justifyContent="start" alignItems="center">
          <MailOutline fontSize="small" />
          <a href={'mailto:' + email}>{email}</a>
        </Grid>
        <Grid item container justifyContent="start" alignItems="center">
          <PhoneAndroidOutlined fontSize="small" />
          <a href={'telto:'+phone }>{phone}</a>
        </Grid>
      </CardActions>
    </Card>
  )
}
