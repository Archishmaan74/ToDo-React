import axios from "axios";
import "../styles/add.css";
import { useState } from "react";


function AddTask() {
  const [sno, setSno] = useState("");
  const [task, setTask] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");  
  const data = {
    sno: "",
    task: "",
    date: "",
    time: ""
  };
  const [inputData, setInputData] = useState(data);

  const handleData = (e: any) => {
    setInputData({ ...inputData, [e.target.name]: e.target.value});
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    axios.post("http://127.0.0.1:3000/add", inputData).then((response) => {
        console.log(response);
        alert("Task Added successfully!");
    })
  }
  return (
    <>
<div className="center">
        <h1>Add Task</h1>
      </div>
      <div className="center">
        Sno: <input type="number" name="sno" required value={inputData.sno} onChange={(e) =>  {
            setSno(e.target.value);
            handleData(e);
        }}/>
        <br />
        <br />
        Task: <input type="text" name="task" required value={inputData.task} onChange={(e) => {
            setTask(e.target.value);
            handleData(e);
        }} />
        <br />
        <br />
        Date: <input type="text" name="date" required value={inputData.date} onChange={(e) => {
            setDate(e.target.value);
            handleData(e);
        }} />
        <br />
        <br />
        Time: <input type="text" name="time" required value={inputData.time} onChange={(e) => {
            setTime(e.target.value);
            handleData(e);
        }} />
        <br />
        <br />
        {sno.length >0 && task.length >0 && date.length>0 && time.length>0 ? (
            <button className="btn btn-primary" onClick={(e) =>{
                handleSubmit(e);
            }}>Add</button>
        ) : (<p>Please fill all the above fields!</p>)}
      </div>
    </>
  )
}

export default AddTask