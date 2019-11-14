const mongoose = require('mongoose');

const messageSchema = new mongoose.Schema ({
    senderId: String,
    recipientId: String,
    senderName: String,
    recipientName: String,
    title: String,
    body: String,
    date: String,
});

module.export = mongoose.model('Message', messageSchema)