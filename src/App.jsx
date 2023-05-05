import "./App.css";
import { FaExchangeAlt } from "react-icons/fa";
import { useStore } from "./hooks/useStore";



function App() {
  const { fromLanguage, setFromLanguage } = useStore();
  return (
    <div className="App">
      <h1 className="text-red-500 font-inter">Hello World</h1>
      <button
        onClick={() => {
          setFromLanguage("es");
        }}
      >
        <FaExchangeAlt />
      </button>
      <p>{fromLanguage}</p>
    </div>
  );
}

export default App;
