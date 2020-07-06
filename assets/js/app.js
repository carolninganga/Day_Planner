const TIME_BLOCKS = document.getElementById('time_blocks');
const CURRENT_DAY = document.getElementById('currentDay');
let schedule = JSON.parse(localStorage.getItem('schedule'));

CURRENT_DAY.textContent = moment().format("M/D/YYYY")

if (!schedule) {
    console.log("Build Schedule")
    schedule = {}
    for (var i = 8; i <= 17; i++) {
        schedule[i] = ''
    }
    localStorage.setItem('schedule', JSON.stringify(schedule))
}

Object.keys(schedule)
    .forEach(hour =>
        TIME_BLOCKS.appendChild(
            rowBuilder(parseInt(hour), schedule[hour])
        ))