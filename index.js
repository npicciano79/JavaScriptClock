function showTime(){
    var current=new Date();
    
    var curday=current.getDay();
    var day=current.getDate();
    var curmonth=current.getMonth();
    var hour=current.getHours();
    var min=current.getMinutes();
    var second=current.getSeconds();
    //console.log(current);

   const day_of_week={0:'Sunday',1:'Monday',2:'Tuesday',3:'Wednesday',4:"Thursday",5:'Friday',6:'Saturday'};
   const month_of_year={0:'Jan',1:'Feb',3:'March',4:'April',5:'May',6:'June',7:'July',8:'Aug',9:'Sept',10:'Oct',11:'Nov',12:'Dec'}

    //check if hour>12
    var setting='PM'
    if (hour<12){
        setting='AM';
    }else if(hour>12){
        hour=hour-12;
    }else{
        hour=12;
    }
    //check if min <10
    if (min<10){
        var new_min='0'+min;
        //console.log(new_min);
    }else{
        var new_min=min;
    }

    //format date and time strings
    const t_now= hour+':'+new_min+":"+second+" "+setting 
    const d_now=day_of_week[curday]+', '+month_of_year[curmonth]+' '+day
    //console.log(d_now);
    //console.log(t_now);

    document.getElementById('digital-clock').innerHTML=t_now;
    document.getElementById('date-display').innerHTML=d_now;
    
    setTimeout(showTime,1000);

    

    
}


showTime();