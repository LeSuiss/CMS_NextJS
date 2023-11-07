import {
  Button,
  Card,
  CardContent,
  CardHeader,
  Checkbox,
  Divider,
  FormControlLabel,
  Grid,
  Stack,
  TextField,
  Typography,
} from '@mui/material';
import {
  COMPANY_NAME,
  GOOGLE_MAP_LOCATION,
  SOCIAL_MEDIAS_LINKS,
} from '../config';
import { defineMessage, t } from '@lingui/macro';

import { GetStaticProps } from 'next';
import { Iframe } from '../lib';
import Layout from '../components/layout';
import React from 'react';
import { SocialMedias } from '../components/layout/footer/SocialMedias';
import emailjs from '@emailjs/browser';
import { i18n } from '@lingui/core';
import loadTranslation from '../utils/loadTranslation';
import { toast } from 'react-toastify';
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import { useTheme } from '../../node_modules/@mui/material';

export default function Contact({}) {
  const {
    register,
    handleSubmit,
    trigger,
    formState: { errors },
  } = useForm();
  const [isSending, setIsSending] = useState(false);

  const onSubmit = async (e) => {
    e.preventDefault();
    setIsSending(true);

    await trigger();
    await handleSubmit(async (data) => {
      const successMsg = defineMessage({
        message: 'Votre message a bien été transmis',
      });
      const errorMsg = defineMessage({
        message: 'Une erreur est survenue. Veuillez réessayer ultérieurement',
      });
      await sendMail(data)
        .then((x) =>
          x.status === 200
            ? toast.success(i18n._(successMsg))
            : toast.error(i18n._(errorMsg))
        )
        .catch(() => toast.error(i18n._(errorMsg)));
    })(e);
    setIsSending(false);
  };

  const theme = useTheme();
  return (
    <Layout
      title={i18n._(/* i18n: Contact */ t`Contact`)}
      backgroundImageUrl="/medias/bureau.jpeg"
    >
      <Card
        elevation={8}
        sx={{
          display: 'flex',
          justifyContent: 'space-around',
          alignItems: 'flex-start',
        }}
      >
        <Grid container alignItems="flex-start">
          <Grid container columns={{ xs: 4, sm: 8, md: 12 }} xs={12} md={6}>
            <CardHeader
              sx={{
                textAlign: 'center',
                borderBottom: `${theme.palette.primary.main} solid 2px`,
                width: '50%',
                margin: 'auto',
              }}
              title={i18n._(/* i18n: Nous Contacter */ t`Nous Contacter`)}
            />
            <form>
              <Grid
                container
                justifyContent="center"
                alignItems="center"
                columns={{ xs: 4, sm: 8, md: 12 }}
                paddingY={2}
              >
                <Grid item xs={12} md={6} padding={2} justifyContent="center">
                  <TextField
                    variant="outlined"
                    fullWidth
                    color="secondary"
                    type="text"
                    placeholder={i18n._(/* i18n: prenom */ t`Nom`)}
                    name="lastName"
                    label={i18n._(/* i18n: error email lastName */ t`Nom`)}
                    helperText={
                      errors.lastName &&
                      i18n._(/* i18n: error email msg */ t`Ce champ est requis`)
                    }
                    error={!!errors.lastName}
                    {...register('lastName', {
                      maxLength: 50,
                      required: true,
                    })}
                  />
                </Grid>
                <Grid item xs={12} md={6} padding={2} justifyContent="center">
                  <TextField
                    fullWidth
                    variant="outlined"
                    color="secondary"
                    type="text"
                    placeholder={i18n._(/* i18n: nom */ t`Prénom`)}
                    name="firstName"
                    label={i18n._(/* i18n: error email firstName */ t`Prénom`)}
                    helperText={
                      errors.firstName &&
                      i18n._(
                        /* i18n: error email firstname */ t`Ce champ est requis`
                      )
                    }
                    error={!!errors.firstName}
                    {...register('firstName', {
                      maxLength: 80,
                      required: true,
                    })}
                  />
                </Grid>
                <Grid item xs={12} md={6} padding={2} justifyContent="center">
                  <TextField
                    variant="outlined"
                    fullWidth
                    color="secondary"
                    type="text"
                    name="company"
                    placeholder={i18n._(/* i18n: entreprise */ t`Entreprise`)}
                    label={i18n._(/* i18n: entreprise */ t`Entreprise`)}
                    helperText={
                      errors.company &&
                      i18n._(
                        /* i18n: error email company */ t`Ce champ est requis`
                      )
                    }
                    error={!!errors.company}
                    {...register('company', {
                      maxLength: 80,
                      required: true,
                    })}
                  />
                </Grid>
                <Grid item xs={12} md={6} padding={2} justifyContent="center">
                  <TextField
                    variant="outlined"
                    fullWidth
                    color="secondary"
                    type="text"
                    placeholder={i18n._(
                      /* i18n: form>position in company */ t`Position`
                    )}
                    name="Position"
                    label="Position"
                    error={!!errors.position}
                    helperText={
                      errors.company &&
                      i18n._(
                        /* i18n: error email position */ t`Ce champ est requis`
                      )
                    }
                    {...register('position', {
                      maxLength: 50,
                      required: true,
                    })}
                  />
                </Grid>
                <Grid item xs={12} md={6} padding={2} justifyContent="center">
                  <TextField
                    variant="outlined"
                    fullWidth
                    name="mobileNumber"
                    color="secondary"
                    label={i18n._(
                      /* i18n: numero de téléphone */ t`Numero de téléphone`
                    )}
                    placeholder={i18n._(
                      /* i18n: numero de téléphone */ t`Numero de téléphone`
                    )}
                    helperText={
                      !!errors.mobileNumber &&
                      i18n._(
                        /* i18n: error email msg */ t`Saisir un numero valide`
                      )
                    }
                    error={!!errors.mobileNumber}
                    {...register('mobileNumber', {
                      maxLength: 12,
                      required: true,
                    })}
                  />
                </Grid>
                <Grid item xs={12} md={6} padding={2} justifyContent="center">
                  <TextField
                    error={!!errors.email}
                    variant="outlined"
                    fullWidth
                    color="secondary"
                    placeholder="email"
                    label="email"
                    helperText={
                      !!errors.email &&
                      i18n._(
                        /* i18n: error email msg */ t`Saisir une adresse mail valide`
                      )
                    }
                    {...register('email', {
                      required: true,
                    })}
                  />
                </Grid>
                <Grid item xs={12} padding={1} justifyContent="center">
                  <TextField
                    sx={{
                      color: theme.palette.secondary.main,
                      padding: theme.spacing(1),
                    }}
                    variant="outlined"
                    fullWidth
                    multiline
                    color="secondary"
                    inputProps={{
                      style: {
                        minHeight: '200px',
                      },
                    }}
                    error={!!errors.message}
                    placeholder={i18n._(
                      /* i18n: votre message */ t`votre message`
                    )}
                    helperText={
                      !!errors.message &&
                      i18n._(
                        /* i18n: error email msg */ t`Saisir votre message`
                      )
                    }
                    {...register('message', {
                      required: true,
                    })}
                  />
                </Grid>
                <Stack width="100%" padding={2}>
                  <FormControlLabel
                    sx={{ '*': { textAlign: 'justify' } }}
                    control={<Checkbox />}
                    label={i18n._(
                      /* i18n: rgpd j'accepte que mes données soient enregistrées par SAPEM et utilisées à des fins d'analyses et de démarchage commerciale*/ t`j'accepte que mes données soient enregistrées par SAPEM et utilisées à des fins d'analyses et de démarchage commerciale`
                    )}
                    {...register('rgpd', {
                      required: true,
                    })}
                  />
                </Stack>
                <Stack padding={2} justifyContent="center" direction="column">
                  <Button
                    disabled={isSending}
                    color="primary"
                    onClick={onSubmit}
                    variant="outlined"
                    size="large"
                  >
                    {i18n._(/* i18n: soumettre */ t`soumettre`)}
                  </Button>
                </Stack>
              </Grid>
            </form>
          </Grid>
          <Grid item columns={{ xs: 4, sm: 8, md: 12 }} xs={12} md={6}>
            <CardHeader
              sx={{
                textAlign: 'center',
                borderBottom: `${theme.palette.primary.main} solid 2px`,
                width: '50%',
                margin: 'auto',
              }}
              title={i18n._(/* i18n: Nous retrouvez */ t`Nous retrouvez`)}
            />
            <CardContent>
              <Stack
                width="100%"
                display="flex"
                justifyContent="center"
                paddingY={2}
              >
                <Typography variant="h6" sx={{ fontStyle: 'italic' }}>
                  {i18n._(/* i18n:en ligne */ t`En ligne`)}
                </Typography>
                <Divider sx={{ marginBottom: 2 }} />
                <SocialMedias whiteIcons={false} urls={SOCIAL_MEDIAS_LINKS} />
              </Stack>

              <Stack
                width="100%"
                display="flex"
                flexDirection="column"
                justifyContent="center"
                paddingY={2}
              >
                <Typography variant="h6" sx={{ fontStyle: 'italic' }}>
                  {i18n._(/* i18n:sur site */ t`Sur Site`)}
                </Typography>
                <Divider sx={{ marginBottom: 2 }} />

                <div
                  style={{
                    position: 'relative',
                    overflow: 'hidden',
                    width: '100%',
                    minHeight: '200px',
                    aspectRatio: '4/3',
                  }}
                >
                  <Iframe
                    companyName={COMPANY_NAME}
                    googleMapLocation={GOOGLE_MAP_LOCATION}
                  />
                </div>
              </Stack>
            </CardContent>
          </Grid>
        </Grid>
      </Card>
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async (ctx) => {
  i18n.activate(ctx.locale);
  const translation = await loadTranslation(ctx.locale);

  return { props: { translation } };
};

const sendMail = async function (data) {
  try {
    await emailjs.send(
      process.env.NEXT_PUBLIC_EMAIL_JS_SERVICE,
      process.env.NEXT_PUBLIC_EMAIL_JS_TEMPLATE,
      data,
      process.env.NEXT_PUBLIC_EMAIL_JS_USER
    );
    return { status: 200 };
  } catch (error) {
    console.log(error);
    return { status: 500 };
  }
};
