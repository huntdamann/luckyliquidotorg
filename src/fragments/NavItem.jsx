"use client";

import { useRef, useEffect } from "react";

export default function NavItem({
  label,
  offset,
  isOpen,
  isSomeItemOpen,
  onToggle,
  children,
}) {
  const buttonRef = useRef(null);

  const hideThisItem = isSomeItemOpen && !isOpen;

  return (
    <li
      className={`nav-item ${isOpen? "open" : ""} ${hideThisItem ? "dimmed" : ""}`}
      style={{ "--offset": `${offset}px` }}
    >
      <button
        ref={buttonRef}
        className="nav-button"
        aria-expanded={isOpen}
        aria-haspopup="true"
        onClick={onToggle}
      >
        {label}
      </button>

      <ul className={`dropdown ${isOpen ? "open" : ""}`}>
        {children(isOpen)}
      </ul>
    </li>
  );
}
