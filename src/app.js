const express = require('express')
const path = require('path')
const hbs = require('hbs')
const app = express()
const port = process.env.PORT || 3000

const viewsDir = path.join(__dirname, '../templates/views')
const partialsDir = path.join(__dirname, '../templates/partials')
const staticAssetesDir = path.join(__dirname, "../public")

app.set('view engine', 'hbs')
app.set('views', viewsDir)
hbs.registerPartials(partialsDir)
app.use(express.static(staticAssetesDir))

app.get('', (req, res) => {
    res.render('index')
})

app.listen(port, () => {
    console.log("server listening on port " + port)
})