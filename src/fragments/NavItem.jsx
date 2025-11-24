"use client";
import { useRef, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";

export default function NavItem({
  label,
  offset,
  isOpen,
  isSomeItemOpen,
  onToggle,
  children,
}) {
  const buttonRef = useRef(null);

  // Click outside to close
//   useEffect(() => {
//     const handleClick = (e) => {
//       if (!buttonRef.current?.parentNode.contains(e.target)) {
//         if (isOpen) onToggle();
//       }
//     };
//     document.addEventListener("pointerdown", handleClick);
//     return () => document.removeEventListener("pointerdown", handleClick);
//   }, [isOpen, onToggle]);

  // Determine if this item should be dimmed
  const hideThisItem = isSomeItemOpen && !isOpen;

  // Dropdown variants prevent flashing
  const dropdownVariants = {
    closed: {
      opacity: 0,
      visibility: "hidden",
      pointerEvents: "none",
      transition: {
        opacity: { duration: 0.2 },
        visibility: { delay: 0.2 },
      },
    },
    open: {
      opacity: 1,
      visibility: "visible",
      pointerEvents: "auto",
      transition: {
        opacity: { duration: 0.25 },
      },
    },
  };

  return (
    <motion.li
      animate={{
        y: isOpen ? offset : 0,
        opacity: hideThisItem ? 0 : 1,
        scale: hideThisItem ? 0.9 : 1,
      }}
      transition={{ duration: 0.3 }}
      className="relative"
    >
      <motion.button
        ref={buttonRef}
        className="text-white"
        aria-expanded={isOpen}
        aria-haspopup="true"
        onClick={onToggle}
        style={{ fontSize: "1.55rem" }}
        whileTap={{
          scale: 0.95,
          backgroundColor: "#d1a054",
          borderRadius: "10px",
        }}
      >
        {label}
      </motion.button>

      {/* Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.ul
            key="dropdown"
            initial="closed"
            animate="open"
            exit="closed"
            variants={dropdownVariants}
            className={`
              absolute left-0 flex flex-col gap-8 items-center text-white
              transition-all duration-200
            `}
            style={{
              top: "3.5rem",
              gap: "1rem",
              alignItems: "start",
              justifyContent: "start",
              textAlign: "center",
              opacity: 0,
            }}
          >
            {children(isOpen)}
          </motion.ul>
        )}
      </AnimatePresence>
    </motion.li>
  );
}
