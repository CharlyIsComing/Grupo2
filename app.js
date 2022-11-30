const express = require("express");
const app = express();
const path = require("path"); // une directorios
const mainRoutes = require("./routes/mainRoutes.js");
//const userRoutes = require("./routes/userRoutes.js");
const PORT = process.env.PORT || 3000;

app.use(express.static(path.resolve(__dirname, "public")));

//app.get('/', (req, res) => {
//res.sendFile(path.resolve(__dirname, 'views/index.html'));
//});
app.use('/', mainRoutes);
//app.use('/users', userRoutes);

app.get('/register', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'views/register.html'));
});

app.get('/login', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'views/login.html'));
});

app.listen(3000, () => {
  console.log('listening on http://localhost:3000');
});
