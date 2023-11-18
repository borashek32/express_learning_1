import express from "express"
import router from "./routers/index"

const app = express()
app.use(express.json())

const PORT = 3000

app.get('/ping', (_req, res) => {
  console.log('express works');
  res.send('pong')
})

app.use('/api/posts', router)

app.listen(PORT, () => {
  console.log(`server is listening ${PORT} date - ${new Date().toLocaleDateString()}`);
  
})