const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const returned = new Schema({
    userId: { type: Schema.Types.ObjectId, ref: 'user', required: true },
    bookId: { type: Schema.Types.ObjectId, ref: 'book', required: true },
    returDate: { type: Date, default: Date.now },
}, { timestamps: true });

module.exports = mongoose.model('Return', returned);
