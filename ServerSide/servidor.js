const func = require('express'); const app = func();
const db = require('./dtb');
const CORS = require('cors');
const controler = require('./EntryExit');

app.use(CORS());
app.use(func.json());


app.listen(5174, function () {
    console.log(db);
});
app.get('/labda', controler.banana);
app.post('/result', controler.result);
app.post('/login', controler.login)