import express from 'express'


const app = express()
const port = 3000


app.get('/', (req, res) => {
  res.json("Hello from the server")
})

app.listen(port, () => {
  console.log(`The server is live on port ${port}`)
})
