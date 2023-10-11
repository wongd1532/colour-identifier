import "./App.css";
import ModeSelector from "./components/ModeSelector";
import HexInput from "./components/HexInput";
import RgbInput from "./components/RgbInput";

function App() {
  return (
    <div>
      <header>Colour Identifier</header>
      <ModeSelector />
      <HexInput />
      <RgbInput />
    </div>
  );
}

export default App;
