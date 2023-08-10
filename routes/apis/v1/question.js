
const express=require('express')
const Router=express.Router()
const question_controller=require('../../../controllers/questionController')

Router.post('/create',question_controller.create)
Router.get('/view/:id',question_controller.showDetails)
Router.delete('/delete/:id',question_controller.deleteQues)


module.exports=Router