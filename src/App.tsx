import { useCallback, useState } from "react";
function App() {
  const chords = ["C", "D", "E", "F", "G", "A", "B"] as const;
  const randomChordGenerator = useCallback(() => {
    console.log("generate!");
    return chords[Math.floor(Math.random() * chords.length)];
  }, [chords]);
  const [secondsInterval, setSecondsInterval] = useState<number>(2);
  const randomChord = useState<string | undefined>();
  let startGenerating: number;

  return (
    <div className="flex flex-row justify-center">
      <div className="basis-1/2">
        <div className="text-2xl">Chord Generator</div>
        <form>
          <label htmlFor="seconds">How many seconds in an interval?</label>
          <input
            type="text"
            id="bpm"
            name="bpm"
            value={secondsInterval}
            onChange={(e) => {
              setSecondsInterval(parseInt(e.target.value, 10));
            }}
          />
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={() => {
              startGenerating = setInterval(randomChordGenerator, 1000);
            }}
          >
            Start!
          </button>
          <button
            className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
            onClick={() => {
              clearInterval(startGenerating);
            }}
          >
            Stop!
          </button>
        </form>
        <div>Chord: </div>
        <div className="text-xl">{randomChord}</div>
      </div>
    </div>
  );
}

export default App;
