const express = require('express');
const app = express();
const port = process.env.PORT || 5000;

const cors = require('cors')

const users = [
    { id: 1, name: 'Alice', email: 'alice@example.com' },
    { id: 2, name: 'Bob', email: 'bob@example.com' },
    { id: 3, name: 'Charlie', email: 'charlie@example.com' },
    { id: 4, name: 'Dave', email: 'dave@example.com' },
    { id: 5, name: 'Eve', email: 'eve@example.com' }
  ]

  app.use(cors())
  app.use(express.json());

app.get('/', (req, res) => {
    res.send('user management server is running');
})

app.get('/users', (req, res)=>{
    res.send(users)
})

app.post('/users', (req, res) => {
    console.log('post api hitting')
    console.log(req.body)
    const newUser = req.body;
    newUser.id = users.length + 1;
    users.push(newUser);
    res.send(newUser)

})




app.listen(port, ()=>{
    console.log(`server is running on port ${port}`)
})