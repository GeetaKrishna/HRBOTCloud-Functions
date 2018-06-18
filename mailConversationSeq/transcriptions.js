
function main(params) {
    var Cloudant = require('cloudant');

    var me = '3736a996-2706-47cb-a938-4d884f0c87f6-bluemix'; // Set this to your own account
    var password = 'e278f579645d9d3766c715f2efc4a0ccbbfa4eb4739ee5eb1fc3693a8e6391d2';
    // Initialize the library with my account.
    var cloudant = Cloudant({account:me, password:password});
    
        var alice = cloudant.db.use('transcriptions')
    	
    var selectorQuery = 
    {
       "selector": {
          "event": {
             "globalSessionID": params.sessionID
          }
       },
       "fields": [
           "time",
          "event.transcription",
          "event.destination"
       ],
   "sort": [
      {
         "time": "asc"
      }
   ]
    }
    	
    	return new Promise(function(resolve, reject){
    	    alice.find(selectorQuery, function(err, body, header) {
              if (err) {
                console.log('[alice.insert] ', err.message);
                resolve({"success": false})
                //reject(err)
              }
              else{
              console.log(body);
              if(body.docs[0]){
              resolve({'docs': body.docs, "Mail_id": params.Mail_id})
              }
              else{
              resolve({"success": false})
              }
                  
              }
            });
    })

}
