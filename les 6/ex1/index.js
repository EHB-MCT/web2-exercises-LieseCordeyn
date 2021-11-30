const express = require('express')
const app = express()
const port = 3000

app.use(express.static('public'))


app.get('/', (req, res) => {
    res.redirect('/info.html')
});

app.get('/randomtext', (req, res) => {
    res.send('Hi')
});

app.get('/data', (req, res) => {
    let exampleData = {
        name: 'Liese',
        age: 19,
        cats: ["Kyra", "Zouki", "Kody", "Joske", "Koetje", "Princess", "Pluis", "Fritz", "Sid", "Lalu", ]
    }
    res.send(exampleData)
});


app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
});