# 📊 Excel Analytics Platform (MERN Stack)

This project is a **full-stack web application** that allows users to:
- Upload Excel files (.xls/.xlsx)
- Parse and analyze data
- Dynamically select X and Y axes for plotting
- Generate interactive 2D bar charts
- Visualize trends and patterns easily

## 🚀 Features

✅ Upload Excel files and parse with SheetJS  
✅ Store parsed data into MongoDB  
✅ Interactive chart generation using React Chart.js  
✅ Select dynamic X and Y axes for analysis  
✅ REST API backend with Express.js and Multer  
✅ Clean, minimal frontend with React.js

## 🛠️ Tech Stack

- **Frontend**: React.js, Chart.js, Axios
- **Backend**: Node.js, Express.js, Multer, XLSX
- **Database**: MongoDB
- **Others**: CORS, dotenv, form-data

## 📁 Folder Structure

```
Excel_Analytics_Project/
├── backend/
│   └── server.js          # Express server with Excel upload and MongoDB logic
├── frontend/
│   └── App.jsx            # React component for upload and chart rendering
```

## ⚙️ How to Run

### 1️⃣ Start Backend

```bash
cd backend
npm install
node server.js
```

> Make sure MongoDB is running locally on port 27017 or change the connection URI in `server.js`.

### 2️⃣ Start Frontend

```bash
cd frontend
npm install
npm start
```

> App runs on `http://localhost:3000` and backend on `http://localhost:5000`.

## 🧪 Example Use Case

- Upload an Excel file with columns like `Month`, `Sales`, `Product`
- Enter `Month` as X-axis and `Sales` as Y-axis
- View a bar chart showing monthly sales trends

## 📌 Future Improvements

- Add 3D charts using Three.js
- Chart download as PNG/PDF
- AI-driven insights based on uploaded data
