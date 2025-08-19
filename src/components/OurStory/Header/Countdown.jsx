import React, { useState, useEffect } from "react";

export default function Countdown({ targetDate }) {
  const calculateTimeLeft = () => {
    const now = new Date();
    const difference = new Date(targetDate) - now;

    if (difference <= 0) return null;

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((difference / (1000 * 60)) % 60);
    const seconds = Math.floor((difference / 1000) % 60);

    return { days, hours, minutes, seconds };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  if (!timeLeft) {
    return <p>The day has arrived! 💍</p>;
  }

  const { days, hours, minutes, seconds } = timeLeft;

  return (
    <p>
      {days} days {hours} hours <span className="countdown-minutes-to-secs">{minutes} minutes {seconds} seconds to go</span>
    </p>
  );
}
