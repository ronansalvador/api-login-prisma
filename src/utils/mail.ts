const nodemailer = require('nodemailer')
require('dotenv').config()

export const enviarNotificacaoEmail = async (mensagem: string) => {
  // Configurações do transporte de e-mail (usando Gmail como exemplo)
  // const transporter = nodemailer.createTransport({
  //   host: process.env.SMTP,
  //   port: process.env.SMTP_PORT,
  //   secure: true,
  //   auth: {
  //     user: 'ronanfs89@gmail.com',
  //     pass: process.env.PASSWORD_APP,
  //   },
  // })

  const transporter = nodemailer.createTransport({
    host: 'smtp.ethereal.email',
    port: 587,
    auth: {
      user: 'frederique28@ethereal.email',
      pass: '6EbWNpr8VCgQByRfw1',
    },
  })

  // Detalhes do e-mail
  const mailOptions = {
    from: 'frederique28@ethereal.email',
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
