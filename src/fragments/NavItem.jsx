"use client"; 
import { useRef, useEffect } from "react"; 
import { motion, AnimatePresence } from "motion/react";

export default function NavItem({ 
    label,
    offset,
    isOpen,
    isSomeItemOpen,
    onToggle,
    children 
  }) {
    const buttonRef = useRef(null);
  
    // Click outside to close
    useEffect(() => {
      const handleClick = (e) => {
        if (!buttonRef.current?.parentNode.contains(e.target)) {
          if (isOpen) onToggle();
        }
      };
      document.addEventListener("click", handleClick);
      return () => document.removeEventListener("click", handleClick);
    }, [isOpen, onToggle]);
  
    // Determine whether this item should be hidden
    const hideThisItem = isSomeItemOpen && !isOpen;
  
    return (

    
      <motion.li
        animate={{ 
          y: isOpen ? offset : 0,
          opacity: hideThisItem ? 0 : 1,   
          scale: hideThisItem ? 0.9 : 1, 
        }}
        transition={{ duration: 0.3 }}
        className={`relative `}
        >
        <motion.button
          ref={buttonRef}
          className="text-white"
          aria-expanded={isOpen}
          aria-haspopup="true"
          onClick={onToggle}
          style={{fontSize: "1.55rem"}}
          whileTap={{
            scale: 0.95,
            backgroundColor: "#d1a054",
            borderRadius: "10px",
          }}
        >
          {label}
        </motion.button>
  
        <AnimatePresence>

        <motion.ul
        initial={{opacity: 0, visibility: "hidden"}}
        exit={{opacity: 0, visibility: "hidden"}}
             animate={{ 
                pointerEvents: isOpen ? "auto" : "none",
                opacity: isOpen? 1 : 0,
                visibility: isOpen? "visible" : "hidden"
                
              }}
              transition={{delay: isOpen && label !== "Socials" ? 0.3 : 0}}

          className={`
            absolute left-0 flex flex-col gap-8 items-center  text-white
            transition-all duration-200
          `}
          style={{top: "3.5rem", gap: "1rem", alignItems: "start", justifyContent: "start", textAlign: "center"}}
        >
          {children(isOpen)}
        </motion.ul>
        </AnimatePresence>

      </motion.li>
    );
  }
  