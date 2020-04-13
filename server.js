const express = require('express');
const server = express();

server.use(express.json());
server.use('/api/cars', require('./routes/api/cars'));

const PORT = process.env.PORT || 5000;
server.listen(PORT, () => console.log(`Server running on port ${PORT}`));