const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser')
const db = require('../../Connection/database')

const app = express()
app.use(bodyParser.json())

router.get('/', (req, res) => {
    db.query(`SELECT posts.id,posts.url, posts.quotes,posts.location, users.name FROM posts INNER JOIN users on posts.by_id = users.id ORDER BY posts.id DESC`, (err, rows, field) => {
        if (err) throw err;

        res.send(rows)
        console.log('success')
    })
})
router.get('/:id', (req, res) => {

})
router.post('/', (req, res) => {
    res.send('post')
})
router.post('/', (req, res) => {
    const email = req.body.email
    const password = req.body.password

    db.connection.query(`SELECT * FROM users WHERE email="${email}" AND password="${password}"`, (err, rows, field) => {
        if (err) throw err
        if (rows.length > 0) {
            const id = rows[0].id
            const token = jwt.sign({ email: email, id: id }, 'shhhhhhhhh', { expiresIn: '1h' })
            res.send({ token });
        } else {
            res.send(401)
        }
    })
})
router.put('/:id', (req, res) => {
    res.send('post')
})
router.delete('/:id', (req, res) => {
    res.send('post')
})
module.exports = router;