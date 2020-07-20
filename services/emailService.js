// using Twilio SendGrid's v3 Node.js Library
// https://github.com/sendgrid/sendgrid-nodejs

const sgMail = require('@sendgrid/mail')

async function EmailService (context) {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY)

  const msg = {
    to: process.env.EMAIL_TO,
    from: process.env.EMAIL_FROM,
    subject: `${context.subject} from ${context.name + ', ' + context.email}`,
    templateId: 'd-1f22d59e30884ddbb54a6bb58e82c7f5',
    dynamic_template_data: {
      message: context.message
    }
  }

    const payload = await sgMail.send(msg)
  
    console.log('sucessful email send')
    return payload
}

module.exports = EmailService
