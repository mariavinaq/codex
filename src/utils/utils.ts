const agoTimestamp = (moment: Date) => {
    const now = new Date();
    const date = new Date(moment);
    const difference = now.getTime() - date.getTime();
    const seconds = Math.floor(difference / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);
    const weeks = Math.floor(days / 7);
    const months = Math.floor(weeks / 4.345);
    const years = Math.floor(months / 12);

    if (years >= 1) { return `${years}y` } 
    else if (months >= 1) { return `${months}mo` }
    else if (weeks >= 1) { return `${weeks}w` }
    else if (days >= 1) { return `${days}d` }
    else if (hours >= 1) { return `${hours}h` }
    else if (minutes >= 1) { return `${minutes}m` }
    else if (seconds >= 1) { return `${seconds}s` }
    else {return '0s'};
}; 

export { agoTimestamp };