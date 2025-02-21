"use client";

import React from 'react';
import { motion } from 'motion/react';
import HiringForm from '../components/forms/Hire/HiringForm';

const Hire = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen max-w-7xl w-full flex justify-center items-center  px-4"
    >
      <div>
        <HiringForm />
      </div>
    </motion.div>
  );
};

export default Hire;