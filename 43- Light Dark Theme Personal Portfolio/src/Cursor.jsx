import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const Cursor = ({ magnetic }) => {
  const [pos, setPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const move = (e) => {
      setPos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <motion.div
      className="fixed top-0 left-0 w-4 h-4 rounded-full bg-white pointer-events-none z-[9999]"
      animate={{ x: pos.x, y: pos.y }}
      transition={{
        type: "spring",
        stiffness: 500,
        damping: 40
      }}
    />
  );
};

export default Cursor;
