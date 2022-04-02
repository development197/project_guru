const express = require("express");
const app = express();
const fileUpload = require("express-fileupload");
const cors = require("cors");

//--------------------------------Requiring Pages----------------------------------
const dropDown = require("./routes/dropDown");
const login = require("./routes/login");
const email = require("./routes/email");
const wasp = require("./routes/wasp");
const once_page = require("./routes/oncepage");
const boss = require("./routes/boss");
//const edit_company = require("./routes/boss/editcompany");
const sp_cost = require("./routes/cost/spcost");
const totalRecords = require("./routes/tact/totalRecords");
const importTact = require("./routes/tact/tactPages/import");
const exportTact = require("./routes/tact/tactPages/export");
const orange = require("./routes/wasp/orange");
const white = require("./routes/wasp/white");
const self_task = require("./routes/task/selftask");
const other_task = require("./routes/task/othertask");
const reminder = require("./routes/task/reminder");
const approval_task = require("./routes/task/appdisapp");
const addTact = require("./routes/tact/tactPages/addTact");
const searchTact = require("./routes/tact/tactPages/searchtact");

//-------------------------------- External Middleware----------------------------------
app.use(cors());
app.use(express.json());
app.use(fileUpload());

//--------------------------------Routes Middleware----------------------------------
app.use("/", dropDown);
app.use("/", login);
app.use("/", email);
app.use("/", wasp);
app.use("/", boss);
app.use("/", sp_cost);
app.use("/", once_page);
//app.use("/", edit_company);
app.use("/", totalRecords);
app.use("/", importTact);
app.use("/", exportTact);
app.use("/", orange);
app.use("/", white);
app.use("/", self_task);
app.use("/", other_task);
app.use("/", reminder);
app.use("/", approval_task);
app.use("/", addTact);
app.use("/", searchTact);

//--------------------------------Server Listening----------------------------------
app.listen(3001, () => {
  console.log("Server is running on port 3001");
});
