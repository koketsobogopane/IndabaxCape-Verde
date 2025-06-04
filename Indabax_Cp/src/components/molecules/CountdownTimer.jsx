import React, { useState, useEffect } from 'react';

const CountdownTimer = ({ targetDate }) => {
  const calculateTimeLeft = () => {
    const difference = +new Date(targetDate) - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }
    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
  const [isCounting, setIsCounting] = useState(true);

  // biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
  useEffect(() => {
    const timer = setInterval(() => {
      const newTimeLeft = calculateTimeLeft();
      if (
        Object.keys(newTimeLeft).length === 0 &&
        newTimeLeft.constructor === Object
      ) {
        setIsCounting(false);
        clearInterval(timer);
      }
      setTimeLeft(newTimeLeft);
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  const timerComponents = Object.keys(timeLeft).map((interval) => {
    if (!timeLeft[interval] && timeLeft[interval] !== 0) {
      return null;
    }

    return (
      <span key={interval} className="flex flex-col items-center mx-2 sm:mx-3">
        {/* Removed gradient, now uses solid text-brand-accent */}
        <span className="text-3xl sm:text-4xl md:text-5xl font-bold text-brand-accent leading-none">
          {String(timeLeft[interval]).padStart(2, '0')}
        </span>
        {/* Changed text-gray-300 to text-white for better contrast on hero overlay */}
        <span className="text-xs sm:text-sm text-white uppercase mt-1">
          {interval}
        </span>
      </span>
    );
  });

  return (
    <div className="mt-8 flex justify-center">
      {isCounting && timerComponents.length ? (
        timerComponents
      ) : (
        // Changed gradient here as well
        <span className="text-2xl sm:text-3xl font-bold text-brand-accent">
          The event has started!
        </span>
      )}
    </div>
  );
};

export default CountdownTimer;
