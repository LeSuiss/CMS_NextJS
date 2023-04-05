// https://stackoverflow.com/questions/72530276/nodemailergoogle-disabled-the-less-secure-app-option-on-google-accounts-i-woul

import sendgrid from "@sendgrid/mail";

const sendMail = async function (req, res) {
  console.log(req, res)
  sendgrid.setApiKey(process.env.SENDGRID_API_KEY);
  const mailData = {
    from: 'alexis.archer44@gmail.com',
    to: 'archer.alexis@hotmail.fr',
    subject: `Message From toto`,
    html: JSON.stringify(req.body),
  }
  try {
    await sendgrid.send(mailData);
    // return { success: true }
  } catch (error) {
    return res.status(error.statusCode || 500).json({ error: error.message });
  }

  return res.status(200).json({ error: "" });
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
