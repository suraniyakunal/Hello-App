import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'


const app = express()
const port = 3000

//MIDDLEWARE
app.use(express.json())
app.use(cors())
dotenv.config()

app.get('/', (req, res) => {

  const user = {
    name: "kunal",
    age: 23
  }

  res.json(user)
})



app.listen(port, () => {
  console.log(`The server is live on port ${port}`)
})
