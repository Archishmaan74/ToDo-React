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

router.post("/add",async(req,res)=>{
    const { sno, task, date, time } = req.body;

  try{
    const newTask = new TaskModel({
        sno,
        task,
        date,
        time
    });
    const savedTask = await newTask.save();

    res.status(201).json(savedTask);
  }catch(err){
    res.status(400).json({ message: err.message });
  }
})

module.exports = router;