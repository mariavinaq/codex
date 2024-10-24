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

    if (years > 1) { return `${years} years ago` } 
    else if (years === 1) { return '1 year ago' }
    else if (months > 1) { return `${months} months ago` }
    else if (months === 1) { return '1 month ago' }
    else if (weeks > 1) { return `${weeks} weeks ago` }
    else if (weeks === 1) { return '1 week ago' }
    else if (days > 1) { return `${days} days ago` }
    else if (days === 1) { return 'Yesterday'}
    else if (hours > 1) { return `${hours} hours ago` }
    else if (hours === 1) { return '1 hour ago' }
    else if (minutes > 1) { return `${minutes} minutes ago`}
    else if (minutes === 1) {return '1 minute ago' }
    else if (seconds > 1) { return `${seconds} seconds ago` }
    else {return 'Just now'};
}; 

export default agoTimestamp;