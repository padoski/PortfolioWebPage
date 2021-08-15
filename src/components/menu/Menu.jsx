import React from "react";
import "./menu.scss";

export default function componentName({ menuOpen, setMenuOpen }) {
  return (
    <div className={"menu " + (menuOpen && "active")}>
      <ul>
        <li onClick={() => setMenuOpen(false)}>
          <a href="#intro">Home</a>
        </li>
        <li onClick={() => setMenuOpen(false)}>
          <a href="#shopearn">ShopEarn</a>
        </li>
        <li onClick={() => setMenuOpen(false)}>
          <a href="#orlik">Orlik</a>
        </li>
      </ul>
    </div>
  );
}
