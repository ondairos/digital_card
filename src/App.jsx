import { useState } from "react";
import "./App.css";
import "./assets/GTWalsheimProRegular.ttf";
import MainCard from "./components/MainCard";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="main_container">
      <MainCard />
    </div>
  );
}

export default App;
