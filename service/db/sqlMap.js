var sqlMap = {
  user: {
    add: 'insert into user(id, username, password, name) values {0, ?, ?}'
  },
  websites: {
    list: 'select * from websites'
  }
}

module.exports = sqlMap
