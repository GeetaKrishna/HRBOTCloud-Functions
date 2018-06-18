
function main(params) {
    var nodemailer = require('nodemailer');
var transporter = nodemailer.createTransport({
    	  host: 'smtp.gmail.com',
 service: 'gmail',
 auth: {
        user: 'asd@gmail.com',
        pass: 'dasd'
    }
});
var docs1 = [];
var k = '';
if(params.docs){
for(i=0; i<params.docs.length; i++){
var str = params.docs[i].event.destination; 
var res = str.match(/sip/g);
if(res == 'sip'){
params.docs[i].event.destination = 'Customer Care';
}
else
{
params.docs[i].event.destination= 'User';
}

	k = k + params.docs[i].event.destination+ ' : ' + params.docs[i].event.transcription+'\n';
}
return new Promise(function(resolve, reject){
    transporter.sendMail({
  from: 'xxcd@gmail.com', // sender address
  to: params.Mail_id, // list of receivers
  subject: 'You Chat with US', // Subject line
  text: k // plain text body
}, function (err, info) {
   if(err){
     console.log(err)
     reject(err)
   }
   else{
     console.log(info);
     resolve(info)
   }
});
	//return { message: 'Hello World' };
})
}

if(params.Mail_id && params.text && params.subject){
    return new Promise(function(resolve, reject){
    transporter.sendMail({
      from: 'xxx@gmail.com', // sender address
      to: params.Mail_id, // list of receivers
      subject: params.subject, // Subject line
      text: params.text // plain text body
    }, function (err, info) {
       if(err){
         console.log(err)
         reject(err)
       }
       else{
         console.log(info);
         if(params.HR){
            resolve({"mail_success": true})
         }
         else{
            resolve(info)
         }
       }
    });
})
}

}
