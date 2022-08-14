const jsonServer = require('json-server');
const express = require('express');
const cors = require('cors');
const PORT = process.env.PORT || 3009;
const app = express();
app.use(express.json());
app.use(cors());
app.use('/api', jsonServer.defaults(), jsonServer.router('src/db.json'));

app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}`);
});
