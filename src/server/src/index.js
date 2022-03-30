let express = require("express");
let bodyParser = require("body-parser");
let usercontroller = require("./controller/usercontroller");
let batchcontroller = require("./controller/batchcontroller");
let participantcontroller = require("./controller/participantscontroller");

let axios = require("axios");
let cors = require("cors");
const app = express();

app.use(bodyParser.json());
app.use(cors());
app.use(express.json());

//User
app.get("/user", usercontroller.getAllUsers);
app.get("/user/:id", usercontroller.getUserDetails);
app.post("/user", usercontroller.insertUser);
app.delete("/user/:id", usercontroller.deleteUser);
app.patch("/user/:id", usercontroller.updateUser);

// //Batch
app.get("/batch", batchcontroller.getAllBatchs);
app.get("/batch/:id", batchcontroller.getBatchDetails);
app.get("/batchduration", batchcontroller.getBatchInDuration);
app.post("/batch", batchcontroller.insertBatch);
app.delete("/batch/:id", batchcontroller.deleteBatch);
app.patch("/batch/:id", batchcontroller.updateBatch);

//Participants
app.get("/participant", participantcontroller.getAllParticipants);
app.get("/participant/:id", participantcontroller.getParticipantDetails);
app.post("/participant", participantcontroller.insertParticipant);
app.delete("/participant/:id", participantcontroller.deleteParticipant);
app.patch("/participant/:id", participantcontroller.updateParticipant);

// Login user and Auth user
app.post("/api/login", usercontroller.getUserDetailsByEmail);

app.listen(process.env.PORT || 3001, () => {
  console.log(
    `Node Server is ready and listening at http://localhost:${
      process.env.PORT || 3001
    }`
  );
});
