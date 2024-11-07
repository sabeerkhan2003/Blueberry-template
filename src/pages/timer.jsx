import React, { useState, useEffect } from 'react';

function CountdownTimer({ targetDate }) {
    const [timeRemaining, setTimeRemaining] = useState(calculateTimeRemaining(targetDate));

    useEffect(() => {
        const intervalId = setInterval(() => {
            setTimeRemaining(calculateTimeRemaining(targetDate));
        }, 1000);

        return () => clearInterval(intervalId);
    }, [targetDate]);

    function calculateTimeRemaining(endDate) {
        const now = new Date().getTime();
        const distance = new Date(endDate).getTime() - now;

        if (distance <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        return { days, hours, minutes, seconds };
    }

    return (
        <div>

            <div className='bg-[#F8F8FB] font-quicksand rounded-lg inline p-4 text-[#757A88]'>
                {timeRemaining.days} Days : {timeRemaining.hours}h : {timeRemaining.minutes}m : {timeRemaining.seconds}s
            </div>
            {timeRemaining.days === 0 && timeRemaining.hours === 0 && timeRemaining.minutes === 0 && timeRemaining.seconds === 0 && (
                <p>Time's up!</p>
            )}
        </div>
    );
}

export default CountdownTimer;
