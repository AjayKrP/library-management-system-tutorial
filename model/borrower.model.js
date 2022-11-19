const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const borrower = new Schema({
    userId: { type: Schema.Types.ObjectId, ref: 'user', required: true },
    bookId: { type: Schema.Types.ObjectId, ref: 'book', required: true },
    purchaseDate: { type: Date, default: Date.now },
    active: { type: Boolean, default: true }
}, { timestamps: true });

module.exports = mongoose.model('Borrower', borrower);
