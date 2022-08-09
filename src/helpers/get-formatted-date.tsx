function getFormattedDate(date: string): string {
    const dateObj = new Date(date);
    const dayNumber = dateObj.getDate();
    const month = dateObj.toLocaleDateString(['ru-RU'], {month: 'short'}).substring(0,3).toLowerCase();
    const year = dateObj.getFullYear();
    const weekDay = dateObj.toLocaleDateString(['ru-RU'], {weekday: 'short'})

    // console.log('weekDay is', weekDay);
    

    return `${dayNumber} ${month} ${year}, ${[weekDay[0].toUpperCase(), weekDay[1]].join('')}`
}


export {getFormattedDate};