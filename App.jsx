import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Bar } from 'react-chartjs-2';
import * as XLSX from 'xlsx';

function App() {
  const [file, setFile] = useState(null);
  const [data, setData] = useState([]);
  const [xKey, setXKey] = useState('');
  const [yKey, setYKey] = useState('');

  useEffect(() => {
    axios.get('http://localhost:5000/data')
      .then(res => setData(res.data));
  }, []);

  const uploadFile = () => {
    const formData = new FormData();
    formData.append('file', file);
    axios.post('http://localhost:5000/upload', formData)
      .then(() => window.location.reload());
  };

  const chartData = {
    labels: data.map(d => d[xKey]),
    datasets: [{
      label: yKey,
      data: data.map(d => d[yKey]),
      backgroundColor: 'rgba(75, 192, 192, 0.6)'
    }]
  };

  return (
    <div>
      <h2>Excel Analytics Dashboard</h2>
      <input type="file" onChange={(e) => setFile(e.target.files[0])} />
      <button onClick={uploadFile}>Upload</button>
      <div>
        <label>X Axis:</label>
        <input value={xKey} onChange={e => setXKey(e.target.value)} />
        <label>Y Axis:</label>
        <input value={yKey} onChange={e => setYKey(e.target.value)} />
      </div>
      <Bar data={chartData} />
    </div>
  );
}

export default App;