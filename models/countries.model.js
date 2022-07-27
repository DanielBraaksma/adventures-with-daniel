const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const countriesSchema = new Schema({
    countryName : {type: String, required: true, unique: true},
    yearVisited : String,
    lived : String,
    stayLength : String,
    },
);

const Countries = mongoose.model("Countries", countriesSchema);

module.exports = Countries;
