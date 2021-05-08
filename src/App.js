import logo from "./logo.svg";
import "./App.css";
import { useSettingsStore, usePeopleStore } from "./store";
import People from "./components/People";
import Input from "./components/Input";
import { useEffect } from "react";

function App() {
  const toggleDarkMode = useSettingsStore((state) => state.toggleDarkMode);
  const dark = useSettingsStore((state) => state.dark);

  useEffect(() => {
    if (dark) {
      document.querySelector("body").classList.add("dark");
    } else {
      document.querySelector("body").classList.remove("dark");
    }
  }, [dark]);
  return (
    <div className="App">
      <button onClick={toggleDarkMode}>Toggle dark mode</button> <br />
      Yaw Yaw
      <Input />
      <People />
    </div>
  );
}

export default App;
