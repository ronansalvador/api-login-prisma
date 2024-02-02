const nodemailer = require('nodemailer')
require('dotenv').config()

export const enviarNotificacaoEmail = async (mensagem: string) => {
  // Configurações do transporte de e-mail (usando Gmail como exemplo)
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'ronanfs89@gmail.com',
      pass: process.env.PASSWORD_APP,
    },
  })

  // Detalhes do e-mail
  const mailOptions = {
    from: 'ronanfs89@gmail.com',
    to: 'ronansalvador@yahoo.com.br',
    subject: 'Comanda Cadastrada',
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
