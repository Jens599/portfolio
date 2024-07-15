import { motion } from "framer-motion";

const BlinkingCursor = () => {
  return (
    <motion.div
      className="hidden h-[7.5rem] w-2 translate-y-6 bg-white md:inline-block text-white"
      animate={{ opacity: [1, 0, 1] }}
      transition={{
        duration: 1.5,
        repeat: Infinity,
        repeatType: "loop",
      }}
    />
  );
};

export default BlinkingCursor;
