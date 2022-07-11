const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const countriesSchema = new Schema({
    countryName : {type: String, required: true, unique: true},
    visited : Boolean,
    visitDateStart : Date,
    visitDateEnd : Date,
    lived : Boolean,
    liveDateStart : Date,
    liveDateEnd : Date,
    },
);

const Countries = mongoose.model("Countries", countriesSchema);

module.exports = Countries;
