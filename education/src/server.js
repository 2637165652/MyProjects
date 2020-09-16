var express = require('express')
var app = express()
var mysql = require('mysql')
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

// 需要修改 user和password 为当前电脑数据库的用户名和密码
var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root', // 需修改为当前电脑数据库的用户名
  password: '123456', // 需修改为当前电脑数据库的密码
  port: '3306',
  database: 'familyeducationsystem'
})
// 连接数据库
connection.connect()

app.post('/test', function (req, res) {
  console.log(req.body)
  var sql = 'select * from record_uncontacted where studentsex="女" order by releaseDate desc' // 降序，最新发布的显示在上面
  connection.query(sql, function (err, result) {
    if (err) {
      console.log('[查询出错] - ', err.message)
    } else {
      console.log('查询成功')
      var response = result
      res.end(JSON.stringify(response))
    }
  })
  // 作用同res.send()
})

app.get('/family_education', (req, res) => {
  console.log(req.query)
  var sql = 'select * from record_uncontacted where studentsex="女" order by releaseDate desc' // 降序，最新发布的显示在上面
  connection.query(sql, function (err, result) {
    if (err) {
      console.log('[查询出错] - ', err.message)
    } else {
      console.log('查询成功')
      var response = {
        code: 100,
        pageHolder: {
          count: result.length,
          list: result
        }
      }
      res.send(response)
    }
  })
})

app.listen(8888, function () {
  console.log('Your app is running at http://127.0.0.1:8888')
})
