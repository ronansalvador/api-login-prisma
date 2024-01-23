import 'dotenv/config'
import { app } from '.'

const PORT: number = Number(process.env.PORT) || 4000

app.listen(PORT, (): void => {
  console.log(`Api rodando na porta ${PORT}`)
})
