// https://stackoverflow.com/questions/72530276/nodemailergoogle-disabled-the-less-secure-app-option-on-google-accounts-i-woul

import { MAILING_DESTINATARY } from '../../config';
import emailjs                 from '@emailjs/browser';

const sendMail = async function (req, res) {
  console.log('hoh')
  const mailData = {
    from: 'alexis.archer44@gmail.com',
    to: MAILING_DESTINATARY,
    subject: `Message From toto`,
    ...req.body
  }
  try {
    console.log('aaa', process.env, process.env.NEXT_PUBLIC_EMAIL_JS_SERVICE,
      process.env.NEXT_PUBLIC_EMAIL_JS_TEMPLATE, process.env.NEXT_PUBLIC_EMAIL_JS_USER)
    await emailjs.send(
      "service_egxauh5",
      "template_i1gv91d",
      mailData, // the values in your EmailJS template
      "cqX8SOqjxiQ7jR63E",
      // process.env.NEXT_PUBLIC_EMAIL_JS_USER
    )
    return res.status(200)
  } catch (error) {
    console.log(error)
    return res.status(500)
  }

}


export default sendMail

//export default async function async(req, res) {
//   console.log('hoho')
//   // eslint-disable-next-line @typescript-eslint/no-var-requires

//   const nodemailer = require('nodemailer')
//   const transporter = nodemailer.createTransport({
//     port: 465,
//     host: 'smtp.gmail.com',
//     auth: {
//       user: 'alexis.archer44@gmail.com',
//       pass: 'aunvgmkjufduffga',
//     },
//     secure: true,
//   })
//   transporter.verify(function (error, _) {
//     if (error) {
//       console.log(error)
//     } else {
//       console.log('Server is ready to take our messages')
//     }
//   })



//   await transporter.sendMail(mailData, function (err, info) {
//     if (err) {
//       res.send(
//         i18n._(
//           /* i18n: une erreur est survenue */ t`une erreur est survenue merci de réessayer plus tard`
//         )
//       )
//     } else {
//       try {
//         res.status(200)
//       } catch (error) {
//         res.send(
//           i18n._(
//             /* i18n: une erreur est survenue */ t`une erreur est survenue merci de réessayer plus tard`
//           )
//         )
//       }
//     }
//   })


// }
