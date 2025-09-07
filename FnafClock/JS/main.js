let timer = ["12 AM", "1 AM", "2 AM", "3 AM", "4 AM", "5 AM", "6 AM"];

let schedule = [
    {start: "08:30", end: "09:15"},
    {start: "09:25", end: "10:10"},
    {start: "10:20", end: "11:05"},
    {start: "11:25", end: "12:10"},
    {start: "12:30", end: "13:15"},
    {start: "13:25", end: "14:10"},
    {start: "14:20", end: "15:05"},
    {start: "15:15", end: "16:00"},
];


function toMinutes(str) {
    let [h, m] = str.split(":").map(Number);
    return h * 60 + m;
}


function updateTimer() {
    let now = new Date();
    let currentMinutes = now.getHours() * 60 + now.getMinutes();
    let text = document.getElementById("timer");


    let currentSlot = schedule.find(slot => {
        let start = toMinutes(slot.start);
        let end = toMinutes(slot.end);
        return currentMinutes >= start && currentMinutes <= end;
    });

    if (currentSlot) {

        let elapsedMinutes = currentMinutes - toMinutes(currentSlot.start);
        let intervalMinutes = 7.5;
        let index = Math.floor(elapsedMinutes / intervalMinutes);
        if (index >= timer.length) index = timer.length - 1;

        text.textContent = timer[index];

    } else {
        text.textContent = "Break";
    }
}


updateTimer();


setInterval(updateTimer, 60000);
