const express = require('express');
const multer = require('multer');
const XLSX = require('xlsx');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
app.use(cors());
app.use(express.json());

// MongoDB model
const Data = mongoose.model('Data', new mongoose.Schema({}, { strict: false }));

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/excelDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => console.log("MongoDB connected"));

// File storage setup
const storage = multer.memoryStorage();
const upload = multer({ storage });

app.post('/upload', upload.single('file'), async (req, res) => {
  const workbook = XLSX.read(req.file.buffer, { type: 'buffer' });
  const sheet = workbook.Sheets[workbook.SheetNames[0]];
  const jsonData = XLSX.utils.sheet_to_json(sheet);
  await Data.insertMany(jsonData);
  res.send({ message: 'File uploaded and data stored' });
});

app.get('/data', async (req, res) => {
  const data = await Data.find();
  res.json(data);
});

app.listen(5000, () => console.log('Server running on port 5000'));