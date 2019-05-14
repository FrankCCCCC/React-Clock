const initTime = {
    hr: "0",
    min: "0",
    sec: "0",
    year: "0",
    month: "0",
    date: "0",
    day: "0",
    dot: ""
};

export function time(state=initTime, action){
    switch(action.type){
        case "@ACT/SETTIME":
            return action.time;
        default:
            return state;
    }

}