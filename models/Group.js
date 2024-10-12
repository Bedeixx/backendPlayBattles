const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const GroupSchema = new Schema({
    nombre: String,
    miembros: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }], // Miembros del grupo
    escuchasTotales: Number // Número total de escuchas del grupo
});

const Group = mongoose.model('Group', GroupSchema);
module.exports = Group;
