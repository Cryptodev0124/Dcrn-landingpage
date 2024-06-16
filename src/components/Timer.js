import FlipCountdown from "@rumess/react-flip-countdown";

export default function Timer() {
    const endDate = new Date('2024-03-05T00:00:00');
    const startDate = new Date('2024-03-05T00:00:00');
    const currentDate = Date.now();
    let date;
    let isValid;
    if (currentDate < startDate.getTime()) {
        date = startDate;
        isValid = true;
    } else if (currentDate >= startDate.getTime() && currentDate <= endDate.getTime()){
        date = endDate;
        isValid = true;
    } else if (currentDate > endDate.getTime()) {
        date = 0;
        isValid = false;
    }
    return (isValid ?
        <FlipCountdown
            hideYear
            hideMonth
            theme="light"
            titlePosition='bottom'
            dayTitle='D'
            hourTitle='H'
            minuteTitle='M'
            secondTitle='S'
            endAt={date.toString()}
        /> : <div className="emptyDiv"></div>
    );
};