export function setTime(){
    const time = new Date();
    const hr = time.getHours()>9 ? time.getHours() : "0"+time.getHours().toString();
    const sec = time.getSeconds()>9 ? time.getSeconds() : "0"+time.getSeconds().toString();
    const date = time.getDate()>9 ? time.getDate() : "0"+time.getDate().toString();
    const min = time.getMinutes()>9 ? time.getMinutes() : "0"+time.getMinutes().toString();
    
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
    const dot = time.getSeconds()%2? "":".";
    
    //console.log("HI");
    
    //console.log(time.toDateString());
    return{
        type: "@ACT/SETTIME",
        time: {
            hr: hr,
            min: min,
            sec: sec,
            year: time.getFullYear().toString(),
            month: months[time.getMonth()],
            date: date,
            day: days[time.getDay()],
            dot: dot
        }
    };
     
}