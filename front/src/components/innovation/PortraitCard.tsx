import * as React from 'react';

import {
  Card,
  CardActions,
  CardContent,
  Container,
  Divider,
  Grid,
  Stack,
} from '@mui/material';
import { MailOutline, PhoneAndroidOutlined } from '@mui/icons-material';

import Image from 'next/image';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Typography from '@mui/material/Typography';
import { useTheme } from '../../../node_modules/@mui/material';

interface Props {
  name: string;
  job: string;
  image: string;
  email: string;
  phone: string | number;
  description?: string;
  linkedin?: string;
  contact?: string[];
}

export function PortraitCard({
  name = 'Alexis Archer',
  image,
  description,
  job,
  email,
  phone,
  linkedin,
}: Props) {
  const theme = useTheme();
  return (
    <Card sx={{ maxWidth: '250px' }}>
      {/* header */}
      <Grid
        position="relative"
        padding="10px"
        borderLeft={`solid 5px ${theme.palette.primary.main}`}
      >
        <Typography variant="body2" fontWeight="bold" color="text.primary">
          {name?.toUpperCase()}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {job}
        </Typography>
        {linkedin && (
          <a
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
              padding: '5px',
            }}
          >
            <LinkedInIcon fontSize="medium" sx={{ color: '#0a66c2' }} />
          </a>
        )}
      </Grid>

      {/* IMAGE */}
      <Grid
        padding="5px"
        display="flex"
        justifyContent="center"
        sx={{
          backgroundColor: '#eae8e8',
          minHeight: '270px',
          minWidth: '250px',
          position: 'relative',
        }}
      >
        {!!image && <Image src={image} alt={`Portrait_${name}`} fill />}
      </Grid>

      <Divider />
      {/* DESCRIPTION */}
      <CardContent
        sx={{
          height: '130px',
          overflowY: 'auto',
        }}
      >
        {description}
      </CardContent>

      <Divider />

      <CardActions
        disableSpacing
        sx={{
          display: 'grid',
          padding: '10px 5px 10px 5px',
          '& a': { margin: '2px 5px' },
          '& *': {
            textDecoration: 'none',
          },
        }}
      >
        <Stack direction="row" justifyContent="start" alignItems="center">
          <MailOutline fontSize="small" />
          <a href={'mailto:' + email}>{email}</a>
        </Stack>
        <Grid item container justifyContent="start" alignItems="center">
          <PhoneAndroidOutlined fontSize="small" />
          <a href={'telto:' + phone}>{phone}</a>
        </Grid>
      </CardActions>
    </Card>
  );
}
