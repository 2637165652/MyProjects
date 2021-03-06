var express = require('express')
var app = express()

// 设置跨域访问
app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild')
  res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS')

  if (req.method === 'OPTIONS') {
    res.send(200) /* 让options请求快速返回 */
  } else {
    next()
  }
})

app.get('/', function (req, res) {
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

app.listen(8888, function () {
  console.log('Your app is running at http://127.0.0.1:8888')
})
