import { useEffect, useState } from "react";
import "./style.css";

interface TimerProps {
  minutes?: number;
  size?: number;
  strokeWidth?: number;
  color?: string;
}

function Timer({
  minutes = 25,
  size = 220,
  strokeWidth = 10,
  color = "#4CAF50",
}: TimerProps) {
  const totalSeconds = minutes * 60;
  const [timeLeft, setTimeLeft] = useState(totalSeconds);

  useEffect(() => {
    if (timeLeft <= 0) return; // Stop when countdown reaches 0

    const timer = setInterval(() => {
      setTimeLeft((prev) => Math.max(prev - 1, 0));
    }, 1000);

    return () => clearInterval(timer); // Cleanup interval on unmount
  }, [timeLeft]);

  const progress = (timeLeft / totalSeconds) * 100; // Convert to percentage
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (progress / 100) * circumference;

  
  const minutesLeft = Math.floor(timeLeft / 60);
  const secondsLeft = timeLeft % 60;
  const timeFormatted = `${String(minutesLeft).padStart(2, "0")}:${String(
    secondsLeft
  ).padStart(2, "0")}`;

  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
      {/* Background Circle */}
      <circle
        cx={size / 2}
        cy={size / 2}
        r={radius}
        fill="transparent"
        stroke="#e0e0e0"
        strokeWidth={strokeWidth}
      />
      {/* Progress Circle */}
      <circle
        cx={size / 2}
        cy={size / 2}
        r={radius}
        fill="transparent"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeDasharray={circumference}
        strokeDashoffset={offset}
        strokeLinecap="round"
        transform={`rotate(-90 ${size / 2} ${size / 2})`} // Start from top
      />
      {/* Time Left in the Middle */}
      <text
        x="50%"
        y="50%"
        textAnchor="middle"
        dy="0.3em"
        fontSize="18"
        fill={color}
        fontWeight="bold"
      >
        {timeFormatted}
      </text>
    </svg>
  );
}

export default Timer;
