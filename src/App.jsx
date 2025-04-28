import { useState, useEffect, createContext } from "react";
import { useLocation } from "react-router-dom";
import ScrollToTop from "./Compenents/ScrollToTop";
import AppRouter from "./Router/Router";
import "./index.css";

export const LanguageContext = createContext();

function App() {
  const location = useLocation();
  const [isEnglish, setIsEnglish] = useState(() => {
    return localStorage.getItem("isEnglish") === "false" ? false : true;
  });

  useEffect(() => {
    const path = location.pathname;
    if (path.startsWith("/tr") || path.startsWith("/oyun")) {
      setIsEnglish(false);
    } else {
      setIsEnglish(true);
    }
  }, [location.pathname]);

  return (
    <LanguageContext.Provider value={{ isEnglish, setIsEnglish }}>
      <div>
        <AppRouter />
        <ScrollToTop />
      </div>
    </LanguageContext.Provider>
  );
}

export default App;
