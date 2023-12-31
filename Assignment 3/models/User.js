const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    email: { type: String, required: true, unique: true },
  });
  

const User = mongoose.model('User', userSchema);
User.on('index', (error) => {
    if (error) {
      console.error('Error creating index for User model:', error);
    }
  });
module.exports = User;
