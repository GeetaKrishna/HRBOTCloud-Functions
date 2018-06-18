function main(params) {
    
    var moment = require('moment');
var verify = false;
var arr = [];
    var Holidays_list = ["2018-01-01", "2018-05-28", "2018-07-04", "2018-09-03", "2018-11-22", "2018-11-23", "2018-12-24", "2018-12-25", "2018-12-31"];
    	if(params.holiday){
    	    return new Promise(function(resolve, reject){
                for(var i=0; i <= 8; i++){
                    if(Holidays_list[i] == params.holiday){
                        resolve({"Holiday_Status": 'Holiday', "success": true});
                    }
                }
                resolve({"success": false})
        });
    	}
    	else if(params.start){
    	    console.log(params.start)
            return new Promise(function(resolve, reject){
                var start = new Date(params.start);
                var end = new Date(params.end);
                var days = moment(params.end).diff(moment(params.start), 'days')
                if(end < start)return; //avoid infinite loop;
                for(var count = {sun: 0, sat: 0, holidays: 0};
                start <= end; 
                start.setDate(start.getDate() + 1)){
                    Holidays_list.forEach(function(el){
                    	if(start.toLocaleDateString("en-US") == new Date(el).toLocaleDateString("en-US")){
                         console.log('el matched');   
                         count.holidays++;
                         verify = true;
                        }
                	})
                	
                    if(start.getDay() == 0){
                        count.sun++;
                        verify = true;
                    }
                    else if(start.getDay() == 6){
                        count.sat++;
                        verify = true;
                    }
					if(!verify){
                        arr.push(moment(start).format('YYYY-MM-DD'));
					}
					
					verify = false;
                    
                }
                count = count.sat + count.sun + count.holidays;
                resolve({'count': days - count , 'arr': arr, 'EmpID': params.EmpID})
            })
    	}
    	else{
    	  var Holidays_list = ["Jan 1st - New Year Day", "May 28th - Memorial Day", "July 4th - Independence Day", "Septemeber 3rd - Labour Day", "November 22nd - Thanks Giving Day",  "November 23rd - Thanks Giving Day After", 
    	  "Decemebr 24 - Christmas Eve", "December 25th - Christmas Day", "December 31st - New Year Eve"];
    	    return {'holidays_list': Holidays_list, "success": true}
    	}
    	
}
