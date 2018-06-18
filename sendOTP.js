    //"vgwByeCustomHeader": "SIP BYE",
    //"vgwByeCustomHeaderVal": "goodbye"
function authyy(params){
	const authy = require('authy')('eZizbWpMoQ7o80oUvI7QQuVGE9vkJ3xJ');
	if(params.success){
	return new Promise(function(resolve, reject) {
	authy.request_sms(params.authyID, function (err, res) {
	 if(err){
	   console.log(err)	 
	   reject(err);
	 }
	 else{
		console.log(res)	
		resolve({'payload': true, 'authyID': params.authyID}); 
	 }
	});
	})
	}
	else{
		resolve({'payload': false})
	}
}

exports.main = authyy;
