const express = require("express");
const path = require('path');
const port = 3000;
const db = require('./config/mongoose');
const Contact = require('./models/contacts')
const app = express();
app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));
app.use(express.urlencoded({extended:false}));
app.use(express.static('assets'));
 //middleware 1
// app.use(function(req,res,next){
//     req.myname='kranthi';
//     // console.log('m1');
//     next();
// });
 //middleware 2
// app.use(function(req,res,next){
//     console.log(req.myname);
//     // console.log('m2');
//     next();
// });
// var contactList = [
//     {
//         name:"John Smith",
//         phone:"121212121",
//     },
//     {
//         name:"John Smith",
//         phone:"121212121",
//     },
//     {
//         name:"John Smith",
//         phone:"121212121"
//     }
// ]




app.get('/',function(req,res){
    
    Contact.find({})
      .then(function (contact) {
        return res.render('home',
        { 
      title : "kranthi ",
      contact_list : contact,
       });
    });
});

app.get('/practice',function(req,res){
    return res.render('practice',{
        title : "pra ",
    })
});


app.post('/create-new',function(req,res){
    // contactList.push({
    //     name : req.body.name,
    //     phone :req.body.phone,
    // })
    
    // contactList.push(req.body);
    Contact.create({
        name : req.body.name,
        phone :req.body.phone
    });
    return res.redirect('back');

});

app.get('/delete',function(req,res){
    let id = req.query.id;
    // let Indexcontact= contactList.findIndex(contact => contact.phone == phone);
    // if(Indexcontact != -1){
    //     contactList.splice(Indexcontact,1);
    // }
    Contact.findByIdAndDelete(id)
     .then(function(id){
        return res.redirect('back');
     });
    

});






app.listen(port,function(err){
    if(err){
        console.log(err);
    }
    console.log("express is up and running");
})