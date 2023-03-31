import { motion } from 'framer-motion';

function ProgressBar({ progress }) {
  return (
    <div className='flex flex-col gap-y-2'>
      <div className='flex justify-between items-center'>
         <p className='text-gray-400 font-semibold'><span className='text-black'>5/</span>35</p>
         <p className='text-[#3A6FF8] font-semibold'>{progress}%</p> 
      </div>  
      <motion.div
        className="progress-bar"
        style={{
          background: '#EEEFFF',
          height: '5px',
          width: '100%',
          borderRadius: '5px',
        }}
      >
        <motion.div
          className="progress"
          style={{
            background: '#3A6FF8',
            height: '5px',
            width: `${progress}%`,
            borderRadius: '5px',
          }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.5 }}
        />
      </motion.div>
    </div>
  );
}

export default ProgressBar;
