var express = require('express')
var app = express()
var request = require('request')
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

  // var response = {
  //   id: 5,
  //   name: 'huang',
  //   age: 12
  // }

  /* 返回的数据response即为客户端接收的res.data，且数据类型不变，response可为object、string、Number等  */
  // res.send(response)

  // 作用同res.send()
  res.json({
    // 加不加单引号都可以，也可以把一个对象代替整个{}
    'id': req.query.id || 15,
    name: req.query.name || 'Libin',
    'age': 12
  })

  // res.end(JSON.stringify(response)) /* 客户端接收的数据是对象类型 */
})

app.post('/post', (req, res) => {
  console.log(typeof req.body, req.body.age)

  var response = {
    q: 1
  }
  res.json(response)
})
app.get('/requestApi', (req, res) => {
  console.log('test')
  request.post({url: 'http://route.showapi.com/1467-1',
    form: {
    }}, function (error, response, body) {
    console.log(error, response, body)
    res.send(response)
  })
})

app.listen(8888, function () {
  console.log('Your app is running at http://127.0.0.1:8888')
})
