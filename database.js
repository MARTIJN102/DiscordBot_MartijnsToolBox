const { Schema, model } = require('mongoose');

module.exports = model(

    "maintenance",
    new Schema({
        enabled: Boolean
    })

);