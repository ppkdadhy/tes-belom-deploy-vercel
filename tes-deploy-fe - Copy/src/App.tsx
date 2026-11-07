import { useState } from "react";
import heroImg from "./assets/hero.png";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import "./App.css";
import { NameForm } from "./pages/users/NameForm.tsx";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <>
      <NameForm />
    </>
  );
}

export default App;
