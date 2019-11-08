const mongoose = require('mongoose');

const messageSchema = new mongoose.Schema ({
    senderId: String,
    recipientId: String,
    title: String,
    body: String,
})

modules.export = mongoose.model('Message', messageSchema)