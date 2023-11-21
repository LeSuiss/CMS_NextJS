// https://stackoverflow.com/questions/72530276/nodemailergoogle-disabled-the-less-secure-app-option-on-google-accounts-i-woul

import { MAILING_DESTINATARY } from '../../config';
import emailjs from '@emailjs/browser';

const sendMail = async function (req, res) {
  const mailData = {
    from: 'maelle1k100@gmail.com',
    to: MAILING_DESTINATARY,
    subject: `Message From toto`,
    ...req.body,
  };
  try {
    await emailjs.send(
      'service_egxauh5',
      'template_i1gv91d',
      mailData, // the values in your EmailJS template
      process.env.NEXT_PUBLIC_EMAIL_JS_USER
    );
    return res.status(200);
  } catch (error) {
    console.log(error);
    return res.status(500);
  }
};

export default sendMail;
