const mongoose = require('mongoose');
const UserSchema = new mongoose.Schema({
  spotifyId: String,
  accessToken: String,
  refreshToken: String,
  grupo: String, // Aquí puedes guardar el grupo al que pertenece el usuario
});

const User = mongoose.model('User', UserSchema);
module.exports = User;
