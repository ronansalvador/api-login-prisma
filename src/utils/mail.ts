const nodemailer = require('nodemailer')
require('dotenv').config()

export const enviarNotificacaoEmail = async (mensagem: string) => {
  // Configurações do transporte de e-mail (usando Gmail como exemplo)

  // let transporter = nodemailer.createTransport({
  //   service: 'gmail',
  //   auth: {
  //     type: 'OAuth2',
  //     user: process.env.MAIL_USERNAME,
  //     pass: process.env.MAIL_PASSWORD,
  //     clientId: process.env.OAUTH_CLIENTID,
  //     clientSecret: process.env.OAUTH_CLIENT_SECRET,
  //     refreshToken: process.env.OAUTH_REFRESH_TOKEN,
  //   },
  // })
  // const transporter = nodemailer.createTransport({
  //   host: process.env.SMTP,
  //   port: process.env.SMTP_PORT,
  //   secure: true,
  //   auth: {
  //     user: 'ronanfs89@gmail.com',
  //     pass: process.env.PASSWORD_APP,
  //   },
  // })

  const { SMTP, SMTP_PORT, MAIL_USERNAME, PASSWORD_APP } = process.env

  const transporter = nodemailer.createTransport({
    host: SMTP,
    port: SMTP_PORT,
    secure: false,
    auth: {
      user: MAIL_USERNAME,
      pass: PASSWORD_APP,
    },
    tls: {
      rejectUnauthorized: false,
    },
  })

  // Detalhes do e-mail
  const mailOptions = {
    from: 'ronanfs89@gmail.com',
    to: 'ronansalvador@yahoo.com.br',
    subject: 'TESTE GMAIL',
    text: mensagem,
  }

  try {
    // Enviar e-mail
    await transporter.sendMail(mailOptions)
    console.log('Notificação por e-mail enviada com sucesso')
  } catch (error) {
    console.error('Erro ao enviar notificação por e-mail:', error)
  }
}
