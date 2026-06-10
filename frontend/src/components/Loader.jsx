import React from "react";
import { motion } from "framer-motion";

export default function Loader() {
  return (
    <motion.div
      className="flex justify-center items-center mt-4"
      animate={{ rotate: 360 }}
      transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
    >
      <div className="w-12 h-12 border-4 border-indigo-600 border-dashed rounded-full"></div>
    </motion.div>
  );
}
