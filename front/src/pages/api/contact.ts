// https://stackoverflow.com/questions/72530276/nodemailergoogle-disabled-the-less-secure-app-option-on-google-accounts-i-woul

import { i18n } from '@lingui/core'
import { t } from '@lingui/macro'

export default async function async(req, res) {
  console.log('hoho')
  // eslint-disable-next-line @typescript-eslint/no-var-requires

  const nodemailer = require('nodemailer')
  const transporter = nodemailer.createTransport({
    port: 465,
    host: 'smtp.gmail.com',
    auth: {
      user: 'alexis.archer44@gmail.com',
      pass: 'aunvgmkjufduffga',
    },
    secure: true,
  })
  transporter.verify(function (error, _) {
    if (error) {
      console.log(error)
    } else {
      console.log('Server is ready to take our messages')
    }
  })

  const mailData = {
    from: 'alexis.archer44@gmail.com',
    to: 'archer.alexis@hotmail.fr',
    subject: `Message From toto`,
    html: JSON.stringify(req.body),
  }

  await transporter.sendMail(mailData, function (err, info) {
    if (err) {
      res.send(
        i18n._(
          /* i18n: une erreur est survenue */ t`une erreur est survenue merci de réessayer plus tard`
        )
      )
    } else {
      try {
        res.status(200)
      } catch (error) {
        res.send(
          i18n._(
            /* i18n: une erreur est survenue */ t`une erreur est survenue merci de réessayer plus tard`
          )
        )
      }
    }
  })


}
