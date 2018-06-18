
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

exports.main = authyy;
