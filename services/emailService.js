// using Twilio SendGrid's v3 Node.js Library
// https://github.com/sendgrid/sendgrid-nodejs

const sgMail = require('@sendgrid/mail')

async function EmailService (context) {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY)

  const msg = {
    to: process.env.EMAIL_TO,
    from: process.env.EMAIL_FROM,
    subject: context.subject,
    // text: 'and easy to do anywhere, even with Node.js',
    html: `
    <br>
    <strong>Sender: ${context.userName}</strong>
    <strong>Sender Email: ${context.email}</strong>
    <br>
    <br>
    ${context.message}
    `
  }

    const payload = await sgMail.send(msg)
  
    console.log('sucessful email send')
    return payload
}

module.exports = EmailService
