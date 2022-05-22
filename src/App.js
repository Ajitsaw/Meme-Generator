import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header"
import Footer from "./components/Footer"
import './scss/app.scss';

// Pages
import StartPage from "./pages/StartPage";
import About from "./pages/About";
import Resources from "./pages/Resources";


function App() {
  const [dark, setDark] = React.useState(false)

  function toggleDark() {
    setDark(prev => !prev)
  }

  return (
    <div className="App">
      <Header getDark={toggleDark} darkMode={dark}/>
      <main className={dark ? "dark" : ""}>
        <Routes>
          <Route path="/" element={<StartPage />}/>
          <Route path="/about" element={<About />}/>
          <Route path="/resources" element={<Resources />}/>
        </Routes>
      </main>
      <Footer darkMode={dark}/>
    </div>
  );
}

export default App;
