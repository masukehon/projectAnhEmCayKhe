const mongoose = require("mongoose");

const { Schema } = mongoose;

const imgUserMannualSchema = new Schema({
    image: { type: String, trim: true, required: true }
});

const ImgUserMannual = mongoose.model('ImgUserMannual',imgUserMannualSchema);

module.exports = { ImgUserMannual };