const mongoose = require('mongoose');

const TaskSchema = mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'users',
  },
  name: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model('task', TaskSchema);
