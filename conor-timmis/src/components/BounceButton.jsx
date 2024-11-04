import { motion } from 'framer-motion';

const BounceButton = ({ children }) => {
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      className="rounded-xl bg-red-500 px-6 py-2 text-sm font-medium text-white"
      transition={{ type: 'spring', stiffness: 500, damping: 15 }}
    >
      {children}
    </motion.button>
  );
};

export default BounceButton;
