const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const votesSchema = new Schema({
    countryName : {type: String, required: true, unique: true},
    votes : {type: Number, required: true},
    },
);

const Votes = mongoose.model("Votes", votesSchema);

module.exports = Votes;
