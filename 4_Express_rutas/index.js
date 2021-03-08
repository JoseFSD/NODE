const express = require('express');
const app = express();
const bodyParser = require('body-parser')
const port = 3000
const indexRouter = require('./routes/indexRoute')
const userRouter = require('./routes/userRoute')
const adminRouter = require('./routes/adminRoute')

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended:false}))
    // parse application/json
app.use(bodyParser.json())

//localhost:3000 + '/'
app.use('/', indexRouter)
//localhost:3000 + '/user'
app.use('/user', userRouter)
//localhost:3000 + '/admin'
app.use('/admin', adminRouter)

app.listen(port, () => {
  console.log('Aplicación ejemplo, escuchando el puerto 3000!')
})