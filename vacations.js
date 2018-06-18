/**
  *
  * main() will be run when you invoke this action
  *
  * @param Cloud Functions actions accept a single parameter, which must be a JSON object.
  *
  * @return The output of this action, which must be a JSON object.
  *
  */
function main(params) {

var Cloudant = require('cloudant');

    var me = '3736a996-2706-47cb-a938-4d884f0c87f6-bluemix'; // Set this to your own account
    var password = 'e278f579645d9d3766c715f2efc4a0ccbbfa4eb4739ee5eb1fc3693a8e6391d2';

// Initialize the library with my account.
var cloudant = Cloudant({account:me, password:password});

console.log(params, 'at params')
if(params.Vacations){
    var alice = cloudant.db.use('employeedb')
	
	return new Promise(function(resolve, reject){
        alice.find({selector:{emp_id: params.EmpID}}, function(err, body, header) {
          if (err) {
            console.log('[alice.insert] ', err);
            reject(err)
          }
          else{
          console.log(body);
          if(body.docs[0]){
            resolve({"payload": body.docs[0].Vacations, "message": true})
          }
          else{
            resolve({"payload": 'You gave a wrong EMPID ', "message": false})
          }
          }
        });
	})
}
else if(params.leave){
    
    var alice = cloudant.db.use('employeedb')
	
	return new Promise(function(resolve, reject){
        alice.find({selector:{emp_id: params.EmpID}}, function(err, body, header) {
          if (err) {
            console.log('[alice.insert] ', err);
            reject(err)
          }
          else{
          console.log(body);
          if(body.docs[0]){
            resolve({"payload": body.docs[0].Leaves, "message": true})
          }
          else{
            resolve({"payload": 'You gave a wrong EMPID ', "message": false})
          }
          }
        });
	})
}

}
