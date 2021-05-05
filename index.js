const express = require('express')
const path = require('path')
const mainRoutes = require('./routes/mainRouter')
const writeRoutes = require('./routes/writeRouter')
const viewRoutes = require('./routes/viewRouter')


const app = express();
app.set('view engine', 'ejs')
app.set('views', 'views')

app.use(express.urlencoded({extended: false}))
app.use(express.static(path.join(__dirname, 'public')))

app.use(mainRoutes)
app.use(writeRoutes)
app.use(viewRoutes)

app.use((req, res, next) => {
    res.status(404)
    res.end('<h1>404 Error</h1>')
})

const PORT = process.env.PORT || 8000
app.listen(PORT, () => console.log(`Server has started on port ${PORT}....`))