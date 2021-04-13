let mongoose = require('mongoose')
let Schema = mongoose.Schema

let schema = mongoose.Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
  classify: String,
  upvote: Number,
  comments: Number,
  createTime: {
    type: Date,
    default: Date.now
  },
  updateTime: {
    type: Date,
    default: Date.now
  }
}, {
  versionKey: false, // 增加的文档不会有__v字段
  timestamps: { createdAt: 'createTime', updatedAt: 'updateTime' }
})

module.exports = mongoose.model('News', schema)
