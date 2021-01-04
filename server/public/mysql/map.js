var map = {
  user: {
    list: 'SELECT * from user',
    add: 'INSERT INTO user(id, username, password, nickname, telephone, email, photo, create_time, birthday) values {0, ?, ?, ?, ?, ?, ?, ?, ?}',
    detail: 'SELECT * from user where id = ?',
    delete: 'DELETE from user where id = ?'
  },
  article: {
    list: 'SELECT * from article',
    add: 'INSERT INTO article values {0, ?, ?, ?, ?, ?, ?, ?, ?}',
    detail: 'SELECT * from article where id = ?',
    delete: 'DELETE from article where id = ?',
    update: 'UPDATE article SET ? where id = ?',
    // 条件查询用
    query: 'SELECT * FROM article WHERE title LIKE ?',
  },
  comment: {
    list: 'SELECT * from comment'
  },
  category: {
    list: 'SELECT * from category'
  },
  tag: {
    list: 'SELECT * from tag'
  }
}

module.exports = map
