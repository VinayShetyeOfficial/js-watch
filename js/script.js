window.onload = displayTime;

// function to display current time on the page
function displayTime() {

    // create new date object
    var date = new Date();
    
    // get hour, minutes and seconds
    var hours = date.getHours();  
    var minutes = date.getMinutes();
    var seconds = date.getSeconds();
    var period = "AM";
    
    // check for edge cases
    if(hours == 0){
        
        hours = 12; 
        
    }
    else{
        
        if(hours == 12){
            
            period = "PM";
            
        }
        
        if(hours > 12){

            hours = hours % 12;
            period = "PM";
            
        }
        
    }
    
    // formatting hours, minutes and seconds
    hours = (hours < 10)? "0" + hours : hours;
    minutes = (minutes < 10)? "0" + minutes : minutes; 
    seconds = (seconds < 10)? "0" + seconds : seconds;
    
    // updating values on the page
    document.getElementById('hours').innerHTML = hours;
    document.getElementById('minutes').innerHTML = minutes;
    document.getElementById('seconds').innerHTML = seconds;
    document.getElementById('period').innerHTML = period;
    
    // call the function every 1 second
    setTimeout(displayTime, 1000);
}
