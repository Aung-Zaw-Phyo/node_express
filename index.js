const express = require('express')
const app = express()
const port = 3000
const UserRouter = require('./routes/UserRouter')
const ProfileRouter = require('./routes/ProfileRouter')

app.set('view engine', 'pug')
app.set('views', './views')

// app.use(express.static('public'))

app.get('/', (req, res) => {
    res.render('index', {title: 'Home', message: 'This is home page.'})
})

app.get('/avatar', (req, res) => {
    console.log(__dirname)
    res.sendFile(`${__dirname}/public/always.mp4`)
})

app.use('/profile', ProfileRouter)

app.use('/user', UserRouter)

app.listen(port, () => {
    console.log(`Server is running on port ${port}.`)
})



// views/profile.pug
// html
//   head
//     title= title
//   body
//     h1= message
// app.set("views", "./views");
// app.set("view engine", "pug");
// app.get("/profile", (req, res) => {
//   // connect to database and get the data
//   res.render("profile", { title: "Hey", message: "User1 profile" });
// });
// app.get("/avatar", (req, res) => {
//   // fetch the avatar image from another api
//   res.sendFile(`${__dirname}/octopus.png`);
// });