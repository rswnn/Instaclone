const express = require('express')
const bodyParser = require('body-parser')
require('express-group-routes')
const jwt = require('jsonwebtoken')
const expressJwt = require('express-jwt')

const db = require('./Connection/database')

const app = express()
app.use(bodyParser.json())

app.group('/api/v1', (router) => {
    router.get('/posts', expressJwt({secret: 'shhhhhhhhh'}), (req, res) => {
        db.query(`SELECT posts.id,posts.url, posts.quotes,posts.location, users.name FROM posts INNER JOIN users on posts.by_id = users.id ORDER BY posts.id DESC`, (err, rows, field) => {
            if (err) throw err;

            res.send(rows)
            console.log('success')
        })
    })

    router.post('/post', expressJwt({secret: 'shhhhhhhhh'}), (req, res) => {
        const location = req.body.location
        const url = req.body.url
        const quotes = req.body.quotes

        const token = req.headers.authorization.split(' ')[1]
        const decode = jwt.decode(token, 'shhhhhhhhh')
        const by_id = decode.id

        db.query(`INSERT INTO posts (location, url, quotes, by_id) values ("${location}", "${url}", "${quotes}", "${by_id}")`, (err, rows, fields) => {
            if (err) throw err

            res.send(rows)
            console.log('data inserted')
        })
    })

    router.post('/login', (req, res) => {
        const email = req.body.email
        const password = req.body.password

        db.query(`SELECT * FROM users WHERE email="${email}" AND password="${password}"`, (err, rows, field) => {
            if(err) throw err
            
            if(rows.length > 0) {
                const id = rows[0].id
                const token = jwt.sign({email: email, id: id}, 'shhhhhhhhh', {expiresIn: '1h'} )
                    res.send({token});
            } else {
                res.send(401)
            }
        })
    })

    router.delete('/delete/:id', (req, res) => {
        const id = req.params.id
        let sql = `DELETE FROM posts WHERE id = ?`
        db.query(sql, id, (err, rows, fields) => {
            if (err) throw err

            res.send(rows)
            console.log('the item deleted')
        })
    })

})

app.listen(3000, () => {
    console.log('app started !')
})