var express = require('express');
var bodyParser = require('body-parser');
var usercontroller = require('./controller/usercontroller');
var batchcontroller = require('./controller/batchcontroller');
// var participentcontroller = require('./controller/participantscontroller');
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
app.get('/batchduration', batchcontroller.getBatchInDuration);
app.post('/batch', batchcontroller.insertBatch);
app.delete('/batch/:id', batchcontroller.deleteBatch);
app.patch('/batch/:id', batchcontroller.updateBatch);

// //Participants
// app.get('/participent', participentcontroller.getAllParticipents);
// app.get('/participent/:id', participentcontroller.getParticipentDetails);
// app.post('/participent', participentcontroller.insertParticipent);
// app.delete('/participent/:id', participentcontroller.deleteParticipent);
// app.patch('/participent/:id', participentcontroller.updateParticipent);



app.listen(3001, () => {
    console.log('Node Server listening..');
});