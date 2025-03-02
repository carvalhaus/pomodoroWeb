import "./style.css";
import { useEffect, useState } from "react";
import { MODE } from "../../constants/modes";
import { FiPause, FiPlay } from "react-icons/fi";

interface TimerProps {
  count: number;
  setCount: React.Dispatch<React.SetStateAction<number>>;
}

function getMode(mode: string) {
  switch (mode) {
    case "focus":
      return {
        minutes: 25,
        color: "rgb(132, 204, 22)",
      };
    case "short_pause":
      return {
        minutes: 5,
        color: "rgb(245, 158, 11)",
      };
    case "long_pause":
      return {
        minutes: 15,
        color: "rgb(6, 182, 212)",
      };
  }
}

function Timer({ count, setCount }: TimerProps) {
  const mode = getMode(MODE[count]) ?? {
    minutes: 25,
    color: "rgb(132, 204, 22)",
  };

  const { minutes, color } = mode;

  const totalSeconds = minutes * 60;
  const [timeLeft, setTimeLeft] = useState(totalSeconds);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    if (!isRunning) return;

    if (timeLeft <= 0) {
      setCount((prev) => prev + 1);
      return;
    }

    const timer = setTimeout(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft, setCount, isRunning]);

  useEffect(() => {
    const mode = getMode(MODE[count]);
    if (mode) {
      setTimeLeft(mode.minutes * 60);
    }

    setIsRunning(false);
  }, [count]);

  const toggleTimer = () => {
    setIsRunning((prev) => !prev);
  };

  const progress = (timeLeft / totalSeconds) * 100;
  const radius = (220 - 10) / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (progress / 100) * circumference;

  const minutesLeft = Math.floor(timeLeft / 60);
  const secondsLeft = timeLeft % 60;
  const timeFormatted = `${String(minutesLeft).padStart(2, "0")}:${String(
    secondsLeft
  ).padStart(2, "0")}`;

  return (
    <div className="timer">
      <svg width={220} height={220} viewBox={`0 0 220 220`}>
        <circle
          cx={110}
          cy={110}
          r={radius}
          fill="transparent"
          stroke="#e0e0e0"
          strokeWidth={10}
        />

        <circle
          cx={110}
          cy={110}
          r={radius}
          fill="transparent"
          stroke={color}
          strokeWidth={10}
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          strokeLinecap="round"
          transform={`rotate(-90 110 110)`}
        />

        <text
          x="50%"
          y="50%"
          textAnchor="middle"
          dy="0.3em"
          fontSize="60"
          fill={color}
          fontWeight="bold"
        >
          {timeFormatted}
        </text>
      </svg>

      <button onClick={toggleTimer} className="timer-btn">
        {isRunning ? (
          <FiPause title="Pause a seção" />
        ) : (
          <FiPlay title="Inicie a seção" />
        )}
      </button>
    </div>
  );
}

export default Timer;
