import { motion } from "framer-motion";

export default function StepProgressBar({ steps, currentStep }) {
  const stepsArray = Array.from(Array(steps).keys());

  const progressWidth = `${(currentStep / (steps - 1)) * 100}%`;

  return (
    <div className="relative h-16 flex justify-between items-center">
      {stepsArray.map((step) => (
        <div
          key={step}
          className={`step-progress-bar__step flex flex-col items-center bg-white border border-gray-400 rounded-full p-1 px-3 z-10 min-w-[36.39px] min-h-[37.6px] ${
            currentStep >= step ? "active" : ""
          }`}
        >
          <div
            className={`step-progress-bar__step-number font-semibold text-lg ${
              currentStep >= step ? "text-black" : "text-gray-400"
            }`}
          >
            {step + 1}
          </div>
        </div>
      ))}
      <motion.div
        className={`step-progress-bar__progress-bar absolute h-1 rounded-full bg-gray-300`}
        style={{
          left: "0%",
          transform: "none",
          width: progressWidth,
        }}
        initial={{ width: "100%" }}
        animate={{ width: "100%" }}
        transition={{ duration: 0.5 }}
      />
      <motion.div
        className={`step-progress-bar__progress-bar absolute h-1 rounded-full bg-black`}
        style={{
          left: "0%",
          transform: "none",
          width: progressWidth,
        }}
        initial={{ width: "0%" }}
        animate={{ width: progressWidth }}
        transition={{ duration: 0.5 }}
      />
    </div>
  );
}
