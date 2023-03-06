const express = require('express');
const app = express();


const port = process.env.PORT || 6001;
app.listen(port, () => console.log(`server started, port: ${port}`))