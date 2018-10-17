var express = require('express');
var app = express();

//***********указываем какой движок используем для шаблонизатора 
app.set('view engine', 'ejs');

// *************рендер в браузере при запуске сервера
// app.get('/', function(req, res){ 
//     res.send('200'); // 
// })
// *************рендер в браузере index.html из корневой папки
// app.get('/', function(req, res){ 
// res.sendFile(__dirname +'/index.html'); // 
// })
//*************рендер в браузере go.ejs из папки views
app.get('/', function(req, res){ 
 res.render('go',{newTitle: "ShopTR" }); 
 })

// запуск сервера на порту 3000
app.listen(3000, function() {
    console.log('Server started')
})