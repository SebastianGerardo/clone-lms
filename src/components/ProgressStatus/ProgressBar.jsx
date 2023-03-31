import { motion } from 'framer-motion';

function ProgressBar({ progress }) {
  return (
    <motion.div
      className="progress-bar"
      style={{
        background: 'blue',
        height: '10px',
        width: '20%',
      }}
    >
      <motion.div
        className="progress"
        style={{
          background: 'red',
          height: '10px',
          width: `${progress}%`,
        }}
        animate={{ width: `${progress}%` }}
        transition={{ duration: 0.5 }}
      />
    </motion.div>
  );
}

export default ProgressBar;
