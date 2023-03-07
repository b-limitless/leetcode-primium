function minMeetingRooms(intervals) {
    // Get the start time in index 
    const start = intervals.map(row => row.start).sort((a,b) => a - b);
    const end = intervals.map(row => row.end).sort((a,b) => a - b);

    // Pointers for start and end
    let s = 0; // Start pointer 
    let e = 0; // End pointer
    let res = 0;
    let count = 0;

    while(s < intervals.length) {
        if(start[s] < end[e]) {
            count++;
            s++;
        } else {
            count--;
            e++;
        }
        res = Math.max(res, count);
    }
    return res;

}

intervals = [
    { start: 0, end: 30 },
    { start: 5, end: 10 },
    { start: 15, end: 20 },
];

console.log(minMeetingRooms(intervals));