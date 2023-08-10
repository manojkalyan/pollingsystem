const Question = require('../models/Question');
const Option = require('../models/Option');

module.exports.create = async function (req, res) {
    // in this function, a question is created
    console.log(req.url);
    console.log(req.body);
    
    try {
        const ques = await Question.create(req.body);
        console.log(ques);
        res.send(ques);
    } catch (err) {
        console.log("error in creating the question schema", err);
        res.status(500).send("Error creating question");
    }
};

module.exports.showDetails = async function (req, res) {
    console.log(req.params.id);

    try {
        const ques = await Question.findById(req.params.id).populate('options');

        if (ques) {
            res.send(ques);
        } else {
            res.status(404).send("Question not found");
        }
    } catch (err) {
        console.log("Error fetching question details", err);
        res.status(500).send("Error fetching question details");
    }
};

module.exports.deleteQues = async function (req, res) {
    // in this function, a question will be deleted
    try {
        const ques = await Question.findById(req.params.id);

        if (ques) {
            // Delete all the options of the question
            await Option.deleteMany({ question: req.params.id });
            await Question.deleteOne({ _id: req.params.id });

            res.send("Question deleted");
        } else {
            res.status(404).send('Question does not exist');
        }
    } catch (err) {
        console.log("Error deleting question", err);
        res.status(500).send("Error deleting question");
    }
};
