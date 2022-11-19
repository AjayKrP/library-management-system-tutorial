const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const fine = new Schema({
    userId: { type: Schema.Types.ObjectId, ref: 'user', required: true },
    amount: { type: Number, default: 0 },
    paidAt: {type: Date, default: Date.now}
}, { timestamps: true });

module.exports = mongoose.model('Fine', fine);
