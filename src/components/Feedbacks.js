import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-alpine.css";
import { useEffect, useState } from "react";

const Feedbacks = () => {
  const [rowData, setRowData] = useState([]);
  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    const res = await fetch(
      "https://qualityms-204e6-default-rtdb.firebaseio.com/feedbacks.json"
    );
    const data = await res.json();
    const info = [];
    for (const key in data) {
      const feedback = {
        id: key,
        ...data[key],
      };
      info.push(feedback);
      setRowData(info);
      console.log(info);
    }
  };
  const columnDefs = [
    { field: "name" },
    { field: "email" },
    { field: "feedback" },
  ];
  return (
    <div className="ag-theme-alpine" style={{ height: 500 }}>
      <AgGridReact rowData={rowData} columnDefs={columnDefs} />
    </div>
  );
};

export default Feedbacks;
