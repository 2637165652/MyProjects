var express = require('express')
var app = express()

var bodyParser = require('body-parser')
// var multer = require('multer')
// var upload = multer() // for parsing multipart/form-data 上传文件
app.use(bodyParser.json()) // for parsing application/json
app.use(bodyParser.urlencoded({extended: true})) // for parsing application/x-www-form-urlencoded

// 设置跨域访问
app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild')
  res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS')

  if (req.method === 'OPTIONS') {
    res.sendStatus(200) /* 让options请求快速返回 */
  } else {
    next()
  }
})

app.get('/user', function (req, res) {
  console.log(req.query)

  res.json({
    // 加不加单引号都可以，也可以把一个对象代替整个{}
    'id': req.query.id || '',
    name: req.query.name || '',
    age: req.query.age || ''
  })

  // res.end(JSON.stringify(response)) /* 客户端接收的数据是对象类型 */
})

app.post('/login', (req, res) => {
  console.log(typeof req.body, req.body)

  var response = req.body
  res.json(response)
})

app.listen(8888, function () {
  console.log('Your app is running at http://127.0.0.1:8888')
})
