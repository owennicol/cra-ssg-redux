const { createServer } = require('http')
const express = require('express')
const morgan = require('morgan')
const compression = require('compression')
const path = require('path')
const normalizePort = port => parseInt(port, 10)

const app = express()
const dev = app.get('env') !== 'production'

console.log('process.env.PORT:', process.env.PORT)

const PORT = normalizePort(process.env.PORT || 4000)

if (!dev) {
  app.disable('x-powered-by')
  app.use(compression())
  app.use(morgan('common'))

  app.use(express.static(path.resolve(__dirname, 'build')))

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'build', 'index.html'))
  })
}

if (dev) {
  app.use(morgan('dev'))
}

const server = createServer(app)

server.listen(PORT, err => {
  if (err) throw err
  console.log('Server started')
})
