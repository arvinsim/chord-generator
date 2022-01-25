import { Routes, Route, Link } from "react-router-dom";

import { ChordGenerator } from "./ChordGenerator";
import { ChordProgressions } from "./ChordProgressions";

function App() {
  return (
    <div className="flex flex-row justify-center">
      <div className="basis-1/2">
        <div className="text-2xl">Chord Tools</div>
        <Link to="/chord-progressions">
          <div className="underline text-blue-600 hover:text-blue-800 visited:text-purple-600">
            Chord Progressions
          </div>
        </Link>
        <Link to="/chord-generator">
          <div className="underline text-blue-600 hover:text-blue-800 visited:text-purple-600">
            Chord Generator
          </div>
        </Link>
        <Routes>
          <Route path="/chord-progressions" element={<ChordProgressions />} />
          <Route path="/chord-generator" element={<ChordGenerator />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
