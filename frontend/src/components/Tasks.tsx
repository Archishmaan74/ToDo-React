import { useEffect, useState } from "react";
import "../styles/task.css";

function Tasks() {
  const [data, setData] = useState([]);
  const [fetched, setFetched] = useState(false);
  useEffect(() => {
    fetch("http://localhost:3000/display")
      .then((res) => res.json())
      .then((json) => {
        setData(json);
        setFetched(true);
      });
  }, []);
  return (
    <>
      <div className="center">
        <h1>Todo List</h1>
      </div>
      <div className="tablestyle">
        {fetched === true ?
        <table className="table table-striped">
        <thead className="center">
          <tr>
            <th>Sno</th>
            <th>Task</th>
            <th>Date</th>
            <th>Time</th>
          </tr>
        </thead>
        <tbody className="center">
          {data.map((d: any)=>(
            <tr>
              <td>{d.sno}</td>
              <td>{d.task}</td>
              <td>{d.date}</td>
              <td>{d.time}</td>
            </tr>
          ))}
        </tbody>
      </table>: <div>Loading...</div>}
      </div>
    </>
  );
}

export default Tasks;
