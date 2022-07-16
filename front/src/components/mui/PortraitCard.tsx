import Image from 'next/image'
import * as React from 'react'
import { MailOutline, PhoneAndroidOutlined } from '@mui/icons-material'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
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
import { useTheme } from '@mui/material'
import Typography from '@mui/material/Typography'
interface Props {
  name: string
  functions: string
  image: string
  email: string
  phone: string | number
  description?: string,
  linkedin?: string,
  contact?: string[]
}

export function PortraitCard({
  name = "Alexis Archer",
  image,
  description,
  functions,
  contact,
  email,
  phone,
  linkedin = 'https://fr.linkedin.com/in/joel-archer',
}: Props) {
  const theme = useTheme()
  return (
    <Card
      sx={{
        width: 300,
        margin: 1.5,
        position: 'relative',
      }}
    >
      {/* header */}
      <Grid position='relative' padding="10px" borderLeft={`solid 5px ${theme.palette.primary.main}`} >
        <Typography variant="body2" fontWeight="bold" color="text.primary">
          {name?.toUpperCase()}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {functions}
        </Typography>
        {linkedin && <a
          href={linkedin}
          style={{
            position: 'absolute',
            top: '0px',
            right: '0px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            width: '35px',
            height: '100%',
            padding: '5px'
          }}>

          <LinkedInIcon fontSize='medium' sx={{ color: '#0a66c2' }}
          />

        </a>}
      </Grid>

      {/* IMAGE */}
      <Grid
        padding="5px"
        display="flex"
        justifyContent="center"
        sx={{
          backgroundColor: "#eae8e8",
          minHeight: "270px",
          minWidth: "250px",
          position: 'relative',
        }}
      >
        {!!image && (
          <Image
            src={image}
            alt={`Portrait_${name}`}
            layout="fill"
            objectFit='cover'
            objectPosition='center'
          />
        )}
      </Grid>

      <Divider />
      {/* DESCRIPTION */}
      <CardContent sx={{
        height: '130px', overflowY: "auto"
      }}>{description}</CardContent>

      <Divider />

      <CardActions
        disableSpacing
        sx={{
          display: 'grid',
          padding: '10px 5px 10px 5px',
          "& a": { margin: '2px 5px' },
          '& *': {
            textDecoration: 'none'
          }
        }}
      >
        <Grid item container justifyContent="start" alignItems="center" sx={{
        }}>
          <MailOutline fontSize="small" />
          <a href={'mailto:' + email}>{email}</a>
        </Grid>
        <Grid item container justifyContent="start" alignItems="center">
          <PhoneAndroidOutlined fontSize="small" />
          <a href={'telto:' + phone}>{phone}</a>
        </Grid>
      </CardActions>
    </Card >
  )
}
