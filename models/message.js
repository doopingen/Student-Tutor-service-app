const mongoose = require('mongoose');

const messageSchema = new mongoose.Schema ({
    senderId: String,
    recipientId: String,
    title: String,
    body: String,
});

module.export = mongoose.model('Message', messageSchema)