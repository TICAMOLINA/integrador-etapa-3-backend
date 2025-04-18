import express from 'express'
import 'dotenv/config'
import mongoDConnection from './utils/connection.js'
import routerProducts from './routers/products.router.js'

// ! CONSTANTES
const app = express()
const PORT = 8080
const URI_DB = process.env.URI_LOCAL

// ! CONFIGURACIONES


// ! MIDDLEWARES
app.use(express.json())


// ! RUTAS
app.use('/api/v1/productos', routerProducts)
app.get('/', (req, res) => {
  res.send('Hello World!')
})


// ! ARRANQUE DEL SERVIDOR
app.listen(PORT, (err) => {
    if (err) throw new Error('No se pudo levantar el servidor')
  console.log(`Servidor funcionando en: http://localhost:${PORT}`)
    mongoDConnection(URI_DB)
})