var map = {
  user: {
    list: 'select * from user',
    add: 'insert into user(id, username, password, nickname, telephone, email, photo, create_time, birthday) values {0, ?, ?, ?, ?, ?, ?, ?, ?}',
    detail: 'select * from user where id = ?',
    delete: 'delete from user where id = ?'
  },
  article: {
    list: 'select * from article'
  },
  comment: {
    list: 'select * from comment'
  },
  category: {
    list: 'select * from category'
  },
  tag: {
    list: 'select * from tag'
  }
}

module.exports = map
