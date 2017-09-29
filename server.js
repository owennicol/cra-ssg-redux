const { createServer } = require('http')
const express = require('express')
const morgan = require('morgan')
const compression = require('compression')
const path = require('path')
const normalizePort = port => parseInt(port, 10)

const app = express()
const dev = app.get('env') !== 'production'

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

app.listen(PORT, err => {
  if (err) throw Error(err)
  console.log('server running')
})
