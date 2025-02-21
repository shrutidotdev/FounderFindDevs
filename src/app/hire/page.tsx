"use client";

import React from 'react';
import HiringForm from '../components/forms/Hire/HiringForm';
import { motion } from 'motion/react';

const Hire = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen w-full flex justify-center items-center  px-4"
    >
      <div className="w-full max-w-7xl">
        <HiringForm />
      </div>
    </motion.div>
  );
};

export default Hire;