const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const TaskSchema = mongoose.Schema({
    sno: Number,
    task: String,
    date: String,
    time: String
})

const TaskModel = mongoose.model("tasks",TaskSchema);

router.get("/display", async(req,res)=>{
    res.send(await TaskModel.find().sort({sno:1}));
})



module.exports = router;