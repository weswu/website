/**
 * wes
 * 2021-1-4
 * 这个模块里面封装了所有对数据库的常用操作
 */

var MongoClient = require('mongodb').MongoClient;

// 数据库地址
const url = "mongodb+srv://root:20201113@wes.z45uy.mongodb.net/website";

//不管数据库什么操作，都是先连接数据库，所以我们可以把连接数据库 ?retryWrites=true&w=majority
//封装成为内部函数
function _connectDB(callback) {
  //连接数据库
  MongoClient.connect(url, { useNewUrlParser: true, useUnifiedTopology: true }, (err, db) => {
    if (err) {
      callback(err, null);
      return;
    }
    var dbase = db.db('website')
    callback(err, dbase);
  })
}

//插入数据
exports.insertOne = function (collectionName, json, callback) {
  _connectDB(function (err, db) {
      db.collection(collectionName).insertOne(json, function (err, result) {
          callback(err, result);
          db.close(); //关闭数据库
      })
  })
};

//查找数据，找到所有数据。args是个对象{"size":10,"page":1}
exports.find = function (collectionName, json, C, D) {
  var result = [];    //结果数组
  if (arguments.length == 3) {
      //那么参数C就是callback，参数D没有传。
      var callback = C;
      var skipnumber = 0;
      //数目限制
      var limit = 0;
  } else if (arguments.length == 4) {
      var callback = D;
      var args = C;
      //应该省略的条数
      var skipnumber = args.size * (args.page - 1) || 0;
      //数目限制
      var limit = parseInt(args.size) || 10;
      //排序方式
      var sort = args.sort || {};
  } else {
      throw new Error("find函数的参数个数，必须是3个，或者4个。");
      return;
  }

  //连接数据库，连接之后查找所有
  _connectDB(function (err, db) {
    var cursor = db.collection(collectionName).find(json).skip(skipnumber).limit(limit).sort(sort)
    console.log('result:' + cursor)
    cursor.each(function (err, doc) {
      if (err) {
        callback(err, null);
        //db.close(); //关闭数据库
        return;
      }
      if (doc != null) {
        result.push(doc);   //放入结果数组
      } else {
        //遍历结束，没有更多的文档了
        callback(null, result);
        //db.close(); //关闭数据库
      }
    });
  });
};

//删除
exports.deleteMany = function (collectionName, json, callback) {
  _connectDB(function (err, db) {
      //删除
      db.collection(collectionName).deleteMany(
          json,
          function (err, results) {
              callback(err, results);
              db.close(); //关闭数据库
          }
      );
  });
};

//修改
exports.updateMany = function (collectionName, json1, json2, callback) {
  _connectDB(function (err, db) {
      db.collection(collectionName).updateMany(
          json1,
          json2,
          function (err, results) {
              callback(err, results);
              db.close();
          });
  });
};

exports.getAllCount = function (collectionName,callback) {
  _connectDB(function (err, db) {
      db.collection(collectionName).countDocuments().then(function(count) {
          callback(count);
          db.close();
      });
  })
};


function getCount(name)  {
  db.getAllCount(name, function (count) {
    return count.toString()
  })
}


exports.list =  (res, ret, count, err) => {
  if (err) res.json(err)
  if (typeof ret === 'undefined') {
    res.json({
      code: 1,
      msg: '操作失败'
    })
  } else {
    res.json({
      code: 0,
      data: {
        list: ret,
        total: count.total,
        pages: count.pages
      },
      msg: null
    })
  }
}

exports.success =  (res, ret, err) => {
  if (err) res.json(err)
  if (typeof ret === 'undefined') {
    res.json({
      code: 1,
      msg: '操作失败'
    })
  } else {
    res.json({
      code: 0,
      data: ret,
      msg: null
    })
  }
}
