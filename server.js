import express from 'express'
import 'dotenv/config'
import path from 'node:path'
import cors from 'cors'
import mongoDConnection from './utils/connection.js'
import routerProducts from './routers/products.router.js'
import routerUsers from './routers/users.router.js'
import routerUpload from './routers/uploads.router.js'

// ! CONSTANTES
const app = express()
const PORT = 8080
const URI_DB = process.env.URI_REMOTA
const URL_FRONT = process.env.URL_FRONTEND_CORS

// ! CONFIGURACIONES
const corsConfig = {
  origin: URL_FRONT // URL completa de netlify
}

// ! MIDDLEWARES
app.use(express.json())
app.use(express.static(path.join('public')))
app.use(cors(corsConfig))

// ! RUTAS
app.use('/api/v1/productos', routerProducts)
app.use('/api/v1/usuarios', routerUsers)
app.use('/api/v1/uploads', routerUpload)

app.get('/', (req, res) => {
  res.send('Hello World!')
})


// ! ARRANQUE DEL SERVIDOR
app.listen(PORT, (err) => {
    if (err) throw new Error('No se pudo levantar el servidor')
  console.log(`Servidor funcionando en: http://localhost:${PORT}`)
    mongoDConnection(URI_DB)
})