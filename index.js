const express = require('express')
const app = express()
const port = 7280

app.get('/', (req, res) => res.send('Hello World!'))

app.get('/:username', (req, res) => {

    console.log(req);
    console.log(req.body);
//   const user = users.find(
//     user => user.username === req.params.username
//   )
//   if (!user) {
//     return res.sendStatus(404)
//   }

//   return res.send(`${user.name}, Hello World!`)
});

app.listen(port, () => console.log('Server ON!'))