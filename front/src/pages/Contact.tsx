import {
  Alert,
  AlertTitle,
  Button,
  Card,
  CardHeader,
  Checkbox,
  Container,
  FormControlLabel,
  Grid,
  Stack,
  TextField,
  useTheme,
} from '@mui/material'
import { I18n, i18n } from '@lingui/core'
import React, { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify'
import { defineMessage, t } from '@lingui/macro'

import { CheckBox } from '@mui/icons-material'
import { GetStaticProps } from 'next'
import Layout from '../components/layout'
import axios from 'axios'
import loadTranslation from '../assets/utils/loadTranslation'
import sendMail from './api/contact'
import { useForm } from 'react-hook-form'

export default function Contact() {
  const {
    register,
    handleSubmit,
    trigger,
    formState: { errors, ...otherProps },
  } = useForm()

  const [isSending, setIsSending] = useState(false)

  const onSubmit = async (e) => {
    e.preventDefault()
    setIsSending(true)
    // trigger=> scan field and process with validation handlers
    await trigger()
    await handleSubmit(async (data) => {
      const successMsg = defineMessage({
        message: 'Votre message a bien été transmis',
      })
      const errorMsg = defineMessage({
        message: 'Une erreur est survenue. Veuillez réessayer ultérieurement',
      })

      await sendMail({ body: data }, {})
        .then((x) =>
          x.status === 200
            ? toast.success(i18n._(successMsg))
            : toast.error(i18n._(errorMsg))
        )
        .catch(() => toast.error(i18n._(errorMsg)))

      // return await axios
      //   .post('api/contact', data)
      //   .then((x) =>
      //     x.status === 200
      //       ? toast.success(i18n._(successMsg))
      //       : toast.error(i18n._(errorMsg))
      //   )
      //   .catch(() => toast.error(i18n._(errorMsg)))
    })(e)
    setIsSending(false)
  }

  const theme = useTheme()
  return (
    <Layout title={i18n._(/* i18n: Contact */ t`Contact`)}>
      <Stack
        padding={2}
        paddingY={5}
        className="backImage"
        sx={{ backgroundImage: 'url("/medias/bureau.jpeg")' }}
      >
        <Container maxWidth="lg">
          <Card elevation={8}>
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
                padding={2}
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
          </Card>
        </Container>
      </Stack>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async (ctx) => {
  i18n.activate(ctx.locale)
  const translation = await loadTranslation(ctx.locale)

  return { props: { translation } }
}
