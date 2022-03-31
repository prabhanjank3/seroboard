var express = require('express');
var bodyParser = require('body-parser');
var usercontroller = require('./controller/usercontroller');
var batchcontroller = require('./controller/batchcontroller');
var participantcontroller = require('./controller/participantscontroller');
var attendencecontroller = require('./controller/attendancecontroller');
var postassreccontroller = require('./controller/postassrecordcontroller');
var postasscontroller = require('./controller/postasscontroller');
var assignmentcontroller = require('./controller/assignmentcontroller');
var assignmentreccontroller = require('./controller/assignmentrecordcontroller');
var axios = require('axios');
var cors = require('cors');
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
//Attendence
app.get('/attendance', attendencecontroller.getAttendanceData);
app.post('/attendance',attendencecontroller.submitAttendanceReport)
app.delete('/attendance', attendencecontroller.deleteAttReportByCondition);

//Post Assessment
app.get('/postass',postasscontroller.getAllPostass);
app.post('/postass', postasscontroller.insertPostass);
app.delete('/postass/:id', postasscontroller.deletePostass);
app.patch('/postass', postasscontroller.updatePostass);

//Post Assessment Records
app.get('/postassrec', postassreccontroller.getPostAssessmentRecord);
app.post('/postassrec', postassreccontroller.markPostAssessmentScore);

//Assignment
app.get('/assignment',assignmentcontroller.getAllAssignment);
app.post('/assignment', assignmentcontroller.insertAssignment);
app.delete('/assignment/:id', assignmentcontroller.deleteAssignment);
app.patch('/assignment', assignmentcontroller.updateAssignment);

//Assignment Record
app.get('/assignmentrec', assignmentreccontroller.getAssignmentRecord);
app.post('/assignmentrec', assignmentreccontroller.markAssignmentScore);

app.listen(3001, () => {
    console.log('Node Server listening..');
});
