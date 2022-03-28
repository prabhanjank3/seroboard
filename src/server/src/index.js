var express = require('express');
var bodyParser = require('body-parser');
var usercontroller = require('./controller/usercontroller');
var batchcontroller = require('./controller/batchcontroller');
var participantcontroller = require('./controller/participantscontroller');
var axios = require('axios');
var cors = require('cors');
const app = express();

app.use(bodyParser.json());
app.use(cors());

//User
app.get('/user', usercontroller.getAllUsers);
app.get('/user/:id', usercontroller.getUserDetails);
app.post('/user', usercontroller.insertUser);
app.delete('/user/:id', usercontroller.deleteUser);
app.patch('/user/:id', usercontroller.updateUser);

// //Batch
app.get('/batch', batchcontroller.getAllBatchs);
app.get('/batch/:id', batchcontroller.getBatchDetails);
app.post('/batch', batchcontroller.insertBatch);
app.delete('/batch/:id', batchcontroller.deleteBatch);
app.patch('/batch/:id', batchcontroller.updateBatch);

//Participants
app.get('/participant', participantcontroller.getAllParticipants);
app.get('/participant/:id', participantcontroller.getParticipantDetails);
app.post('/participant', participantcontroller.insertParticipant);
app.delete('/participant/:id', participantcontroller.deleteParticipant);
app.patch('/participant/:id', participantcontroller.updateParticipant);



app.listen(3001, () => {
    console.log('Node Server listening..');
});