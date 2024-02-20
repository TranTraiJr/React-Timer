import { formatTime } from "./ultis/formatTime";
import useTimer from "./useTimer";

function App() {
  const { time, startTimer, stopTimer, resetTimer, active } = useTimer(0);

  return (
    <div className="bg-stone-300 h-screen flex flex-col">
      <h1 className="text-9xl text-center py-20">Coder Timer</h1>
      <div className="text-center">
        <div className="text-7xl">
          <p>{formatTime(time)}</p>
        </div>
        <div className="flex justify-center mt-14">
          <button
            className="mr-3 inline-block text-xl  font-semibold tracking-wide uppercase transition-colors duration-300 bg-yellow-400 rounded-full text-stone-800 hover:bg-yellow-300 focus:bg-yellow-300 focus:outline-none focus:ring focus:ring-yellow-400 focus:ring-offset-2 disabled:cursor-not-allowed px-2.5 py-1 md:px-3.5 md:py-2"
            onClick={stopTimer}
          >
            Stop
          </button>
          <button
            className="mr-3 inline-block text-xl  font-semibold tracking-wide uppercase transition-colors duration-300 bg-yellow-400 rounded-full text-stone-800 hover:bg-yellow-300 focus:bg-yellow-300 focus:outline-none focus:ring focus:ring-yellow-400 focus:ring-offset-2 disabled:cursor-not-allowed px-2.5 py-1 md:px-3.5 md:py-2"
            ref={active}
            onClick={startTimer}
          >
            Start
          </button>
          <button
            className="inline-block text-xl  font-semibold tracking-wide uppercase transition-colors duration-300 bg-yellow-400 rounded-full text-stone-800 hover:bg-yellow-300 focus:bg-yellow-300 focus:outline-none focus:ring focus:ring-yellow-400 focus:ring-offset-2 disabled:cursor-not-allowed px-2.5 py-1 md:px-3.5 md:py-2"
            onClick={resetTimer}
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
