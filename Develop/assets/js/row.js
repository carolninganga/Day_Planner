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