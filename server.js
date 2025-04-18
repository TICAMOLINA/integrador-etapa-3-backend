import express from 'express'

const app = express()
const PORT = 8080

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(PORT, (err) => {
    if (err) throw new Error('No se pudo levantar el servidor')
  console.log(`Servidor funcionando en: http://localhost:${PORT}`)
})