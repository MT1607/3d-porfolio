import React from 'react';
import { motion } from 'framer-motion';
import { SectionWrapper } from '../hoc';
import { technologies } from '../constants';
import { BallCanvas } from './canvas';
const Tech = () => {
  return (
    <div className="flex flex-wrap gap-10 justify-center">
      {technologies.map((tech, index) => (
        <div key={index} className="w-28 h-28">
          <BallCanvas icon={tech.icon} />
        </div>
      ))}
    </div>
  );
};

export default SectionWrapper(Tech, '');
