import "./App.css";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import { Outlet } from "react-router-dom";
import { ModeContext } from "./Context/ModeContext";
import { useState, useEffect } from "react";

function App() {
  const [mode, setMode] = useState<"light" | "dark">(
    () => (localStorage.getItem("mode") as "light" | "dark") || "light"
  );
  useEffect(() => {
    document.documentElement.classList.remove("dark", "light");
    document.documentElement.classList.add(mode);
    localStorage.setItem("mode", mode);
  }, [mode]);

  return (
    <ModeContext.Provider value={{ mode, setMode }}>
      <div className="font-inter">
        <Navbar />
        <div className="lg:px-[112px] px-[32px]">
          <Outlet />
          <Footer />
        </div>
      </div>
    </ModeContext.Provider>
  );
}

export default App;
