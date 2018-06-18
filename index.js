/*
{
  "count": -1,
  "arr": [],
  "EmpID": "3938"
}

if(params.success){
// Initialize the library with my account.
var cloudant = Cloudant({account:me, password:password});

console.log(params, 'at params')

    var alice = cloudant.db.use('employeedb')
	
	return new Promise(function(resolve, reject){
	    alice.insert({"_id": params.user.id.toString(), "authyID": params.user.id,   "Vacations": "12", "Holidays": "9", "Leaves": "0"}, function(err, body, header) {
	    //alice.find({selector:{fire: "fire"}}, function(err, body, header) {
          if (err) {
            //
            if(err.error == 'conflict'){
             resolve({"payload": false, "authyID": params.user.id})   
            }
            else{
            console.log('[alice.insert] ', err);
            reject(err)
            }
          }
          else{
          console.log(body);
          resolve({"payload": true, "authyID": params.user.id})
          }
        });
	})    
}
else 
{"error":
{"error_code":"60003","message":"DoS protection: User has requested too many tokens in the last hour.",
"errors":
{"message":"DoS protection: User has requested too many tokens in the last hour."},"success":false}}
*/
function authyy(params){
	const authy = require('authy')('eZizbWpMoQ7o80oUvI7QQuVGE9vkJ3xJ');

	return new Promise(function(resolve, reject) {

		console.log(params.authyID, params.OTP)
		
     authy.verify(params.authyID, params.OTP, function(err, response) {
		 if(err){
		 console.log(err)
		 resolve(err)
		 }
		 else{
		 console.log(response)
		 resolve(response)
		 }
		});
	});
}

//var aprams={"authyID" : "78944069", "OTP" :"0077766"};

exports.main = authyy;
//authyy(aprams)