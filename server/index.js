const express = require('express')
//const { ConsoleReporter } = require('jasmine')
//const { DB_URI } = require('./config/dev')
const mongoose =require('mongoose')
const config = require('./config/dev')
const SampleDb = require('./sample_db')
//const { textChangeRangeIsUnchanged } = require('typescript')

const productRoutes = require('./routes/products')

mongoose.connect(config.DB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(
    () => {
        const sampleDb = new SampleDb()
        sampleDb.initDb()
    }
)

const app =express()

app.get('/api/v1/products',productRoutes)
    
const PORT=process.env.PORT || '3001'

app.listen(PORT , function() {
        console.log( 'I am running!')
})

//mongodb+srv://test:<password>@cluster0.2qapi.mongodb.net/<dbname>?retryWrites=true&w=majority