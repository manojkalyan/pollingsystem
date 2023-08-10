const Option=require('../models/Option');
const Question= require('../models/Question');
module.exports.create = async function (req, res) {
    // in this we will create the options for the given question
    console.log(req.body, req.params.id);

    try {
        const opt = await Option.create({
            option: req.body.option, // Assuming you're sending the option content in the request body
            question: req.params.id,
        });

        const updatedOpt = await Option.findByIdAndUpdate(
            opt._id,
            { $set: { add_vote: `http://localhost:3002/api/v1/options/${opt._id}/add_vote` } },
            { new: true } // Returns the updated document
        );

        const ques = await Question.findById(req.params.id);
        if (ques) {
            ques.options.push(updatedOpt);
            await ques.save();
            console.log(ques);
            res.send(ques);
        } else {
            res.send('Question does not exist');
        }
    } catch (err) {
        console.log("Error in creating the option schema", err);
        res.status(500).send("Error creating option");
    }
};
module.exports.add_vote=async function(req,res){
    // in this votes will be added to the particular option of the question
    console.log(req.params.id)
    // this the increment query in which the vote is incremented by one 
    const opt=await Option.findByIdAndUpdate(req.params.id,{ $inc: { vote: 1 }})
    if(opt){
        await opt.save();
        console.log(opt);
        res.send(opt)
    }
    // handling the bad requests
    else{
        res.send('option does not exits')
    }
}

module.exports.delete=async function(req,res){
    // delete the id option 
    console.log('id',req.params.id);
    const opt=await Option.findById(req.params.id);
    if(opt){
        const quesId=opt.question;
        // finding the question to which the option is deleted and removing that option from its option array
        const ques=await Question.findByIdAndUpdate(quesId,{$pull:{options:req.params.id}});
        // now absolutely deleting that option
        await Option.findByIdAndDelete(req.params.id)

        console.log(ques);
        res.send('option deleted')
    }
    // handling the bad request
    else{
        res.send('id not exists')
    }
}