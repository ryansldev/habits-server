import Fastify from 'fastify'
import cors from '@fastify/cors'

const app = Fastify()

app.register(cors)

app.get('/hello', () => {
  return 'Hello NLW'
})

app.listen({
  port: Number(process.env.PORT),
  host: process.env.HOST,
}).then(() => console.log('HTTP Server running!'))