function dayOfWeek(day) {
    let weekday;

    switch (day) {
        case 'Monday':
            weekday = 1; break;
        case 'Tuesday':
            weekday = 2; break;
        case 'Wednesday':
            weekday = 3; break;
        case 'Thursday':
            weekday = 4; break;
        case 'Friday':
            weekday = 5; break;
        case 'Saturday':
            weekday = 6; break;
        case 'Sunday':
            weekday = 7; break;
        default:
            weekday = 'error'
    }

    console.log(weekday)
}

dayOfWeek('Monday');
dayOfWeek('Friday');
dayOfWeek('Invalid');