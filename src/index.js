const express = require('express');
require('./db/mongoose');
const UserRouter = require('./routers/user');
const TaskRouter = require('./routers/task');

const app = express()
const port = process.env.PORT || 3000;

app.use(express.json())
app.use(UserRouter)
app.use(TaskRouter)

app.listen(port, () => {
    console.log(`server is on at port ${port}`);
})