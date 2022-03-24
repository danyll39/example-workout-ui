const express = require('express')
const bodyParser = require('body-parser')
const { getAllWorkouts, getWorkOutsByBody, saveNewWorkout } = require('./controllers/workOuts')
const app = express()
const path = require('path')
const cors = require('cors')




app.use(express.static('client/build'))

app.set('view engine', 'pug')


app.use(cors())


app.get('/api/workOuts', getAllWorkouts)
app.get('/api/workOuts/:id', getWorkOutsByBody)

app.post('/api/workOuts', bodyParser.json(), saveNewWorkout)

app.get('/', (request, response) => {
  return response.render('index')
})

app.all('*', (request, response) => response.sendFile(path.resolve(__dirname, 'client/build', 'index.html')))


app.listen(1338, () => {
  console.log('lisenting?') // eslint-disable-line no-console 
})
