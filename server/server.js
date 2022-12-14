const express = require("express")
const cors = require("cors")
const app = express()
const { getHTML, getNews, getPicture } = require('./controller')




app.use(cors())
app.use(express.json())
app.use(express.static('client'))

app.get('/', getHTML)
app.get('/api/news', getNews)
app.post('/api/pets', getPicture)




const port = process.env.PORT || 4000
app.listen(port,console.log("Server running on 4000"))