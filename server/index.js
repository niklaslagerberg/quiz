const express = require('express');
const bodyParser = require('body-parser');
const quizData =  require('./data');
const loggerProxy = require('./src/loggerProxy.js')

const PORT = process.env.PORT || 3000;

var app = express();

const router = express.Router();

router.get('/quiz/:id', async (req, res) => {
    const id = req.params.id;

    let quizJson = await quizData.get(id);

    if(quizJson) {
        res.send(quizJson);
    } else {
        res.status(404);
        res.send("Hmm... That quiz could not be found (sorry about that)");
    } 
});

router.put('/quiz/:id', async (req, res) => {
    console.log(`putting at id ${req.params.id}`);
    console.log(`${req.body}`);
    
    
    let status = await quizData.set(req.params.id, req.body);

    if(status) {
        res.status(200);
        res.send();
    } else {
        res.status(404);
        res.send("Oops... The quiz you are trying to update does not seem to exist...");
    } 
});


app.use(loggerProxy);
app.use(bodyParser());
app.use(router);
 
app.listen(PORT, () => {
    console.log(`listening to port ${PORT}`);
});