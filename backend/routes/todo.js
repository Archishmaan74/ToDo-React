const express = require('express');
const router = express.Router;
const mongoose = require('mongoose');

const TaskSchema = mongoose.Schema({
    sno: Number,
    task: String,
    date: String,
    time: String
})

const TaskModel = mongoose.model("tasks",TaskSchema);

module.exports = router;