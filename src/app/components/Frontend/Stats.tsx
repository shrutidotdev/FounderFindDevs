import {fadeInUp} from "@/lib/Animations";
import { motion } from "motion/react";
import React from "react";
const statsData = [
  {
    id: 1,
    title: "10k+",
    description: "Active Jobs",
  },
  {
    id: 2,
    title: "8k+",
    description: "Companies",
  },
  {
    id: 3,
    title: "100k+",
    description: "Jobseekers",
  },
  {
    id: 4,
    title: "10k+",
    description: "Active Jobs",
  },
];

const Stats = () => {
  return (
    <div>
      {/* Stats Section */}
      <motion.div
        variants={fadeInUp}
        className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8"
      >
        {statsData.map(({ title, description , id}) => (
       
            <div className="p-4 text-center" key={id}>
              <div className="text-2xl font-bold text-white">{title}</div>
              <div className="text-white/70 text-sm">{description}</div>
            </div>
         
        ))}
      </motion.div>
    </div>
  );
};

export default Stats;
