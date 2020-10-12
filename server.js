const express = require("express");
const app = express();
const db = require("./src/models");
const PORT = 5000;
const cors=require('cors');

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(cors());

const apiRoutes = require("./src/routes/routes");
app.use("/",apiRoutes);

db.sequelize.sync().then(() => {
    app.listen(PORT,()=>{
        console.log(`listening on: http://localhost:${PORT}`);
    })
})