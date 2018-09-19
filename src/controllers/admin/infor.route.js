const { Router } = require("express");
const { InformationService } = require("../../services/information.service");

const infoRouter = Router();
// infoRouter.get('/create',(req,res)=>{
//     InformationService.Create()
//     .then(info => res.status(200).send({success:true, info}))
//     .catch(res.onError);
// });

infoRouter.post('/update', (req, res, next) => {
    InformationService.Update(req,res)
    .then(info => res.status(200).send({success:true, info}))
    .catch(res.onError);
});

infoRouter.get('/get',(req,res,next)=>{
  InformationService.Get()
  .then(infor=> res.render("admin/test",{infor}))
  .catch(err=>console.log(err))
});

infoRouter.get('/',(req,res,next)=>{
  InformationService.Get()
  .then(infor=> res.send({success:true, infor}))
  .catch(err=>console.log(err))
});


module.exports = {infoRouter};