const mysql = require('mysql2');
const express = require('express');

const PORT = process.env.PORT || 3001;
const app = express();

// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Connect to database
const db = mysql.createConnection(
    {
      host: 'localhost',
      // Your MySQL username,
      user: 'root',
      // Your MySQL password
      password: 'Barnabas1005!',
      database: 'election'
    },
    console.log('Connected to the election database.')
  );

// Create a candidate
app.post('/api/candidate', ({ body }, res) => {
    const errors = inputCheck(body, 'first_name', 'last_name', 'industry_connected');
    if (errors) {
      res.status(400).json({ error: errors });
      return;
    }
  });
  


// Default response for any other request (Not Found)
app.use((req, res) => {
  res.status(404).end();
});

// Default response for any other request (Not Found)
app.use((req, res) => {
    res.status(404).end();
  });
  

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});