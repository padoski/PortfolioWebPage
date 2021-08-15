import Topbar from "./components/topbar/Topbar";
import Intro from "./components/intro/Intro";
import Shopearn from "./components/shopearn/Shopearn";
import Orlik from "./components/orlik/Orlik";

import Menu from "./components/menu/Menu";
import "./app.scss";
import { useState } from "react";
function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="app">
      <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <div className="sections">
        <Intro />
        <Shopearn />
        <Orlik />
      </div>
    </div>
  );
}

export default App;
