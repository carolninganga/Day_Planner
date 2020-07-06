function handleSave() {
    const parent = this.parentElement
    const timeEl = parent.children[0]
    const textareaEl = parent.children[1]
    const time = parseInt(moment(timeEl.textContent, "h a").format('H'))
    schedule[time] = textareaEl.value

    localStorage.setItem('schedule', JSON.stringify(schedule))
}

/**
 * 
 * @param {number} hour military time.
 * @param {string} text what is scheduled for this time.
 */

 const rowBuilder = (hour, text) => {
     const __time = moment(hour, "H:mm")
     let timeClass = "future";
     
    if (moment().isSame(__time, 'hour')) {
        timeClass = "present"
    } else if (moment().isAfter(__time)) {
        timeClass = "past"
    }

    const parent = document.createElement('div')
    parent.classList.add('row')
    parent.classList.add('time-block')

    const time = document.createElement('div')
    time.classList.add('hour')

 }